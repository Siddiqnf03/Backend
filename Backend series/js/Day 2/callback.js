// callback

function Sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sum){ // HERE Sum argument is a Callaback
    sum(a,b);
}

calculator(2,2, Sum); // called sumcallback

// another method to call is inside the arrow function

calculator(3,5,(a,b) =>{
    console.log(a+b);
})