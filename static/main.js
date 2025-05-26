

// this code is for slowly displaying contents
window.addEventListener('scroll', slow);
function slow(){
    var reavels = document.querySelectorAll('.slow');
    
    for(var i = 0; i < reavels.length; i++){

        var windowheight = window.innerHeight;
        var reaveltop = reavels[i].getBoundingClientRect().top;
        var reavelpoint = 150;

        if(reaveltop < windowheight - reavelpoint){
            reavels[i].classList.add('active');
            console.log('showing')
        }
        else{
            reavels[i].classList.remove('active');
            console.log('hidden')
        }
    }
}



// this path of code is for hidding menu
let menu_bar = document.querySelector('.menu1')
let hide_menu = document.querySelector('.menu-hidden')
menu_bar.addEventListener('click', e=> {
    if(hide_menu.className === 'menu-hidden'){
        hide_menu.classList = ('hidden-menu')
        console.log('added')
    }else{
        hide_menu.classList = ('menu-hidden')
        console.log('removed')
    }
})




