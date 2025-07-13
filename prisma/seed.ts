import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create a sample user with password for testing email/password auth
  const hashedPassword = await bcrypt.hash('password123', 12)

  const user = await prisma.user.upsert({
    where: { email: 'demo@example.com' },
    update: {},
    create: {
      email: 'demo@example.com',
      name: 'Demo User',
      username: 'demouser',
      password: hashedPassword,
    },
  })

  // Create sample problems
  const problems = [
    {
      title: 'Two Sum',
      slug: 'two-sum',
      description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
      difficulty: 'EASY' as const,
      tags: ['Array', 'Hash Table'],
      hints: [
        'A really brute force way would be to search for all possible pairs of numbers but that would be too slow.',
        'So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter.',
        'The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?'
      ],
      constraints: '2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9\nOnly one valid answer exists.',
      examples: [
        {
          input: 'nums = [2,7,11,15], target = 9',
          output: '[0,1]',
          explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
        },
        {
          input: 'nums = [3,2,4], target = 6',
          output: '[1,2]',
          explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
        }
      ],
      codeTemplates: {
        javascript: 'function twoSum(nums, target) {\n    // Your code here\n    \n}',
        python: 'def twoSum(nums, target):\n    # Your code here\n    pass',
        java: 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Your code here\n        \n    }\n}'
      },
      isPublished: true,
      authorId: user.id
    },
    {
      title: 'Add Two Numbers',
      slug: 'add-two-numbers',
      description: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.`,
      difficulty: 'MEDIUM' as const,
      tags: ['Linked List', 'Math', 'Recursion'],
      hints: [
        'Think about how you would add two numbers on paper.',
        'You need to handle the carry from one digit to the next.',
        'What happens when one list is longer than the other?'
      ],
      constraints: 'The number of nodes in each linked list is in the range [1, 100].\n0 <= Node.val <= 9\nIt is guaranteed that the list represents a number that does not have leading zeros.',
      examples: [
        {
          input: 'l1 = [2,4,3], l2 = [5,6,4]',
          output: '[7,0,8]',
          explanation: '342 + 465 = 807.'
        }
      ],
      codeTemplates: {
        javascript: 'function addTwoNumbers(l1, l2) {\n    // Your code here\n    \n}',
        python: 'def addTwoNumbers(l1, l2):\n    # Your code here\n    pass',
        java: 'class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        // Your code here\n        \n    }\n}'
      },
      isPublished: true,
      authorId: user.id
    },
    {
      title: 'Longest Substring Without Repeating Characters',
      slug: 'longest-substring-without-repeating-characters',
      description: `Given a string s, find the length of the longest substring without repeating characters.`,
      difficulty: 'MEDIUM' as const,
      tags: ['Hash Table', 'String', 'Sliding Window'],
      hints: [
        'Use a sliding window approach.',
        'Keep track of characters you have seen and their positions.',
        'When you encounter a repeated character, move the start of your window.'
      ],
      constraints: '0 <= s.length <= 5 * 10^4\ns consists of English letters, digits, symbols and spaces.',
      examples: [
        {
          input: 's = "abcabcbb"',
          output: '3',
          explanation: 'The answer is "abc", with the length of 3.'
        },
        {
          input: 's = "bbbbb"',
          output: '1',
          explanation: 'The answer is "b", with the length of 1.'
        }
      ],
      codeTemplates: {
        javascript: 'function lengthOfLongestSubstring(s) {\n    // Your code here\n    \n}',
        python: 'def lengthOfLongestSubstring(s):\n    # Your code here\n    pass',
        java: 'class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Your code here\n        \n    }\n}'
      },
      isPublished: true,
      authorId: user.id
    },
    {
      title: 'Median of Two Sorted Arrays',
      slug: 'median-of-two-sorted-arrays',
      description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).`,
      difficulty: 'HARD' as const,
      tags: ['Array', 'Binary Search', 'Divide and Conquer'],
      hints: [
        'The key insight is to use binary search.',
        'Think about partitioning both arrays.',
        'The median divides the combined array into two equal halves.'
      ],
      constraints: 'nums1.length == m\nnums2.length == n\n0 <= m <= 1000\n0 <= n <= 1000\n1 <= m + n <= 2000\n-10^6 <= nums1[i], nums2[i] <= 10^6',
      examples: [
        {
          input: 'nums1 = [1,3], nums2 = [2]',
          output: '2.00000',
          explanation: 'merged array = [1,2,3] and median is 2.'
        }
      ],
      codeTemplates: {
        javascript: 'function findMedianSortedArrays(nums1, nums2) {\n    // Your code here\n    \n}',
        python: 'def findMedianSortedArrays(nums1, nums2):\n    # Your code here\n    pass',
        java: 'class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Your code here\n        \n    }\n}'
      },
      isPublished: true,
      authorId: user.id
    }
  ]

  for (const problemData of problems) {
    const problem = await prisma.problem.upsert({
      where: { slug: problemData.slug },
      update: {},
      create: problemData,
    })

    // Create test cases for each problem
    if (problemData.slug === 'two-sum') {
      await prisma.testCase.createMany({
        data: [
          {
            problemId: problem.id,
            input: '[2,7,11,15]\n9',
            output: '[0,1]',
            isHidden: false
          },
          {
            problemId: problem.id,
            input: '[3,2,4]\n6',
            output: '[1,2]',
            isHidden: false
          },
          {
            problemId: problem.id,
            input: '[3,3]\n6',
            output: '[0,1]',
            isHidden: true
          }
        ],
        skipDuplicates: true
      })
    }
  }

  console.log('✅ Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
