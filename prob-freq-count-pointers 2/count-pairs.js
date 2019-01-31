// add whatever parameters you deem necessary
function countPairs(nums, val) {
    // sort the array in place 
    let sortedNums = nums.sort(function(a, b){return a-b})

    // define low as 0
    let low = 0
    // define high as num.length -1
    let high = nums.length-1
    // define counter
    let count = 0

    // loop num.length amount of times and each time:
    while (low < high) {
        // see if low + high = val
        let sum = nums[low] + nums[high]
        
        if (sum === val) {
            count ++
        }
        if (sum >= val) {
            high --
        } 
        if (sum <= val) {
            low ++
        }
    }
   
    return count
}
