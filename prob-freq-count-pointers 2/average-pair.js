// add whatever parameters you deem necessary
/* accept an array and a num and find pair with average of num; return true, false */
function averagePair(arr,target) {
    // make sure there's a pair in array
    if(arr.length < 2){
        return false;
    }
    // set left and right to edges - loop until left is bigger than right
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
    // if average is = target, return true
        if((arr[left] + arr[right])/2 === target){
            return true
    // if average is greater than target, subtract from right
        }else if((arr[left] + arr[right])/2 > target) {
            right --;
    // if average is smaller than taget, add to left
        }else if((arr[left] + arr[right])/2 < target){
            left ++;
        }
    }

    return false;

}
