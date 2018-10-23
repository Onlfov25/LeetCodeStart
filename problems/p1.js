/**
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * @param {*} nums
 * @param {*} target
 */
const twoSum = (nums, target) => {
  const len = nums.length;
  let numArr = [];
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        numArr = [i, j];
      }
    }
  }
  return numArr;
};
