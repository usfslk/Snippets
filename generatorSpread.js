function* genFunc(){
    yield 'a';
    yield;  
    yield* [1,2,3];
    yield 123;

    return "finished";

}
var arr = [...genFunc()]; 
// arr = ['a',undefined,1,2,3,123]
