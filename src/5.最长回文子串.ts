/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let len = s.length;
  let res = "";
  let dp = Array.from(new Array(len), () => new Array(len).fill(0));
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
}
// @lc code=end
