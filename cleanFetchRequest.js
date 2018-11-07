var initObject = {
    method: 'POST',
    headers: new Headers(),
    mode: 'cors',
    body: "{}" 
}

var request = new Request("https://jsonplaceholder.typicode.com/posts",initObject)

//fetch() method used with a request
fetch(request).then(function(result){
    return result.json() 
}).then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err);
});
