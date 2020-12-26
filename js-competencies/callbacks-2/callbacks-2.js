//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Create a function called invokesCallbacks that takes
//three parameters: a number, a callback, and another callback.
//If the number is greater than 10, invokesCallbacks should
//return the FIRST callback param invoked. Else, invokesCallbacks 
//should return the SECOND callback param invoked.

function invokesCallbacks(num, cb1, cb2){
  if (num > 10){
    console.log("cb1():", cb1());
    return cb1()
  } else {
    console.log("cb2():", cb2());
    return cb2()
  }
}



//////////////////PROBLEM 2////////////////////

//Within the function timedGreeting below, create a
//setTimeout (a native javascript method) 
//that assigns the result 
//of invoking the callback parameter 
//to the variable greeting, after 1 second.

  let greeting;

  function timedGreeting(callback){
    window.setTimeout(()=>{
      greeting = callback();
    }, 1000)
  }

