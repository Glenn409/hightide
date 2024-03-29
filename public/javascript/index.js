// const Lazy = require('jquery-lazy')
// $(function() {
//     $('.banner-lazy').Lazy();
//     console.log('load')

$(document).ready(function(){
    //----firstfooter img slider
    setInterval(function() { 
        $('.slide-window').animate({
            right:'+=100%',
        }, 1500, function () {
            $('.slide-window').append($('.slide-window>div:first')).css({ right: 0 });
        });
      },  5000);


    //makes sure all content is hidden until clicked
    $('.drink-menu').hide()
    $('.event-container').hide()
    $('.menu-container').hide()
    $('.contact-container').hide()
    $('.banner2').hide()
    $('.banner3').hide()
    $('.menu-sub-header-drinks').hide()
    $('.menu-section-container').hide()
    $('.small-bites').show()
    $('.small-bites-button').css('color','black')
    $(".small-bites-button").css("background",'white')

    //---a interval for rotating banners at the top of page
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
    if($(window).width() < 500){
        $('#drinkheader').text('Drinks')
    } else {
        $('#drinkheader').text('Drink Menu')
    }
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
    $('#drinkheader').css('border-bottom','4px solid rgb(44, 44, 44) ')
    $('.food').css('background-color','#1e1e1e')
    $('.drink').css('background-color', 'rgb(44, 44, 44)')
    $('.drink-menu').hide()
    $('.food-menu').show()
    $('.menu-sub-header-food').show();
    $('.menu-sub-header-drinks').hide()
    $('#foodheader').css('border-bottom','4px solid #ff3030')
    $('.menu-section-container').hide()
    $('.sub-header-button').removeClass('menu-cursor-hover')
    $('.sub-header-button').css("color",'white')
    $('.sub-header-button').css("background-color",'#1e1e1e')
    $('.small-bites').show();
    $('.small-bites-button').addClass('menu-cursor-hover')
    
})
$('.drink').on('click',function(){
    $('.menu-section-container').hide()
    $('.food-menu').hide()
    $('.menu-sub-header-food').hide()
    $('.menu-sub-header-drinks').show()
    $('.drink-menu').show()
    $('.drink').css("background-color", '#1e1e1e')
    $('.food').css('background-color', 'rgb(44, 44, 44)')
    $('.sub-header-button').removeClass('menu-cursor-hover')
    $('.sub-header-button').css("color",'white')
    $('.sub-header-button').css("background-color",'#1e1e1e')
    $('.menu-section-container').hide()
    $('#foodheader').css('border-bottom','4px solid rgb(44, 44, 44)')
    $('#drinkheader').css('border-bottom','4px solid #ff3030')
    $('.classics').show();
    $('.classics-button').addClass('menu-cursor-hover')
})

$(document).on('change','#mobile-menu-form',function(){
    if($(this).val() === 'drinks'){
        $('.menu-section-container').hide()
        $('.food-menu').hide()
        $('.menu-sub-header-food').hide()
        $('.menu-sub-header-drinks').show()
        $('.drink-menu').show()
        $('.drink').css("background-color", '#1e1e1e')
        $('.food').css('background-color', 'rgb(44, 44, 44)')
        $('.sub-header-button').removeClass('menu-cursor-hover')
        $('.sub-header-button').css("color",'white')
        $('.sub-header-button').css("background-color",'#1e1e1e')
    
        $('.menu-section-container').hide()
        $('#foodheader').css('border-bottom','4px solid rgb(44, 44, 44)')
        $('#drinkheader').css('border-bottom','4px solid #ff3030') 
        $('.classics').show();
        $('.classics-button').addClass('menu-cursor-hover')
    } else if ($(this).val() === 'food'){
        $('#drinkheader').css('border-bottom','4px solid rgb(44, 44, 44) ')
        $('.food').css('background-color','#1e1e1e')
        $('.drink').css('background-color', 'rgb(44, 44, 44)')
        $('.drink-menu').hide()
        $('.food-menu').show()
        $('.menu-sub-header-food').show();
        $('.menu-sub-header-drinks').hide()
        $('#foodheader').css('border-bottom','4px solid #ff3030')
        $('.menu-section-container').hide()
        $('.sub-header-button').removeClass('menu-cursor-hover')
        $('.sub-header-button').css("color",'white')
        $('.sub-header-button').css("background-color",'#1e1e1e')
        $('.small-bites').show();
        $('.small-bites-button').addClass('menu-cursor-hover')
    }
})
$('.change-arrow').on('click',function(e){
    e.preventDefault()
    if($(this).find('i').hasClass('fa-angle-down')){
        $(this).find('i').removeClass("fa-angle-down")
        $(this).find('i').addClass('fa-angle-up')
    } else {
        $(this).find('i').addClass("fa-angle-down")
        $(this).find('i').removeClass('fa-angle-up')
    }
})

  $(".mobile-button-helper").click(function(e){
      console.log($('.dropdown-content').css("margin-left"))
    e.preventDefault();
    e.stopPropagation();

        if($('.dropdown-content').css("margin-left") == "0px")
        {
            $('.dropdown-content').animate({"margin-left": '-=350'},200);
            // $('.dropdown-icon').removeClass('fa-times-thin')
            // $('.dropdown-icon').addClass("fa-bars")
        }
        else if ($('.dropdown-content').css('margin-left') == '-350px')
        {
            $('.dropdown-content').animate({"margin-left": '+=350'},200);
        }
    
    
    });

