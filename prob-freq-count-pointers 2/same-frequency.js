// add whatever parameters you deem necessary

/* Determining if two integers have the same frequency of individual digits*/

function sameFrequency(num1,num2) {

    
    //if the length of both numbers is not equal, return false
    if (num1.toString().length !== num2.toString().length) {
        return false
    }
    //find num1 frequencies
    num1Freq = countFrequencies(num1)
    num2Freq = countFrequencies(num2)
    //loop through num1frequencies and see if it is a match with the value at num2
        //if not, return false

    for (let num of num1Freq.keys()) {
        if(num1Freq.get(num) !== num2Freq.get(num)) {
            return false
        }
    }
    //return true
    return true

}


    // helper function with frequencies
function countFrequencies (num) {
    let frequency= new Map();
    //turn the number into a string
    numStr = num.toString();
    //loop through the string and count the frequencies
    for (let i=0;i<numStr.length;i++) {
        let numCount = frequency.has(numStr[i]) || 0;
        frequency.set(numStr[i], numCount + 1);
    }

    return frequency
}