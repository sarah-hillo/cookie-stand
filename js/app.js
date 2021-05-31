 'use strict';

// let hourArr=['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

// // seattle......
// let seattle={ 
// name:'Seattle',
// min:23,
// max:65,
// avg:6.3,
// costumerArray:[],
// cookiesArray:[],

// getcustomer:function(){
//     for(let i=0;i<hourArr.length;i++){
       
//        this.costumerArray.push(randomhour(this.min,this.max));
//     } console.log(this.costumerArray);
// },
// getcookies:function(){
//     for(let i=0;i<hourArr.length;i++){
//       this.cookiesArray.push(Math.floor( this.costumerArray[i]*this.avg));

//     } console.log(this.cookiesArray);
// }
// }


// seattle.getcustomer();
// seattle.getcookies();

// function randomhour(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }


// let parent= document.getElementById('parent');
// // create h2 element
// let h2Element= document.createElement('h2');

// // append
// parent.appendChild(h2Element);

// // text content
// h2Element.textContent= seattle.name;


// let ulElement=document.createElement('ul');

// // append
// h2Element.appendChild(ulElement);

// let cookieSum=0;
// for (let i = 0; i < hourArr.length; i++) {

//     // create li 
//     let liElement=document.createElement('li');

//     // append
//     ulElement.appendChild(liElement);

//     // text content
//     liElement.textContent= `${hourArr[i]}: ${seattle.cookiesArray[i]}`;
//     cookieSum =cookieSum+seattle.cookiesArray[i];
// }
// let liElement=document.createElement('li');

//     // append
//     ulElement.appendChild(liElement);

//     // text content
//     liElement.textContent=`Total: ${cookieSum}`;



    
// // Tokyo......
// let tokyo={ 
//     name:'Tokyo',
//     min:3,
//     max:24,
//     avg:1.2,
//     costumerArray:[],
//     cookiesArray:[],
    
//     getcustomer:function(){
//         for(let i=0;i<hourArr.length;i++){
           
//            this.costumerArray.push(randomhour(this.min,this.max));
//         } console.log(this.costumerArray);
//     },
//     getcookies:function(){
//         for(let i=0;i<hourArr.length;i++){
//           this.cookiesArray.push(Math.floor( this.costumerArray[i]*this.avg));
    
//         } console.log(this.cookiesArray);
//     }
//     }
    
    
//     tokyo.getcustomer();
//     tokyo.getcookies();
    
//     function randomhour(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//     }
    
    
//     let parent1= document.getElementById('parent1');
//     // create h2 element
//     let h2Element1= document.createElement('h2');
    
//     // append
//     parent1.appendChild(h2Element1);
    
//     // text content
//     h2Element1.textContent= tokyo.name;
    
    
//     let ulElement1=document.createElement('ul');
    
//     // append
//     h2Element1.appendChild(ulElement1);
    
//     let cookieSum1=0;
//     for (let i = 0; i < hourArr.length; i++) {
    
//         // create li 
//         let liElement1=document.createElement('li');
    
//         // append
//         ulElement1.appendChild(liElement1);
    
//         // text content
//         liElement1.textContent= `${hourArr[i]}: ${tokyo.cookiesArray[i]}`;
//         cookieSum1 =cookieSum1+tokyo.cookiesArray[i];
//     }
//     let liElement1=document.createElement('li');
    
//         // append
//         ulElement1.appendChild(liElement1);
    
//         // text content
//         liElement1.textContent=`Total: ${cookieSum1}`;


           
// // dubai......
// let dubai={ 
//     name:'Dubai',
//     min:11,
//     max:38,
//     avg:3.7,
//     costumerArray:[],
//     cookiesArray:[],
    
//     getcustomer:function(){
//         for(let i=0;i<hourArr.length;i++){
           
//            this.costumerArray.push(randomhour(this.min,this.max));
//         } console.log(this.costumerArray);
//     },
//     getcookies:function(){
//         for(let i=0;i<hourArr.length;i++){
//           this.cookiesArray.push(Math.floor( this.costumerArray[i]*this.avg));
    
//         } console.log(this.cookiesArray);
//     }
//     }
    
    
//     dubai.getcustomer();
//     dubai.getcookies();
    
