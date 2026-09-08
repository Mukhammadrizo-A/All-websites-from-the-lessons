let now_1 = true
let now_2 = true
let now_3 = true

$('.btn1').click(function () {
    if (now_1 == true) {
        $('.img1').css('border-radius', '50%');
        $('.btn1').css({
            'background-color': 'red',
            'color': 'white'
        });

        now_1 = false;
    }

    else {
        $('.img1').css('border-radius', '20px');
        $('.btn1').css({
            'background-color': 'green',
            'color': 'black'
        });
        now_1 = true;
    }
});

$('.btn2').click(function () {
    if (now_2 == true) {
        $('.btn2').css({
            'transform': 'scale(1.3)',
            'background-color': 'red',
            'color': 'white'
        });

        now_2 = false
    }
    else {
        $('.btn2').css({
            'transform': 'scale(1.0)',
            'background-color': 'green',
            'color': 'black'
        });

        now_2 = true
    }
});

$('.btn3').click(function () {
    if (now_3 == true) {
        $('h1').css('color', 'red');
        $('p').css('color', 'green');
        $('.btn3').css({
            'background-color': 'red',
            'color': 'white'
        });

        now_3 = false
    }
    else {
        $('h1').css('color', 'black');
        $('p').css('color', 'black');
        $('.btn3').css({
            'background-color': 'green',
            'color': 'black'
        });

        now_3 = true
    }
});

function func(now) {
    let images = document.getElementsByClassName('img-item');

    now.style.boxShadow = '0 0 20px green';
}