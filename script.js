let cardName = document.querySelector('.userName');
let month = document.querySelector('.month');
let textMonth = document.querySelector('#textMonth');

let userName = document.querySelector('#textUser');

    userName.addEventListener('input',()=>{
        cardName.textContent = userName.value;
    });

    textMonth.addEventListener('input',()=>{
        month.textContent = textMonth.value;
    });