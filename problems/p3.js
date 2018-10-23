/**
 * 给定一个字符串，找出不含有重复字符的最长子串的长度。
 * @param {*} s
 */
const lengthOfLongestSubstring = (s) => {
  let subS = 0;
  let subTmp = 0;
  let curStr = '';
  const strLen = s.split('').length;
  for (let i = 0; i < strLen; i++) {
    if (curStr.indexOf(s[i]) === -1) {
      curStr += s[i];
      subTmp += 1;
    } else {
      if (subS <= subTmp) {
        subS = subTmp;
      }
      curStr += s[i];
      const index = curStr.indexOf(s[i]);
      curStr = curStr.slice(index + 1);
      subTmp = curStr.length;
    }
  }
  subS = subS > subTmp ? subS : subTmp;
  return subS;
};

console.log(lengthOfLongestSubstring('dvdf'));
