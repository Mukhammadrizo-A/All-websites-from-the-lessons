function b1(){
    let name = prompt('Enter your name')
    alert(name)
}

function b2() {
  let input = prompt('Enter 3 numbers (For example: 2, 4, 5)').split(', ');
  
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let num3 = Number(input[2]);
  
  alert(num1 * num2 * num3);
}

function b3(){
    let login_nick = prompt('Enter your Nick')
    let login_password = prompt('Enter password')

    if(login_nick == 'admin' && login_password == 12345){
        alert('Accepted')
    }
    
    else if(login_nick == 'admin12' && login_password == 'admin12345'){
        alert('Logged in')
    }

    else{
        alert('Error')
    }
}

function b4(){
    let name1 = prompt('Enter your Nick').split(' ')
    let age = prompt('How old are you?')
    let addres = prompt('Enter your address')
    
    let num4 = String(name1[0]);
    let num5 = String(name1[1]);

    if(age >= 18 && age <= 20){
        alert(num4)
    }

    else if(age >= 21 && age <= 25){
        alert(num5)
    }

    else{
        alert('Hello World')
    }
}

function b5(){
    let password = Number(prompt('Enter password (Number)'))
    
    if(password >= 1000){
        alert('Hello')
    }

    else if(password >= 500 && password <= 800){
        alert('Great')
    }

    else{
        alert('no asnwer')
    }
}

function b6(){
    let colour = prompt("Enter only one colour (red, green, blue, aqua or brown)")

    switch (colour) {
        case 'red':
            alert('Red')
            break;

        case 'green':
            alert('Green')
            break;

        case "blue":
            alert('Blue')
            break;

        case 'aqua':
            alert('Aqua')
            break

        case 'brown':
            alert('brown')
        default:
            break;
    }
}

function b7(){
    let weeks = Number(prompt('If you enter number, you will get name of day (1-7)'))

    switch (weeks) {
        case 1:
            alert('Monday')
            break;

        case 2:
            alert('Tuesday')
            break;

        case 3:
            alert('Wednesday')
            break;

        case 4:
            alert('Thursday')
            break;

        case 5:
            alert('Friday')
            break;

        case 6:
            alert('Saturday')
            break;
        case 7:
            alert('Sunday')
            break;

        default:
            alert("Error")
            break;
    }
}