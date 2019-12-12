module.exports = {
  /**
   * https://leetcode-cn.com/problems/two-sum/
   * @param {number[]} nums
   * @param {number} target
   * @return {[number,number]}
   */
  twoSum(nums, target) {
    const dict = {};
    for (const [index, num] of nums.entries()) {
      const anotherIndex = dict[target - num];
      if (index !== anotherIndex && anotherIndex != null) {
        return [index, anotherIndex].sort();
      } else {
        dict[num] = index;
      }
    }
    return null;
  },
  /**
   * https://leetcode-cn.com/problems/3sum/
   * solution:https://leetcode-cn.com/problems/3sum/solution/three-sum-ti-jie-by-wonderful611/
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    const res = [];
    const len = nums.length - 1;
    nums.sort((a, b) => a - b);
    if (nums[0] <= 0 && nums[len] >= 0) { // 优化1: 整个数组同符号，则无解
      for (let i = 0; i < len - 1;) {
        let first = i + 1;
        let last = len;
        if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
        do {
          if (first >= last || nums[i] * nums[last] > 0) break; // 两人选相遇，或者三人同符号，则退出
          let result = nums[i] + nums[first] + nums[last];
          result === 0 && res.push([nums[i], nums[first], nums[last]]); // 如果可以组队
          if (result <= 0) { // 实力太弱，把菜鸟那边右移一位
            while (first < last && nums[first] === nums[++first]) ;// 如果相等就跳过
          } else { // 实力太强，把大神那边右移一位
            while (first < last && nums[last] === nums[--last]) ;
          }
        } while (first < last);
        while (nums[i] === nums[++i]) ;
      }
    }
    return res;
  },
  /**
   * https://leetcode-cn.com/problems/guess-numbers/
   * @param {number[]} guess
   * @param {number[]} answer
   * @return {number}
   */
  game(guess, answer) {
    return guess.reduce((acc, item, index) => {
      return acc + (item === answer[index] ? 1 : 0);
    }, 0);
  },
};