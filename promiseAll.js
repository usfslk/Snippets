Promise.all([promise1,promise2,promise3]).then(function(result) { 
    console.log(result)
}).catch(function(error){
    console.log(error) 
});

// Promise.all() method call rejects when one of the Promises that it is processing rejects
