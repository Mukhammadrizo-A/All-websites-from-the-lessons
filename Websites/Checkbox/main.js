function inp1(){
    let check_box = document.getElementById('input');
    let text = document.getElementById('txt');

    if (check_box.checked){
        text.style.color = 'limegreen';
    }
    else{
        text.style.color = 'white';
    }
}

function inp2(){
    let checker = document.getElementById('inputt');
    let music = document.querySelector('audio');

    if (checker.checked){
        music.play();
    }
    else{
        music.pause();
    }
}

function inp3(){
    let main = document.querySelector('main');
    let check_box3 = document.getElementById('inputtt');
    let forms = document.querySelectorAll('form');

    if(check_box3.checked){
        forms[0].style.display = 'none';
        forms[1].style.display = 'none';
    }
    else{
        forms[0].style.display = '';
        forms[1].style.display = '';
    }
}