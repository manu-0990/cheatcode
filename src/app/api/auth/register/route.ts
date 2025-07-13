import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parseResult = registerSchema.safeParse(body)

    if (!parseResult.success) {
      const errors = parseResult.error.issues.map((issue) => issue.message)
      return NextResponse.json({ error: errors }, { status: 400 })
    }

    const { name, email, password } = parseResult.data

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const usernameBase = email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '')
    let finalUsername = usernameBase
    let counter = 1
    while (await prisma.user.findUnique({ where: { username: finalUsername } })) {
      finalUsername = `${usernameBase}${counter}`
      counter++
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        username: finalUsername,
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        createdAt: true,
      }
    })

    return NextResponse.json(
      {
        message: "User created successfully",
        user,
      },
      { status: 201 }
    )

  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
