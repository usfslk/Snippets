var count = 0;

var interval = setInterval(function(){
    count++;
    if(count >= 3){
        clearInterval(interval); /
    }
},10);
