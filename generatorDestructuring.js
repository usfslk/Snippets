function* genFunc(){
    yield 'a';
    yield;  
    yield* [1,2,3];
    yield 123;

    return "finished";

}

var [a,b,c,d,e,f,g] = genFunc();
