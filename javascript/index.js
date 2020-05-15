$(document).ready(function(){
    // $('.event-container').show()
    $('.event-container').hide()
    $('.menu-container').hide()
    $('.banner2').hide()
    setInterval(function(){
        let num = 1;
        switch(num){
            case 1:
                $('.banner1').hide()
                $('.banner2').fadeIn(500) 
        }            
        
    },3000)
})
$('#nav-event').on('click',function(){
    $('.home-container').hide()
    $('.menu-container').hide()
    $('.event-container').show()
})

$('#nav-home').on('click', function(){
    $('.event-container').hide()
    $('.menu-container').hide()
    $('.home-container').show()
})

$('#nav-menu').on('click',function(){
    $('.event-container').hide()
    $('.home-container').hide()
    $('.menu-container').show()
})
