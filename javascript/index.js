$(document).ready(function(){
    $('.event-container').show()
    $('.event-container').hide()
})
$('#nav-event').on('click',function(){
    $('.home-container').hide()
    $('.event-container').show()
})

$('#nav-home').on('click', function(){
    $('.event-container').hide()
    $('.home-container').show()
})

