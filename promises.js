

let a=20;
function exemplu(status){


    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            a=a+5;
             if(status==true){
                 resolve("ce mai faci?")
             }else{
                reject(new Error("eroareeeeeeeee"));
             }
         },1000);
    });
}



exemplu(true)
.then((data)=>{
    console.log(a);
})
.catch((e)=>{
    console.log(e);
})

