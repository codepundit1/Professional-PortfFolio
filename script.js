$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('header nav').css('background','blue');
        }else{
            $('header nav').css('background','transparent');
        }
    })
})