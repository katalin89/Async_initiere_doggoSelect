fetch("https://dog.ceo/api/breeds/list/all")//endpoint
.then(data=>{
    return data.json();//transforma din json in js
   

}).then(data=>{

    console.log(data);
   createOptions(data.message);
})


//funcie ce primeste un obiect  in care cheile sunt rasele si cream optiunile

//create"card"->un breeds
function  createOptions(rase){
    let breeds=document.querySelector(".breeds");
    for(let obj in rase ){

        let option=document.createElement('option')
      
        option.value=obj;
        option.textContent=obj;

        breeds.appendChild(option);
    }

}

//cand apasam pe akita sa apara poza cainelui akita

let rasa=document.querySelector(".breeds")

rasa.addEventListener("change",(e)=>{
 
   console.log(rasa.value);


   fetch(`https://dog.ceo/api/breed/${rasa.value}/images/random`)
   .then(data=>{
        return data.json();
   })
   .then(data=>{
    let image =document.querySelector(".dog");
    image.src=data.message;
   })
   



})

//cleck see more  si sa apara o alta caine de aceesai rasa
let btnMore=document.querySelector('.more');

btnMore.addEventListener("click",()=>{
    fetch(`https://dog.ceo/api/breed/${rasa.value}/images/random`)
    .then(data=>{
         return data.json();
    })
    .then(data=>{
     let image =document.querySelector(".dog");
     image.src=data.message;
    })

 
});