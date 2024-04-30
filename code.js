//import async library and assign the name aSH to it for shorterhand
const aSH = require('async');
// quick ref: https://caolan.github.io/async/v3/

function countMatches(array, key, finalCallback){
    // for the sake of clarity I just used Pythonic indentation
    // because I primarily use Python for work and this is easier 
    // for me to read at a glance when debugging

    //
    aSH.reduce(
        array,
        0,
        (accumulator, item, cb) => {
            // does current index value equal key? if so, increment accumulator by 1
            const increment = item === key ? 1 : 0;
            // pass the incremented value to the next iteration as stored in the accumulator
            cb(null, accumulator + increment); // Asynch pass the =+1 value to the next iteration, stored in the accumulator
    },
    finalCallback); // final callback to grab the result
}
// again explicit export because jsverify won't pick up the function without it.
module.exports={countMatches};

