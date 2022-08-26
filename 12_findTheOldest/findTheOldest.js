const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        const lastGuy = age(oldest.yearOfBirth, oldest.yearOfDeath);
        const nextGuy = age(current.yearOfBirth, current.yearOfDeath);
        return lastGuy < nextGuy ? current : oldest;
    })
};
const age = function(b, d) {
    if (!d) {
        d = new Date().getFullYear();
    }
    return d - b;
};    


// Do not edit below this line
module.exports = findTheOldest;
