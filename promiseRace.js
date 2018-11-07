// The Promise.race() method can be used to choose the quickest source
// when there are two similar sources of the same data.

var promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("finished in two seconds");
    },2000) //returns a resolved promise after 2 seconds
});

var promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("finished in five seconds");
    },5000) //returns a resolved promise after 5 seconds
});

Promise.race([promise1,promise2]).then(function(result) { 
    console.log(result) // logs "finished in two seconds"
});

// It also can be used to limit the amount of time promises have to resolve 
// by including a promise that is forced to reject after a given amount of time

var promiseResolveTenSeconds = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("finished in ten seconds");
    },10000)
});

var promiseRejectFiveSeconds = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("error: promise took longer than 5 seconds to resolve");
    },5000)
});

Promise.race([promiseResolveTenSeconds,promiseRejectFiveSeconds]).then(function(result) { 
    console.log(result) // never occurs
}).catch(function(error){
    console.log(error) // logs "error: promise took longer than 5 seconds to resolve"
});
