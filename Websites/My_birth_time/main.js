function btn(){
    let s_year = document.getElementById('year');
    let s_month = document.getElementById('month');
    let s_day = document.getElementById('day');
    let s_hour = document.getElementById('hour');
    let s_min = document.getElementById('minute');
    let s_sec = document.getElementById('second');

    let time = new Date();
    let b_day = new Date(2010, 8, 16, 20, 20, 20);

    let sec = Math.trunc((time - b_day) / 1000);
    let min = Math.round(sec / 60)
    let hour = Math.round(min / 60)
    let day = Math.round(hour / 24)
    let month = Math.round(day / 30 + 1)
    let year = Math.round(month / 12)

    s_year.innerHTML = year
    s_month.innerHTML = month
    s_day.innerHTML = day
    s_hour.innerHTML = hour
    s_min.innerHTML = min
    s_sec.innerHTML = sec

    setTimeout(btn, 1000);
}