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

    //---a interval for rotating banners at the top of page
    // let num = 1;
    // setInterval(function(){
    //     switch(num){
    //         case 1:
    //             $('.banner1').hide()
    //             $('.banner2').fadeIn(500) 
    //             num++
    //             break;
    //         case 2:
    //             $('.banner2').hide()
    //             $('.banner3').fadeIn(500)
    //             num++
    //             break;
    //         case 3:
    //             $('.banner3').hide()
    //             $('.banner1').fadeIn(500)
    //             num = 1
    //             break;
    //     }            
        
    // },4000)
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
    $('#drinkheader').css('border-bottom','4px solid rgb(44, 44, 44) ')
    $('.food').css('background-color','#1e1e1e')
    $('.drink').css('background-color', 'rgb(44, 44, 44)')
    $('.drink-menu').hide()
    $('.food-menu').show()
    $('#foodheader').css('border-bottom','4px solid #ff3030')
})
$('.drink').on('click',function(){
    $('.food-menu').hide()
    $('.drink-menu').show()
    $('.drink').css("background-color", '#1e1e1e')
    $('.food').css('background-color', 'rgb(44, 44, 44)')
    $('#foodheader').css('border-bottom','4px solid rgb(44, 44, 44)')
    $('#drinkheader').css('border-bottom','4px solid #ff3030')
})
// $('#foodheader').hover(function(){
//     $(this).css("border-bottom",'4px solid #ff3030').fadeIn(500)
// }, function(){
//     $(this).css('border-bottom', '4px solid #1e1e1e')
// })
//------------------MOBILE DROPDOWN --------------

// $(document).click(function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     var isHidden = $('.dropdown-content').is(':hidden')
//     console.log(isHidden)
//     if(isHidden){
//         $('.dropdown-icon').on('click',function(){
//             $('.dropdown-content').slideToggle(220)
//         })
//     } else {
//         // $('.dropdown-content').slideToggle(220)
//     }
//   });

  $(".dropdown-icon").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.dropdown-content').slideToggle(150)
    var isVisible = $('.dropdown-content').is(':visible')
    if(isVisible){
        $(document).on('click',function(){
            $(".dropdown-content").slideUp(150)
        })
    }
  });


$('.main-link').on('click',function(){
    $('.dropdown-content li a').removeClass('selected');
})

$('.outside-link').on('click',function(){
    $('.dropdown-content').toggle();
})
$('#mobile-home').on('click',function(){
    $('#mobile-home').addClass('selected')
    $('.event-container').hide()
    $('.menu-container').hide()
    $('.contact-container').hide()
    $('.home-container').show()
    $('html, body').animate({
        scrollTop: $("#circle-logo").offset().top
      }, 200)
    // $(".dropdown-content").slideToggle(220);
})
$('#mobile-events').on('click',function(){
    $('#mobile-events').addClass('selected')
    $('.home-container').hide()
    $('.menu-container').hide()
    $('.contact-container').hide()
    $('.event-container').show()
    $('html, body').animate({
        scrollTop: $("#circle-logo").offset().top
      }, 200)
    // $(".dropdown-content").slideToggle(220);
})
$('#mobile-menu').on('click',function(){
    $("#mobile-menu").addClass('selected')
    $('.event-container').hide()
    $('.home-container').hide()
    $('.contact-container').hide()
    $('.menu-container').show()
    $('html, body').animate({
        scrollTop: $("#circle-logo").offset().top
      }, 200)
    // $(".dropdown-content").slideToggle(220);
})
$('#mobile-contact').on("click",function(){
    $('#mobile-contact').addClass('selected')
    $('.event-container').hide()
    $('.home-container').hide()
    $('.menu-container').hide()
    $('.contact-container').show()
    $('html, body').animate({
        scrollTop: $("#circle-logo").offset().top
      }, 200)
    // $(".dropdown-content").slideToggle(220);
})
$(document).click(function(){
    $("#dropdown-content").hide();
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