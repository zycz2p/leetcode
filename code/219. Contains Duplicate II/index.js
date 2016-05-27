/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for(var i = 0, n = nums.length; i < n; i++){
        for(var j = 1; j < k+1; j++){
            if(i+j >= n) break;
            if(nums[i] === nums[i+j]) return true;
        }
    }
    return false;
};