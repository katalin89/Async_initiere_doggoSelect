
function func3(){//sa preusupunem ca functia asta ruleaza 5 minute 
    console.log('Students!');

}

function func2(){
    console.log('Threehouse');
}


function func1(){
    console.log('Hi');
    setTimeout(func2,1000)//asinc
    func3();
    
}

setTimeout(()=>{
    alert("ceva")
},1000);
//cand apare treehpuse  pe ecran sa afisam ficat

//spune ca in cate 500 de sec sa execute ceva
// let ct=0;
// setInterval(()=>{
//     console.log(ct);
//     ct++;
// },500);