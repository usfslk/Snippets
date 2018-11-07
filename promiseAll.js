Promise.all([promise1,promise2,promise3]).then(function(result) { 
    console.log(result)
}).catch(function(error){
    console.log(error) 
});
