// add whatever parameters you deem necessary
/* checks if first string appears in second string; returns true, false */
function isSubsequence(str1, str2) {
    // find first letter of first string in second string
    let firstLtrIdx = str2.indexOf(str1[0])
    if(firstLtrIdx === -1){
        return false;
    }

    // set target letter index to second letter
    let targetIdx = 1

    // loop again starting at first and find second letter of first string in consecutive letters
    for (let i= firstLtrIdx+1; i< str2.length; i++){
        // if not target found, keep looping
        // if found, change target to next letter
        if(str2[i] === str1[targetIdx]){
            targetIdx++
            if(targetIdx >= str1.length){
                return true
            }
        }
    }

    // if target index is less than first string length, return false; return true otherwise
    if(targetIdx < str1.length){
        return false
    }else {
        return true
    }
}
