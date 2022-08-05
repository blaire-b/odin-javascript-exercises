const repeatString = function(string, num) {

let repeated = '';
for(let i = 0; i < num; i++) {
    repeated += string
};
if(num < 0) {
    repeated = 'ERROR';
}
return repeated;
}
//console.log(repeatString('word', 4));


// Do not edit below this line
module.exports = repeatString;
