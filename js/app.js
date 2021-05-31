'use strict';

let hourArr=['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

let seattle={
min:23,
max:65,
avg:6.3,
costumerArray:[],
cookiesArray:[],


getcustomer:function(){
    for(let i=0;i<hourArr.length;i++){
       
       this.costumerArray.push(randomhour(this.min,this.max));
    } console.log(this.costumerArray);
},
getcookies:function(){
    for(let i=0;i<hourArr.length;i++){
      this.cookiesArray.push(Math.floor( this.costumerArray[i]*this.avg));

    } console.log(this.cookiesArray);

}
}

seattle.getcustomer();
seattle.getcookies();

function randomhour(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let parent= document.getElementById('parent');
let ulElement=document.createElement('ul');

// append
parent.appendChild(ulElement);


for (let i = 0; i < frankie.likes.length; i++) {
    // console.log(frankie.likes[i]);

    // create li 
    let liElement=document.createElement('li');

    // append
    ulElement.appendChild(liElement);

    // text content
    liElement.textContent=frankie.likes[i];

}

