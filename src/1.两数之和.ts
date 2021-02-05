/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  while (nums.length > 1) {
    let last = nums.pop();
    if (nums.includes(target - last)) {
      return [nums.indexOf(target - last), nums.length]
    }
  }
  return [];
};
// @lc code=end

