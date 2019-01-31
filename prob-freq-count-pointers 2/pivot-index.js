// add whatever parameters you deem necessary
function pivotIndex(nums) {

//get totalSum of all the numbers with a reduce function
let totalSum = nums.reduce((acc, val) => acc + val)

//define leftSum as arr[0]
let leftSum = nums[0]
//define rightSum as totalSum-(nums[0]+nums[1])
let rightSum = totalSum - (nums[0] + nums[1])

//loop through the numsay starting at position 1 and see if Left === Right
for (let i=1; i<nums.length; i++) {
        if (leftSum === rightSum) {
            return i
        } else {
            leftSum += nums[i]
            rightSum -= nums[i+1]
        }
    }

return -1

}
