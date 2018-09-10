const myButton = function (button) { 
var button = document.getElementById('button');

var username = document.getElementById('name');

var email = document.getElementById('email');


let landPage = document.getElementById('main-div')

let quotePage = document.getElementById('quote-div')

button.addEventListener('click', function(myButton){
    let regName = /[a-z]/g;
    let mail = /[.]/g;

    if(username.value === '') {
        alert('Name cannot be empty');
    }else if (email.value === '') {
        alert('e-mail cannot  be empty');
    }else if(email.value.match(mail)) {
        alert(`${username.value} WELCOME TO RANDOM QUOTE GENERATOR`);
    
    }else if(email.value !== mail) {
        alert('invalid e-mail,please try again')

    }else{
        alert('not a user')
    }
    
    landPage.display.style = 'none';

    quotePage.display.style = 'block';


})

    

document.querySelector('#form1').addEventListener('submit',function(e){
    e.preventDefault()
   e.target.elements.username.value = ''
    e.target.elements.Email.value = ''
})
}
myButton(button)




