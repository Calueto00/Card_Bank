const user = document.querySelector('#textUser');
const cardName = document.querySelector('.userName');
const cardNumber = document.querySelector('.cardNumber');
let textNumber = document.querySelector('#textnumber');
const cv = document.querySelector('.Cv');
let textcv = document.querySelector('#textCv');
const year = document.querySelector('.year');
let textyear = document.querySelector('#textyear');
const month = document.querySelector('.month');
let textMonth = document.querySelector('#textMonth');

function monthValid(){
    textMonth.addEventListener('input',()=>{
        month.textContent = textMonth.value;
    });
}

function yearValid(){
    textyear.addEventListener('input',()=>{
        year.textContent = textyear.value;
    });
}

function NameCard(){
    user.addEventListener('input',()=>{
        cardName.textContent = user.value;
    });
}
   
function formValidation(){
    if(user.value == "") {
       const errorName = document.querySelector('#errorName').innerHTML = 'Field can´t be null!';
       return false;
    }else{
        console.log('everything allright!');
    }
}

function Cvalidation(){
    textcv.addEventListener('input',()=>{
        cv.textContent = textcv.value;
    });
}

function NumberCard(){
    textNumber.addEventListener('input',()=>{
       cardNumber.textContent = textNumber.value;  
       })
}

