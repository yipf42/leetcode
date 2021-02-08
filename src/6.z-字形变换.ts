/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const rows: string[] = Array(numRows).fill("");
  let flag = false;
  let i = 0;
  for (const v of s) {
    rows[i] += v;
    if (i === 0 || i === numRows - 1) {
      flag = !flag;
    }
    i += flag ? 1 : -1;
  }
  return rows.join("");
}
// @lc code=end
