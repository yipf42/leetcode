/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carryOver: number = 0
): ListNode | null {
  if (l1 === null && l2 === null) {
    return carryOver === 0 ? null : new ListNode(carryOver);
  }

  const currentSum = (l1?.val || 0) + (l2?.val || 0) + carryOver;
  return new ListNode(
    currentSum % 10,
    addTwoNumbers(l1?.next || null, l2?.next || null, (currentSum / 10) >> 0)
  );
}
// @lc code=end
