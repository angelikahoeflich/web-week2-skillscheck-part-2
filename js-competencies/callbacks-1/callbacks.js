//////////////////PROBLEM 1////////////////////

// Write a function called stringItOut that takes in an array. Determine if it is an array of numbers or strings and sort it greatest to least accordingly (sort strings alphabetically). Return the array converted into a string using the toString method.

function stringItOut(arr){
    if (typeof(arr[0])==='number') {
      return arr.sort( (a,b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        if (a === b) return 0;
      }).toString()
    } else {
      return arr.sort().reverse().toString();
    }
}


//////////////////PROBLEM 2////////////////////

// Given the functions below: invoke the function math passing in complex, 2, and 3 as parameters. Save the result to a variable called mathResult.

function math(cb, num1, num2) {
  return cb(num1, num2)
}

function complex(num1, num2) {
  return Math.sin((Math.log(num1) + Math.tan(num2) * 100))
}

var mathResult = math(complex, 2, 3)
