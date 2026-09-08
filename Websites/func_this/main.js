function text1(clicked_1){
    clicked_1.style.backgroundColor = 'red';
}

function text2(clicked_2){
    let text_2 = document.querySelectorAll('p');

    clicked_2.style.display = 'none';      
}

function text3(clicked_3){
    let text_3 = document.getElementsByClassName('text3');

    for (let i = 0; i < text_3.length; i++){
        text_3[i].style.display = 'block';
    }

    clicked_3.style.display = 'none';
}

function restart1(){
    let texts = document.querySelectorAll('p');

    for (let t = 0; t < texts.length; t++){
        texts[t].style = '';
    }
}

function img1(clicked_4){
    let img_1 = document.getElementsByClassName('img1');

    for (let q = 0; q < img_1.length; q++){
        img_1[q].style.borderRadius = '20px';
    }

    clicked_4.style.borderRadius = '50%';
}

function img2(clicked_5){
    let img_2 = document.getElementsByClassName('img2');

    for (let w = 0; w < img_2.length; w++){
        img_2[w].style.display = 'block';
    }

    clicked_5.style.display = 'none';
}

function img3(clicked_6){
    let img_3 = document.getElementsByClassName('img3');

    for (let e = 0; e < img_3.length; e++){
        img_3[e].style.display = 'none';
    }
    
    clicked_6.style.display = 'block';
}

function btn1(clicked_7){
    let buttons = document.getElementsByClassName('btn1');

    for (let r = 0; r < buttons.length; r++){
        buttons[r].style.backgroundColor = 'white';
        buttons[r].style.color = 'black';
    }
    
    clicked_7.style.backgroundColor = 'red';
    clicked_7.style.color = 'white';
}

function restart2(){
    let img = document.querySelectorAll('img');
    let button = document.querySelectorAll('button');

    for (let y = 0; y < img.length; y++){
        img[y].style = '';
    }
    for (let u = 0; u < button.length; u++){
        button[u].style = '';
    }
}