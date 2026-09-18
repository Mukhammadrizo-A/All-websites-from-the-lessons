let time = true

// function b1(){
//     let button = document.getElementById('button')

//     if (time) {
//         document.body.style.backgroundImage = 'url(../../Images/universe.jpg)'
//         button.style.transform = 'translateX(100%)' 
//         button.style.backgroundImage = 'url(../../Images/moon.png)'
        
//         time = false
//     }
//     else {
//         document.body.style.backgroundImage = 'url(../../Images/sky.jpg)'
//         button.style.transform = 'translateX(0)' 
//         button.style.backgroundImage = 'url(../../Images/sun.png)'
        
//         time = true
//     }
// }

function btn(){
    document.body.classList.toggle('night')
}