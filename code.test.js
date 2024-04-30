// import js verify
const fs = require('fs');
const jsc = require('jsverify');
// read the file to load the function.
eval(fs.readFileSync('code.js')+'');

// the test itself does not need to be asynchrounous. At least that's my understanding based on the assignment
const test =
    jsc.forall("array nat", "nat", function(array, key) {
        let result;
        // call the countMatches function
        // pass the random array and random key to the function
        // pass the result to the next iteration of async.reduce
        countMatches(array, key, (err, res) => {
            result = res;
        });

        // the result is validated using array.filter which apparently is a method that counts the number of times the key appears in the array
        const expected = array.filter(x => x === key).length;
        // if the result is equal to the expected value, return true which is a pass for jsverify
        return result === expected;
    });
// actually run the test
jsc.assert(test, { tests: 1000 });