//     function randomhour(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//     }
    
    
//     let parent2= document.getElementById('parent2');
//     // create h2 element
//     let h2Element2= document.createElement('h2');
    
//     // append
//     parent2.appendChild(h2Element2);
    
//     // text content
//     h2Element2.textContent= dubai.name;
    
    
//     let ulElement2=document.createElement('ul');
    
//     // append
//     h2Element2.appendChild(ulElement2);
    
//     let cookieSum2=0;
//     for (let i = 0; i < hourArr.length; i++) {
    
//         // create li 
//         let liElement2=document.createElement('li');
    
//         // append
//         ulElement2.appendChild(liElement2);
    
//         // text content
//         liElement2.textContent= `${hourArr[i]}: ${dubai.cookiesArray[i]}`;
//         cookieSum2 =cookieSum2+dubai.cookiesArray[i];
//     }
//     let liElement2=document.createElement('li');
    
//         // append
//         ulElement2.appendChild(liElement2);
    
//         // text content
//         liElement2.textContent=`Total: ${cookieSum2}`;


                
// // paris......
// let paris={ 
//     name:'Paris',
//     min:20,
//     max:38,
//     avg:2.3,
//     costumerArray:[],
//     cookiesArray:[],
    
//     getcustomer:function(){
//         for(let i=0;i<hourArr.length;i++){
           
//            this.costumerArray.push(randomhour(this.min,this.max));
//         } console.log(this.costumerArray);
//     },
//     getcookies:function(){
//         for(let i=0;i<hourArr.length;i++){
//           this.cookiesArray.push(Math.floor( this.costumerArray[i]*this.avg));
    
//         } console.log(this.cookiesArray);
//     }
//     }
    
    
//     paris.getcustomer();
//     paris.getcookies();
    
//     function randomhour(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//     }
    
    
//     let parent3= document.getElementById('parent3');
//     // create h2 element
//     let h2Element3= document.createElement('h2');
    
//     // append
//     parent3.appendChild(h2Element3);
    
//     // text content
//     h2Element3.textContent= paris.name;
    
    
//     let ulElement3=document.createElement('ul');
    
//     // append
//     h2Element3.appendChild(ulElement3);
    
//     let cookieSum3=0;
//     for (let i = 0; i < hourArr.length; i++) {
    
//         // create li 
//         let liElement3=document.createElement('li');
    
//         // append
//         ulElement3.appendChild(liElement3);
    
//         // text content
//         liElement3.textContent= `${hourArr[i]}: ${paris.cookiesArray[i]}`;
//         cookieSum3 =cookieSum3+paris.cookiesArray[i];
//     }
//     let liElement3=document.createElement('li');
    
//         // append
//         ulElement3.appendChild(liElement3);
    
//         // text content
//         liElement3.textContent=`Total: ${cookieSum3}`;



                      
// // lima......
// let lima={ 
//     name:'Lima',
//     min:2,
//     max:16,
//     avg:4.6,
//     costumerArray:[],
//     cookiesArray:[],
    
//     getcustomer:function(){
//         for(let i=0;i<hourArr.length;i++){
           
//            this.costumerArray.push(randomhour(this.min,this.max));
//         } console.log(this.costumerArray);
//     },
//     getcookies:function(){
//         for(let i=0;i<hourArr.length;i++){
//           this.cookiesArray.push(Math.floor( this.costumerArray[i]*this.avg));
    
//         } console.log(this.cookiesArray);
//     }
//     }
    
    
//     lima.getcustomer();
//     lima.getcookies();
    
//     function randomhour(min, max) {
//         return Math.floor(Math.random() * (max - min + 1) ) + min;
//     }
    
    
//     let parent4= document.getElementById('parent4');
//     // create h2 element
//     let h2Element4= document.createElement('h2');
    
//     // append
//     parent4.appendChild(h2Element4);
    
//     // text content
//     h2Element4.textContent= lima.name;
    
    
//     let ulElement4=document.createElement('ul');
    
//     // append
//     h2Element4.appendChild(ulElement4);
    
//     let cookieSum4=0;
//     for (let i = 0; i < hourArr.length; i++) {
    
//         // create li 
//         let liElement4=document.createElement('li');
    
