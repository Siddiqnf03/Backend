// sycnchronous  and Asynchronus

// sycnchronous  : it is sequential in execution

console.log ("hii");
console.log("hello");
console.log("how are you");


// asynchronous : it is not a sequential it pauses the execution for a while

console.log("hii");
console.log("hello");
function hello(){
    console.log("how are You");
}

setTimeout(hello, 2000); // it set time to execute the program
console.log("I am fine");
console.log("ok thankyou");



// it is another type of settimeout
setTimeout(()=>{
    console.log("good morning:");
},2000);