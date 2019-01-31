// add whatever parameters you deem necessary
function separatePositive(arr) {

    let left = 0
    let right = arr.length-1
    //while left pointer is less than right pointer we keep looping through the array
    while (left < right) {
        //if the left is negative AND the right is positive, then swap 
        if (arr[left]<0 && arr[right]>0) {
            let tempVal = arr[left]
            arr[left] = arr[right]
            arr[right] = tempVal
        } 

        if (arr[left]>0) {
            left ++
        }

        if (arr[right]<0){
            right --
        }
    }

    return arr;
}
