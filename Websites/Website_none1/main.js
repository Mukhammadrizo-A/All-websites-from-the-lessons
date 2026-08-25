let theme = true;

function change_theme() {
    let now = document.getElementById('mario');
    let text = document.querySelectorAll('[name = "text"]');
    let b_text = document.getElementById('b_text');
    let img = document.getElementById('img');
    let nav = document.getElementById('navbar');

    if (theme) {
        now.style.marginLeft = '0%';
        now.style.borderRadius = '50px 0px 0px 50px';
        document.body.style.backgroundColor = 'black';
        b_text.style.color = 'white';
        b_text.style.border = '1.5px solid white';
        img.style.boxShadow = '0 0 20px white';
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = 'white';
        }
        nav.style.backgroundColor = 'rgba(177, 173, 173, 0.548)';
        
        theme = false;
    } else {
        now.style.marginLeft = '50%';
        now.style.borderRadius = '0px 50px 50px 0px';
        document.body.style.backgroundColor = 'white';
        b_text.style.color = 'black';
        b_text.style.border = '1.5px solid black';
        img.style.boxShadow = '0 0 20px black';
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = 'black';
        }
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.548)';
        
        theme = true;
    }
}