$('.main-link').on('click',function(){
    $('.dropdown-content li a').removeClass('selected');
})

$('.outside-link').on('click',function(e){
    e.stopPropagation();
    if($('.dropdown-content').css("margin-left") == "0px"){
        $('.dropdown-content').animate({"margin-left": '-=350'},250);
    }

})
$('#mobile-home').on('click',function(e){
    e.stopPropagation();
    $('#mobile-home').addClass('selected')
    $('.event-container').hide()
    $('.menu-container').hide()
    $('.contact-container').hide()
    $('.home-container').show()
    if($('.dropdown-content').css("margin-left") == "0px"){
        $('.dropdown-content').animate({"margin-left": '-=350'},250);
    }
    // console.log($('.dropdown-content').css("margin-left"))


})
$('#mobile-events').on('click',function(e){
    e.stopPropagation();
    $('#mobile-events').addClass('selected')
    $('.home-container').hide()
    $('.menu-container').hide()
    $('.contact-container').hide()
    $('.event-container').show()
    if($('.dropdown-content').css("margin-left") == "0px"){
        $('.dropdown-content').animate({"margin-left": '-=350'},250);
    }

    // $(".dropdown-content").slideToggle(220);
})
$('.live-events').on('click',function(){
    $('.dropdown-content li a').removeClass('selected');
    $('#mobile-events').addClass('selected')
    $('.home-container').hide()
    $('.menu-container').hide()
    $('.contact-container').hide()
    $('.event-container').show()
})
$('.home-menu-box').on('click',function(){
    $('.dropdown-content li a').removeClass('selected');
    $('#mobile-menu').addClass('selected')
    $('.home-container').hide()
    $('.contact-container').hide()
    $('.event-container').hide()
    $('.menu-container').show()
})

$('#mobile-menu').on('click',function(e){
    e.stopPropagation();
    $("#mobile-menu").addClass('selected')
    $('.event-container').hide()
    $('.home-container').hide()
    $('.contact-container').hide()
    $('.menu-container').show()
    if($(window).width() < 500){
        $('#drinkheader').text('Drinks')
    }
    if($('.dropdown-content').css("margin-left") == "0px"){
        $('.dropdown-content').animate({"margin-left": '-=350'},250);
    }

    // $(".dropdown-content").slideToggle(220);
})
$('#mobile-contact').on("click",function(e){
    e.stopPropagation();
    $('#mobile-contact').addClass('selected')
    $('.event-container').hide()
    $('.home-container').hide()
    $('.menu-container').hide()
    $('.contact-container').show()
    if($('.dropdown-content').css("margin-left") == "0px"){
        $('.dropdown-content').animate({"margin-left": '-=350'},250);
    }

    // $(".dropdown-content").slideToggle(220);
})
$(document).click(function(e){
    e.stopPropagation();
    if($('.dropdown-content').css('margin-left') == '0px'){
            $('.dropdown-content').animate({"margin-left": '-=350'},250);
            $('.dropdown-icon').removeClass('fa-times-thin')
            $('.dropdown-icon').addClass("fa-bars")
    } 
    // else if($('.dropdown-content').css('margin-left') !== '-160px'){
    //     $('.dropdown-content').css('margin-left', '-160px');
    // }
});


