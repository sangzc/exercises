// add whatever parameters you deem necessary
function constructNote (msg, ltrs) {
    if (ltrs.length < msg.length) {
        return false
    }

    let msgFreqCount = frequencyCounter(msg);
    let ltrsFreqCount = frequencyCounter(ltrs);

    for (let key in msgFreqCount) {
        if (ltrsFreqCount[key] < msgFreqCount[key] || ltrsFreqCount[key] === undefined) {
            return false
        }
    }

    return true
}

function frequencyCounter (str) {
    frequencies = {}
    for (let letter of str) {
        let letterCount = frequencies[letter] || 0;
        frequencies[letter] = letterCount + 1
    }
    return frequencies
}