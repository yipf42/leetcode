/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  const num = parseInt(s, 10);

  if (isNaN(num)) return 0;
  if (num < Math.pow(-2, 31)) return Math.pow(-2, 31);
  if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
  return num;
}
// @lc code=end
