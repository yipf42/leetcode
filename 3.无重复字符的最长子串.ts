/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let start: number = 0, end: number = 0, ans: number = 0;
  const position = new Map();
  for (; end < s.length; end++) {
    const val = s.charAt(end);
    if (position.has(val)) {
      start = Math.max(position.get(val), start);
    }
    ans = Math.max(ans, end - start + 1);
    position.set(val, end + 1);
  }
  return ans;
};
// @lc code=end

