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
    $('.drink-content').hide()
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
    // $(".dropdown-content").slideToggle(220);
})
$('#mobile-events').on('click',function(){
    $('#mobile-events').addClass('selected')
    $('.home-container').hide()
    $('.menu-container').hide()
    $('.contact-container').hide()
    $('.event-container').show()
    // $(".dropdown-content").slideToggle(220);
})
$('#mobile-menu').on('click',function(){
    $("#mobile-menu").addClass('selected')
    $('.event-container').hide()
    $('.home-container').hide()
    $('.contact-container').hide()
    $('.menu-container').show()
    // $(".dropdown-content").slideToggle(220);
})
$('#mobile-contact').on("click",function(){
    $('#mobile-contact').addClass('selected')
    $('.event-container').hide()
    $('.home-container').hide()
    $('.menu-container').hide()
    $('.contact-container').show()
    // $(".dropdown-content").slideToggle(220);
})
$(document).click(function(){
    $("#dropdown-content").hide();
});
