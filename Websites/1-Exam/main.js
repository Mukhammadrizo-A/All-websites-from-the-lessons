let num1 = true
let num2 = true
let num3 = true
let num4 = true

let num8 = true
let num9 = true

function func1(){
    let button1 = document.getElementById('b1');

    if(num1 == true){
        button1.style.backgroundColor = 'red';
        button1.style.color = 'black';
        document.body.style.backgroundImage = 'url(none)';
        document.body.style.backgroundColor = 'green';

        num1 = false
    }
    else{
        button1.style.backgroundColor = 'green';
        button1.style.color = 'white';
        document.body.style.backgroundColor = 'none';
        document.body.style.backgroundImage = 'url(img.jpg)';

        num1 = true
    }
}

function func2(){
    let n_i = document.getElementById('not_invisible');
    let div = document.querySelectorAll('div');
    let button2 = document.getElementById('b2');

    if (num2 == true){
        button2.style.backgroundColor = 'red';
        button2.style.color = 'black';
        
        for (let i = 0; i < div.length; i++){
            div[i].style.opacity = '0';
            n_i.style.opacity = '100';
        }

        num2 = false
    }
    else{
        button2.style.backgroundColor = 'green';
        button2.style.color = 'white';
        
        for (q = 0; q < div.length; q++){
            div[q].style.opacity = '100';
        }

        num2 = true
    }
}

function func3(){
    let button3 = document.getElementById('b3');
    let images = document.getElementsByName('img1');

    if (num3 == true){
        button3.style.backgroundColor = 'red';
        button3.style.color = 'black';

        for(let w = 0; w < images.length; w++){
            images[w].style.borderRadius = '50%';
        }

        num3 = false
    }
    else{
        button3.style.backgroundColor = 'green';
        button3.style.color = 'white';

        for(let e = 0; e < images.length; e++){
            images[e].style.borderRadius = '0';
        }

        num3 = true
    }
}

function func4(){
    let button4 = document.getElementById('b4');
    let images2 = document.getElementsByName('img2');

    if (num4 == true){
        button4.style.backgroundColor = 'red';
        button4.style.color = 'black';

        for (let r = 0; r < images2.length; r++){
            images2[r].style.boxShadow = '0 0 40px gold';
        }
        
        num4 = false
    }
    else{
        button4.style.backgroundColor = 'green';
        button4.style.color = 'white';

        for (let t = 0; t < images2.length; t++){
            images2[t].style.boxShadow = 'none';
        }

        num4 = true
    }
}

function func5(){
    let question = prompt('Enter password');
    
    alert(question)
}

function func6(){
    let login = prompt('Enter login');
    let password = prompt('Enter password');

    if (login == 'admin' && password == 123){
        document.body.style.backgroundImage = 'url(none)';
        document.body.style.backgroundColor = 'green';
    }
    else{
        document.body.style.backgroundImage = 'url(none)';
        document.body.style.backgroundColor = 'red';
    }
}

function func7(){
    let colour = prompt('Enter colour (Red / Green / Black)');
    
    switch (colour) {
        case 'Red':
            document.body.style.backgroundImage = 'url(none)';
            document.body.style.backgroundColor = 'red';
            break;

        case 'Green':
            document.body.style.backgroundImage = 'url(none)';
            document.body.style.backgroundColor = 'green';
            break;

        case 'Black':
            document.body.style.backgroundImage = 'url(none)';
            document.body.style.backgroundColor = 'black';
    }
}

function func8(){
    let button8 = document.getElementById('b8');
    let image = document.getElementById('img3');

    if (num8 == true){
        button8.style.backgroundColor = 'red';
        button8.style.color = 'black';

        ielts = prompt('Enter your grade from IELTS');

        if (ielts < 7){
            image.style.opacity = '0%';
        }

        num8 = false
    }
    else{
        button8.style.backgroundColor = 'green';
        button8.style.color = 'white';
        image.style.opacity = '100%';

        num8 = true
    }
}

function func9(){
    let button9 = document.getElementById('b9');

    if (num9 == true){
        button9.style.backgroundColor = 'red';
        button9.style.color = 'black';
        document.body.style.backgroundImage = 'url(none)';
        document.body.style.backgroundColor = 'black';

        num9 = false
    }
    else{
        button9.style.backgroundColor = 'green';
        button9.style.color = 'white';
        document.body.style.backgroundColor = 'none';
        document.body.style.backgroundImage = 'url(img.jpg)';

        num9 = true
    }
}