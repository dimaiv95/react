function myReduceRight(arr, callback, firstValue){

    let result,
        trueValue = firstValue !== undefined,
        length = trueValue ? arr.length : arr.length - 1; 

    for(let i = length; i >= 0; i--){

        let value = trueValue ? arr[i] : arr[i];
         let array = arr;
         let index = i;

         result = (i === length ? (trueValue) ? firstValue : arr[i] : callback(result, value, array, index));
         
    }

    return result;

}

const compose = (...func) => (component) => {
    return myReduceRight(func, function(prevResult, fn){
        return fn(prevResult);
    }, component);
};


// const compose = (...func) => (component) => {
//     return func.reduceRight((prevResult, fn) => {
//         return fn(prevResult);
//     }, component);
// };

export default compose;
