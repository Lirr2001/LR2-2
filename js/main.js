const buttonR = document.querySelector('.registration');
let win = document.querySelector('.Entrance');
let zatemnenie = document.querySelector('.zatemnenie');
let cross = document.querySelector('.cross');
let msg = '';
let winIn = document.querySelector('.entryWindow');
buttonR.addEventListener('click', function () {
  console.log('click');
  win.style.display = '';
  zatemnenie.style.display = '';
  document.querySelector('body').classList.add('hidden-class');
});

cross.addEventListener('click', function () {
  console.log('click');
  win.style.display = 'none';
  zatemnenie.style.display = 'none';
  document.querySelector('body').classList.remove('hidden-class');

});

let new_name = document.querySelector('.new_name');
let new_email = document.querySelector('.new_email');
let new_phone = document.querySelector('.new_phone');
let new_password = document.querySelector('.new_password');
let new_password_again = document.querySelector('.new_password_again');
let check_box = document.querySelector('.check_box');
let value_chek_box = check_box.checked;

const button_Register = document.querySelector('#Register');

function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = new_email.value;
    var valid = re.test(myMail);
    if (valid){}
    else msg = 'Адрес электронной почты введен неправильно!';
}

function ValidPhone() {
    var re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    var myPhone = new_phone.value;
    var valid = re.test(myPhone);
    if (valid)
        output = true;
    else
        msg = 'Некорректный номер телефона';
}

function CheckName(){
    if(new_name.value.length < 2)
        msg = 'Не заполнено поле Имя';
}
function CheckPassword(){
    if(new_password.value.length < 2)
        msg = 'Не заполнено поле Пароль';
    if(new_password.value != new_password_again.value)
        msg = 'Неправильно повторили пароль';
}
button_Register.setAttribute('disabled', true);

check_box.oninput = function(){
  if (!check_box.checked){
    button_Register.setAttribute('disabled', true);
  }else{
    button_Register.removeAttribute('disabled');
  }
}

button_Register.addEventListener('click', function () {
    CheckName();
    ValidMail();
    ValidPhone();
    CheckPassword();
    if(msg.length != 0){
        alert(msg);
    }
    else{
        console.log(new_name.value);
        console.log(new_email.value);
        console.log(new_phone.value);
        console.log(new_password.value);
        console.log(new_password_again.value);
        console.log(check_box.checked);
        win.style.display = 'none';
        zatemnenie.style.display = 'none';
        document.querySelector('body').classList.remove('hidden-class');
        alert('Вы зарегистрировались!');
    }
    msg = '';
});
let en = document.querySelector('.EntranceI');
let entryWindow = document.querySelector('.entryWindow');
en.addEventListener('click', function () {
  console.log('click');
  entryWindow.style.display = '';
  zatemnenie.style.display = '';
  win.style.display = 'none';
  document.querySelector('body').classList.add('hidden-class');
});
let cross2 = document.querySelector('.cross2');
cross2.addEventListener('click', function () {
  console.log('click');
  entryWindow.style.display = 'none';
  zatemnenie.style.display = 'none';
  document.querySelector('body').classList.remove('hidden-class');

});

let e2 = document.querySelector('.E2');
e2.addEventListener('click', function () {
  console.log('click');
  entryWindow.style.display = 'none';
  win.style.display = '';
  document.querySelector('body').classList.remove('hidden-class');

});

let msg2 = '';
let new_name2 = document.querySelector('.new_name2');
let new_password2 = document.querySelector('.new_password2');
function CheckName2(){
    if(new_name2.value.length < 2)
        msg2 = 'Не заполнено поле Имя';
}

const button_Register2 = document.querySelector('#Register2');
button_Register2.addEventListener('click', function () {
    CheckName2();
    if(msg2.length != 0){
        alert(msg2);
    }
    else{
        console.log(new_name2.value);
        console.log(new_password2.value);
        win.style.display = 'none';
        zatemnenie.style.display = 'none';
        document.querySelector('body').classList.remove('hidden-class');
        alert('Вы зарегистрировались!');
    }
    msg2 = '';
});
