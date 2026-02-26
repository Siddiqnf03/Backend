// fundamentals of js
// array(forEach,map,find,filter,indexof) and objects
// function return

// forEach
var arr = [1,2,3,4,5];
arr.forEach(function(val){
    console.log(val+10);
})

// map
var num = [1,2,3,4,5];
 var ans = num.map(function(val)
{
    return 13;
})
console.log(ans);

// filter
var a = [1,2,3,4,5];
 var res = a.filter(function(val){
    if(val>=2)
    {
        return true;
    }
})
 console.log(res);

//find and indexof
var b = [4,6,3,8,12];
var c = b.find(function(val){
    if(val === 4)
    {
        return(val);
    }
})
console.log(c);


// craeting an object
var obj={
    name :"mamu",
    age : 12
}

//function return
 function hello(){
    return 20;
 }
var ans = hello();
