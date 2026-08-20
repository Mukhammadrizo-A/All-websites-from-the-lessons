function showTime() {
    let upload_time = document.getElementById('time');

    let get_time = new Date();

    let year = get_time.getFullYear();
    let month = get_time.getMonth() + 1;
    let day = get_time.getDate();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    upload_time.innerHTML = day + '.' + month + '.' + year;

    upload_time.style.color = 'white'
}

window.onload = function() {
    showTime();

    setInterval(showTime, 1000);
}
