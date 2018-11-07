// Asynchronous code can be shown by using a setTimeout() method call with a timeout value of 0. 
// This will immediately put a task on the event queue.

function asyncLog(val){ //logs values asynchronously
    setTimeout(function(){  //setTimeout with a time of 0 will execute asynchronously
        console.log(val);      
    },0)
}

console.log("first");
asyncLog("second");
console.log("third");

/*  Console Output
    > first
    > third  
    > second 
*/
