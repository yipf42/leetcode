/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const array = nums1.concat(nums2).sort((a, b) => a - b);
  const length = array.length;
  if (length > 0 && length % 2 === 0) {
    return (array[length / 2 - 1] + array[length / 2]) / 2;
  } else {
    return array[(length - 1) / 2];
  }
}
// @lc code=end
