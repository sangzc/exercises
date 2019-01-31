// add whatever parameters you deem necessary
/* create an object with an array of keys and an array of values; returns an object */
function twoArrayObject(keys, values) {
    // initialize an object
    let obj = {};

    // loop throug keys and assign values
    for (let i=0; i<keys.length; i++){
        // if no value, assign null
        if(values[i] === undefined){
            obj[keys[i]] = null;
        }else {
            obj[keys[i]] = values[i];
        }  
    }
    
    return obj
}
