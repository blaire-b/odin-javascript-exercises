const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    if (number === 0) return 0;

let n=0;
let n1=1;
for (let i=1; i<number; i++) {
    const next = n1;
    n1 = n + n1;
    n = next; 
}
return n1;
};

// Do not edit below this line
module.exports = fibonacci;
