let size = 32;

window.addEventListener("keydown", (e)=>{
    let div = document.getElementById('box');
    let text_1 = document.getElementById('text1');
    let text_2 = document.getElementById('text2');

    let box_1 = document.getElementById('box1');
    let box_2 = document.getElementById('box2');
    let box_3 = document.getElementById('box3');
    let box_4 = document.getElementById('box4');

    let info_1 = document.getElementById('txt1');
    let info_2 = document.getElementById('txt2');

    if (e.code == "KeyR"){
        div.style.backgroundColor = "red";
    }
    else if (e.code == "KeyG"){
        div.style.backgroundColor = "green";
    }
    else if (e.code == "KeyQ" && e.ctrlKey == true){
        e.preventDefault();
        div.style.opacity = "0";
    }
    else if (e.code == "KeyX" && e.altKey == true){
        e.preventDefault();
        div.style.opacity = "1";
    }

    else if (e.code == "KeyA" && e.altKey == true){
        e.preventDefault();
        text_1.classList.add('active');
    }
    else if (e.code == "KeyY" && e.ctrlKey == true){
        e.preventDefault();
        text_1.classList.remove('active');
    }

    else if (e.code == "Equal"){
        if (size <= 97){
            size += 5
            text_2.style.fontSize = size+'px';

            if (size == 32){
                text_2.style.color = 'dimgrey';
            }
            else{
                text_2.style.color = 'yellow';
            }
        }
    }
    else if (e.code == "Minus"){
        if (size >= 17){
            size -= 5
            text_2.style.fontSize = size+'px';
            
            if (size == 32){
                text_2.style.color = 'dimgrey';
            }
            else{
                text_2.style.color = 'red';
            }
        }
    }

    if (e.code == e.code){
        box_1.style.backgroundColor = 'green';
        info_1.innerHTML = e.code;

        box_2.style.backgroundColor = 'red';
        box_3.style.backgroundColor = 'red';
        box_4.style.backgroundColor = 'red';
        info_2.innerHTML = "Key";
    }
    if (e.altKey == true){
        e.preventDefault();
        box_2.style.backgroundColor = 'green';

        
        box_1.style.backgroundColor = 'red';
        info_1.innerHTML = "Code";
        box_3.style.backgroundColor = 'red';
        box_4.style.backgroundColor = 'red';
        info_2.innerHTML = "Key";
    }
    if (e.ctrlKey == true){
        box_3.style.backgroundColor = 'green';

        box_2.style.backgroundColor = 'red';
        box_4.style.backgroundColor = 'red';
        info_2.innerHTML = "Key";
        box_1.style.backgroundColor = 'red';
        info_1.innerHTML = "Code";
    }
    if (e.key == e.key){
        box_4.style.backgroundColor = 'green';
        info_2.innerHTML = e.key;
    }
})