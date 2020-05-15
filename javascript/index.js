$(document).ready(function(){
    // $('.event-container').show()
    $('.event-container').hide()
    $('.menu-container').hide()
    $('.banner2').hide()
    $('.banner3').hide()
    let num = 1;
    setInterval(function(){
        switch(num){
            case 1:
                $('.banner1').hide()
                $('.banner2').fadeIn(500) 
                num++
                break;
            case 2:
                $('.banner2').hide()
                $('.banner3').fadeIn(500)
                num++
                break;
            case 3:
                $('.banner3').hide()
                $('.banner1').fadeIn(500)
                num = 1
                break;
        }            
        
    },4000)
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
