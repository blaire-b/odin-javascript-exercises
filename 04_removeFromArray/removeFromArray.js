const removeFromArray = function(arr, ...value) {
    value.forEach((val) => {
    let index = arr.indexOf(val);
 
    if (index > -1) 
    arr.splice(index, 1);
    })
return arr;    

};

//console.log(removeFromArray([2, 4, 5, 6, 8, 10], 5, 10));

// Do not edit below this line
module.exports = removeFromArray;
