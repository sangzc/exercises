// add whatever parameters you deem necessary
/* Given a list of numbers, gives back the length of the longest streak of declining numbers; returns interger */

function longestFall(arr) {

//if it's an empty array, return 0
     if(arr.length === 0) {
         return 0
     }

//start highestStreak at 1
     let highestStreak = 1
//start currentStreak at 1
     let currentStreak = 1

//loop through the array of numbers starting at 0
     for (let i=0; i<arr.length-1;i++) {
        //if first is bigger than second: then add to currentStreak
            if (arr[i]>arr[i+1]) {
            // add to current streak
                currentStreak ++
            } else if (arr[i]<=arr[i+1]) {
            // end streak
                currentStreak = 1
            }

            // update highest streak if current is higher
            if (currentStreak > highestStreak) {
                highestStreak = currentStreak
            }
        // console.log(arr[i],arr[i+1],currentStreak,highestStreak);
     }

return highestStreak

}
