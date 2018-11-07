fetch("https://jsonplaceholder.typicode.com/bad_url/1")
.then(function(result){
    if(result.ok){ // returns true if the Response status is within 200-299
        return result.text(); 
    }
    else{ 
        console.log(result.status) //logs 404
        return Promise.reject(result.status); //returns a rejected promise if the fetch request had problems
    }
})
.then(function(result){
    console.log(result); //doesn't occur 
})
.catch(function(err){
    console.log("Error: " +  err); //logs "Error: 404"
})
