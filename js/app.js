'use strict';

let hourArr=['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

// seattle......
let seattle={ 
name:'Seattle',
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
// create h2 element
let h2Element= document.createElement('h2');

// append
parent.appendChild(h2Element);

// text content
h2Element.textContent= seattle.name;


let ulElement=document.createElement('ul');

// append
h2Element.appendChild(ulElement);

let cookieSum=0;
for (let i = 0; i < hourArr.length; i++) {

    // create li 
    let liElement=document.createElement('li');

    // append
    ulElement.appendChild(liElement);

    // text content
    liElement.textContent= `${hourArr[i]}: ${seattle.cookiesArray[i]}`;
    cookieSum =cookieSum+seattle.cookiesArray[i];
}
let liElement=document.createElement('li');

    // append
    ulElement.appendChild(liElement);

    // text content
    liElement.textContent=`Total: ${cookieSum}`;



    
// Tokyo......
let tokyo={ 
    name:'Tokyo',
    min:3,
    max:24,
    avg:1.2,
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
    
    
    tokyo.getcustomer();
    tokyo.getcookies();
    
    function randomhour(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    
    let parent1= document.getElementById('parent1');
    // create h2 element
    let h2Element1= document.createElement('h2');
    
    // append
    parent1.appendChild(h2Element1);
    
    // text content
    h2Element1.textContent= tokyo.name;
    
    
    let ulElement1=document.createElement('ul');
    
    // append
    h2Element1.appendChild(ulElement1);
    
    let cookieSum1=0;
    for (let i = 0; i < hourArr.length; i++) {
    
        // create li 
        let liElement1=document.createElement('li');
    
        // append
        ulElement1.appendChild(liElement1);
    
        // text content
        liElement1.textContent= `${hourArr[i]}: ${tokyo.cookiesArray[i]}`;
        cookieSum1 =cookieSum1+tokyo.cookiesArray[i];
    }
    let liElement1=document.createElement('li');
    
        // append
        ulElement1.appendChild(liElement1);
    
        // text content
        liElement1.textContent=`Total: ${cookieSum1}`;


           
// dubai......
let dubai={ 
    name:'Dubai',
    min:11,
    max:38,
    avg:3.7,
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
    
    
    dubai.getcustomer();
    dubai.getcookies();
    
    function randomhour(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    
    let parent2= document.getElementById('parent2');
    // create h2 element
    let h2Element2= document.createElement('h2');
    
    // append
    parent2.appendChild(h2Element2);
    
    // text content
    h2Element2.textContent= dubai.name;
    
    
    let ulElement2=document.createElement('ul');
    
    // append
    h2Element2.appendChild(ulElement2);
    
    let cookieSum2=0;
    for (let i = 0; i < hourArr.length; i++) {
    
        // create li 
        let liElement2=document.createElement('li');
    
        // append
        ulElement2.appendChild(liElement2);
    
        // text content
        liElement2.textContent= `${hourArr[i]}: ${dubai.cookiesArray[i]}`;
        cookieSum2 =cookieSum2+dubai.cookiesArray[i];
    }
    let liElement2=document.createElement('li');
    
        // append
        ulElement2.appendChild(liElement2);
    
        // text content
        liElement2.textContent=`Total: ${cookieSum2}`;


                
// paris......
let paris={ 
    name:'Paris',
    min:20,
    max:38,
    avg:2.3,
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
    
    
    paris.getcustomer();
    paris.getcookies();
    
    function randomhour(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    
    let parent3= document.getElementById('parent3');
    // create h2 element
    let h2Element3= document.createElement('h2');
    
    // append
    parent3.appendChild(h2Element3);
    
    // text content
    h2Element3.textContent= paris.name;
    
    
    let ulElement3=document.createElement('ul');
    
    // append
    h2Element3.appendChild(ulElement3);
    
    let cookieSum3=0;
    for (let i = 0; i < hourArr.length; i++) {
    
        // create li 
        let liElement3=document.createElement('li');
    
        // append
        ulElement3.appendChild(liElement3);
    
        // text content
        liElement3.textContent= `${hourArr[i]}: ${paris.cookiesArray[i]}`;
        cookieSum3 =cookieSum3+paris.cookiesArray[i];
    }
    let liElement3=document.createElement('li');
    
        // append
        ulElement3.appendChild(liElement3);
    
        // text content
        liElement3.textContent=`Total: ${cookieSum3}`;



                      
// lima......
let lima={ 
    name:'Lima',
    min:2,
    max:16,
    avg:4.6,
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
    
    
    lima.getcustomer();
    lima.getcookies();
    
    function randomhour(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    
    let parent4= document.getElementById('parent4');
    // create h2 element
    let h2Element4= document.createElement('h2');
    
    // append
    parent4.appendChild(h2Element4);
    
    // text content
    h2Element4.textContent= lima.name;
    
    
    let ulElement4=document.createElement('ul');
    
    // append
    h2Element4.appendChild(ulElement4);
    
    let cookieSum4=0;
    for (let i = 0; i < hourArr.length; i++) {
    
        // create li 
        let liElement4=document.createElement('li');
    
        // append
        ulElement4.appendChild(liElement4);
    
        // text content
        liElement4.textContent= `${hourArr[i]}: ${paris.cookiesArray[i]}`;
        cookieSum4 =cookieSum4+lima.cookiesArray[i];
    }
    let liElement4=document.createElement('li');
    
        // append
        ulElement4.appendChild(liElement4);
    
        // text content
        liElement4.textContent=`Total: ${cookieSum4}`;

