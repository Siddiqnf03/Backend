// callbackhell

//database:
// function getData(dataid){
//     console.log("Data",dataid);
// }

//geting data one after another

function getData(DataId,getNextData){
    setTimeout(() =>{
        console.log("data",DataId);
        if(getNextData){
            getNextData();
        }
    },2000)
}

getData(1,() =>{
    getData(2);
})