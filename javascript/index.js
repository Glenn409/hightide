$(document).ready(function(){
    // $('.event-container').show()
    $('.drink-content').hide()
    $('.event-container').hide()
    $('.menu-container').hide()
    $('.contact-container').hide()
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

//------------NavBar jquery------------
$('.nav-button-p').on('click',function(){
    $('#nav-home').css('border-bottom','4px solid #1e1e1e')
    $('#nav-event').css('border-bottom','4px solid #1e1e1e')
    $('#nav-menu').css('border-bottom','4px solid #1e1e1e')
})
$('#nav-event').on('click',function(){
    $('.home-container').hide()
    $('.menu-container').hide()
    $('.contact-container').hide()
    $('.event-container').show()
    $('#nav-event').css('border-bottom','4px solid #ff3030')
})

$('#nav-home').on('click', function(){
    $('.event-container').hide()
    $('.menu-container').hide()
    $('.contact-container').hide()
    $('.home-container').show()
    $('#nav-home').css('border-bottom','4px solid #ff3030')

})

$('#nav-menu').on('click',function(){
    $('.event-container').hide()
    $('.home-container').hide()
    $('.contact-container').hide()
    $('.menu-container').show()
    $('#nav-menu').css('border-bottom','4px solid #ff3030')
})
$('#nav-contact').on('click',function(){
    $('.event-container').hide()
    $('.home-container').hide()
    $('.menu-container').hide()
    $('.contact-container').show()
})


// -----------------Menu jquery -------------
$('.food').on('click',function(){
    $('#drinkheader').css('border-bottom','4px solid #1e1e1e')
    $('.drink-content').hide()
    $('.food-content').show()
    $('#foodheader').css('border-bottom','4px solid #ff3030')
})
$('.drink').on('click',function(){
    $('.food-content').hide()
    $('.drink-content').show()
    $('#foodheader').css('border-bottom','4px solid #1e1e1e')
    $('.food').css('background-color','gray')
    $('#drinkheader').css('border-bottom','4px solid #ff3030')
})