//----CONTACT US VALIDATORS ----- 
$('#contact-submit').on('click',function(e){
    e.preventDefault()
    console.log('----pressed----')
    let name = $('#name').val()
    let email = $('#email').val()
    let msg = $("#message").val()
    
    if(name.trim() === ''){
        $('#name').css('border','2px solid red')
        $('#name').css('background','#FFCCCC')
        $('#name-error').text('This Field is Required')
    } else {
        $('#name').css('border','')
        $('#name').css('background','white')
        $('#name-error').text('')
    }

    if(email.trim() === ''){
        $('#email').css('border','2px solid red')
        $('#email').css('background','#FFCCCC')
        $('#email-error').text('This Field is Required')
    } else {
        $('#email').css('border','')
        $('#email').css('background','white')
        $('#email-error').text('')
    }

    if(msg.trim() === ''){
        $('#message').css('border','2px solid red')
        $('#message').css('background','#FFCCCC')
        $('#msg-error').text('This Field is Required')
    } else {
        $('#message').css('border','')
        $('#message').css('background','white')
        $('#msg-error').text('')
    }

    if(name.trim() !== '' || email.trim() !== '' || msg.trim() !== '' ){
        $.post('/redheads/api/contact',
        {
            name: name,
            email: email,
            msg: msg
        },function(data){
            if(data.status === true){
                $("#email-status").text("Email Sent!")
                $('#email-status').css('color','#4BB543')
                $('#contact-submit').attr("disabled", true)
            } else {
                $('#email-status').text('Something went wrong!')
                $('#email-status').css('color','red')
                $('#contact-submit').attr("disabled", true)
            }
        })
        
    }

})

// -------MENU JQUERY FOR DESKTOP --------
$('.sub-header-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.sub-header-button').removeClass('menu-cursor-hover')
    $('.sub-header-button').css('color','white')
    $('.sub-header-button').css("background-color",'#1e1e1e')
    if($(this).hasClass('desktop') === true){
        $(this).css('background-color', 'white')
        $(this).css('color','black')
    }  
    
})

$(".sub-header-button").on('mouseover', function () {
    if($(this).hasClass('mobile') === false){
        $(this).addClass('menu-cursor-hover')
    }
 }).on('mouseout', function () {
     if($(this).hasClass('mobile') === false){
         $(this).removeClass('menu-cursor-hover')
     }
 });



$('.classics-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.classics').show();
})
$('.hand-crafted-seltzers-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.hand-crafted-seltzers').show()
})

$('.margaritas-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.margaritas').show()
})

$('.mules-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.mules').show()
})

$('.mojitos-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.mojitos').show()
})

$('.frozen-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.frozen').show()
})
$('.redbull-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.redbull').show()
})
$('.beer-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.beer').show()
})
$('.small-bites-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.small-bites').show()
})
$('.handhelds-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.handhelds').show()
})
$('.bowls-button').on("click",function(){
    $('.menu-section-container').hide()
    $('.bowls').show()
})
$(".salads-button").on("click",function(){
    $('.menu-section-container').hide()
    $('.salads').show()
})
$('.sides-button').on('click',function(){
    $('.menu-section-container').hide()
    $('.sides').show()
})
// ---- MENU JQUERY FOR MOBILE ------
$('.classics-mobile-button').on('click',function(){
    $('.classics-mobile').slideToggle(400, 'linear')
})

$('.hand-crafted-seltzers-mobile-button').on('click',function(){
    $('.hand-crafted-seltzers-mobile').slideToggle(400, 'linear')
})
$('.margaritas-mobile-button').on('click',function(){
    $('.margaritas-mobile').slideToggle(400, 'linear')
})
$('.mules-mobile-button').on('click',function(){
    $('.mules-mobile').slideToggle(400, 'linear')
})
$('.mojitos-mobile-button').on('click',function(){
    $('.mojitos-mobile').slideToggle(400, 'linear')
})
$('.frozen-mobile-button').on('click',function(){
    $('.frozen-mobile').slideToggle(400, 'linear')
})
$('.redbull-mobile-button').on('click',function(){
    $('.redbull-mobile').slideToggle(400,'linear')
})

$('.beer-mobile-button').on('click',function(){
    $('.beer-mobile').slideToggle(400, 'linear')
})

$('.small-bites-mobile-button').on('click',function(){
    $('.small-bites-mobile').slideToggle(400,'linear')
})

$('.handhelds-mobile-button').on('click',function(){
    $('.handhelds-mobile').slideToggle(400,'linear')
})
$('.bowls-mobile-button').on("click",function(){
    $('.bowls-mobile').slideToggle(400,'linear')
})

$('.salads-mobile-button').on('click',function(){
    $('.salads-mobile').slideToggle(400,'linear')
})

$('.sides-mobile-button').on('click',function(){
    $('.sides-mobile').slideToggle(400,'linear')
})