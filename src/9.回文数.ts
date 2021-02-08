/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  let s = x.toString();
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s.charAt(i) != s.charAt(j)) {
      return false;
    }
  }
  return true;
}
// @lc code=end