//         // append
//         ulElement4.appendChild(liElement4);
    
//         // text content
//         liElement4.textContent= `${hourArr[i]}: ${paris.cookiesArray[i]}`;
//         cookieSum4 =cookieSum4+lima.cookiesArray[i];
//     }
//     let liElement4=document.createElement('li');
    
//         // append
//         ulElement4.appendChild(liElement4);
    
//         // text content
//         liElement4.textContent=`Total: ${cookieSum4}`;

let hourArr=['6 am','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

let shops=[];

function randomhour(min, max) {
             return Math.floor(Math.random() * (max - min + 1) ) + min;
         }

function Shop(name,min,max,avg){
    this.name=name;
    this.min=min;
    this.max=max;
    this.avg=avg;
    this.sum=0;
    this.costumerArray=[];
    this.cookiesArray=[];
    shops.push(this);

}
Shop.prototype.getcustomer=function(){
            for(let i=0;i<hourArr.length;i++){
               
               this.costumerArray.push(randomhour(this.min,this.max));
            } console.log(this.costumerArray);
        }

      Shop.prototype.getcookies=function(){
                    for(let i=0;i<hourArr.length;i++){
                      this.cookiesArray.push(Math.floor( this.costumerArray[i]*this.avg));
                
                    } console.log(this.cookiesArray);
                }






let parent = document.getElementById('parent');
// get the parent:

console.log(parent);



let table = document.createElement('table');

parent.appendChild(table);


let Daily=0;

function makingHeader(){


  let headingRow=document.createElement('tr');

  table.appendChild(headingRow);
  let thElement1=document.createElement('th');
  headingRow.appendChild(thElement1);
  thElement1.textContent="";

  for (let i = 0; i < hourArr.length; i++) {
     let thElement=document.createElement('th');
     headingRow.appendChild(thElement);
     thElement.textContent=hourArr[i];
      
  }

  let thElement2=document.createElement('th');
  headingRow.appendChild(thElement2);
  thElement2.textContent="Daily Location Total";

}
makingHeader();


Shop.prototype.render = function () {

 
  let dataRow=document.createElement('tr');

  table.appendChild(dataRow);

  
  let td2 =document.createElement('td');

  dataRow.appendChild(td2);

  td2.textContent=this.name;

  for(let i=0;i<hourArr.length;i++){
    

  let td1 =document.createElement('td');

  dataRow.appendChild(td1);

  td1.textContent=this.cookiesArray[i];
} 

for(let i=0;i<hourArr.length;i++){
    this. sum+=this.cookiesArray[i];
  
  }
let td3 =document.createElement('td');

dataRow.appendChild(td3);

td3.textContent=this.sum;


}



let seattle=new Shop('Seattle',23,65,6.3);
let tokyo=new Shop('Tokyo',3,24,1.2);
let dubai=new Shop('Dubai',11,38,3.7);
let paris=new Shop('Paris',20,38,2.3);
let lima=new Shop('Lima',2,16,4.6);

//console.log(tokyo);
seattle.getcustomer();
dubai.getcustomer();
dubai.getcookies();
console.log(dubai.cookiesArray);


for (let i = 0; i<shops.length; i++) {
shops[i].getcustomer();
shops[i].getcookies();
shops[i].render();
}
//console.log(shops);

let sumCookies=0;
let result=0;
let total=0;
function makingFooter() {
  

  let footerRow=document.createElement('tr');

  table.appendChild(footerRow);
  let thElement2=document.createElement('th');
  footerRow.appendChild(thElement2);
  thElement2.textContent="Result";

  for (let i = 0; i < hourArr.length; i++) {
    sumCookies=0;
    for(let j=0;j<shops.length;j++){
      sumCookies += shops[j].cookiesArray[i];
      result += shops[j].cookiesArray[i];
    }
     let thElement=document.createElement('th');
     footerRow.appendChild(thElement);
     thElement.textContent=sumCookies;
}
for (let i = 0; i < shops.length; i++) {
   total+=shops[i].sum  ;}
let thElement1=document.createElement('th');
footerRow.appendChild(thElement1);
let Total=total+result;
thElement1.textContent=Total;

}
makingFooter();

