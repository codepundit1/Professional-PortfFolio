$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('header nav').css('background','#00539C');
        }else{
            $('header nav').css('background','transparent');
        }
    })
})