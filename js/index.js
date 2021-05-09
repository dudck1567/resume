// 시작 로딩 화면 
$(window).on('load', function(){
    setTimeout(function(){
        $('.introbox').fadeOut(100, function(){
            $('.article1 > div').addClass('on')
        }) 
    }, 2200)
}) 


var aboutNear = $('#aboutme').offset().top
var skillNear = $('#toolskill').offset().top
var projectNear = $('#project').offset().top
var contactNear = $('#contact').offset().top
var lastNear = $('body').height() - $(window).height()
var skillNearAni = skillNear - $(window).height() / 2


$('.nav li').on('click', function(e){
    e.preventDefault()
    // $(this)
    // .addClass('on')
    // .siblings().removeClass('on')
    var num = $(this).index()
    // if(num===0){
    //     $('html').animate({scrollTop:aboutNear}, 500)
    // } else if(num===1){
    //     $('html').animate({scrollTop:skillNear}, 500)
    // } else if(num===2){
    //     $('html').animate({scrollTop:projectNear}, 500)
    // } else{
    //     $('html').animate({scrollTop:contactNear}, 500)
    // }
    switch(num){
        case 0:  $('html').stop().animate({scrollTop:aboutNear}, 500); break;
        case 1:  $('html').stop().animate({scrollTop:skillNear}, 500); break;
        case 2:  $('html').stop().animate({scrollTop:projectNear}, 500); break;
        case 3:  $('html').stop().animate({scrollTop:lastNear}, 500);
    }
})

$('.logo').on('click', function(e){
    e.preventDefault()
    $('html').animate({scrollTop:0}, 500)
    $(this).next().find('li').removeClass('on')
})


$(window).on('scroll', function(){
    var scr = $(this).scrollTop()
    if( scr >= 10 && !$('#header').hasClass('on') ){
        $('#header').addClass('on')
    } else if( scr < 10 && $('#header').hasClass('on') ){
        $('#header').removeClass('on')
    }
})

// 퍼센트 
// function draw(percent, cname){
//     var count = 0;
//     var stop = setInterval(function(){
//         count++
//         if(count<=percent){
//             $(cname).find('.myscore').text(count+'%').css({
//                 width:count+'%',
//                 opacity:1,
//             })
//         }else{
//             clearInterval(stop)
//             return false
//         }
//     }, 15)
// }

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct < aboutNear){
        $('.nav li').removeClass('on')
    }else if( sct >= aboutNear && sct< skillNear ){
        $('.nav li').eq(0).addClass('on').siblings().removeClass('on')
       
       
    }else if(sct >= skillNear && sct < projectNear){
        $('.nav li').eq(1).addClass('on').siblings().removeClass('on')
        
    }else if(sct >= projectNear && sct < lastNear){ 
        $('.nav li').eq(2).addClass('on').siblings().removeClass('on')
        
        
        
    }else if(sct>=lastNear){
        $('.nav li').eq(3).addClass('on').siblings().removeClass('on')
    }

    if(sct>=skillNearAni && sct<projectNear){
        if(!$('.skillcontainer').hasClass('on')){
            $('.skillcontainer').addClass('on')
            // draw(90,'.illust')
            // draw(80,'.photoshop') 
            // draw(70,'.rhino')
            // draw(60,'.html')
            // draw(50,'.css')
            // draw(40,'.java')
            // draw(30,'.jquery')
            }
    }else{
        $('.skillcontainer').removeClass('on')
        // $('.skillcontainer').find('.myscore').css({
        //     width:'0%',
        //     opacity:'0' 
        // })
    }
})

//article4

$('.image .second').on('click', function(){
    $(this).removeClass('on')
    $(this).siblings().addClass('on')
 });

// article3 애니메이션
var article3Near = $('.article3').offset().top - (wh / 2 )
$(window).on('scroll', function(){
    if(sct>article3Near && !$('.article3').hasCalss('on')){
        $('.article3').addClass('on')
    } else if(sct===0){
        $('.article3').removeClass('on')
    }
})



