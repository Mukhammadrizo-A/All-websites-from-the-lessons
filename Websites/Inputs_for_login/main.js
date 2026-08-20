function func1(){
    address = document.f1.address;
    number = document.f1.number;

    if (address.value == 'Andijon' && number.value == 777){
        document.body.style.backgroundColor = 'blue'
    }
    else{
        document.body.style.backgroundColor = 'orange'
    }

    event.preventDefault();
}

function func2(){
    nick = document.f2.nick;
    password = document.f2.password;

    if (nick.value == password.value && password != ''){
        document.body.style.backgroundColor = 'lime';
    }
    else{
        document.body.style.backgroundColor = 'red';
    }

    event.preventDefault(); 
}

function func3(){
    nick_name = document.f3.nick2;
    password2 = document.f3.password2;

    if (nick_name.value == 'admin' && password2.value == 123){
        document.f3.nick2.style.border = '3px solid green'
        document.f3.password2.style.border = '3px solid green'
    }
    else{
        document.f3.nick2.style.border = '3px solid red'
        document.f3.password2.style.border = '3px solid red'
    }

    event.preventDefault();
}