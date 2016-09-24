$(document).ready(function () {
    
   $('section').css("min-height", $(window).height());
   $('.jumbotron').css("min-height", $(window).height());
   
    $('#loginmodalbutton').click(function(){
        $('#signmodal').addClass("hide");
        $('#loginmodal').removeClass("hide");
        $(this).addClass("activemodal");
        $(this).removeClass("logininnerlink");
        $('#signmodalbutton').addClass("logininnerlink");
        $('#signmodalbutton').removeClass("activemodal");
    });
                          
    $('#signmodalbutton').click(function(){
        $('#loginmodal').addClass("hide");
        $('#signmodal').removeClass("hide");
        $(this).addClass("activemodal");
        $(this).removeClass("logininnerlink");
        $('#loginmodalbutton').addClass("logininnerlink");
         $('#loginmodalbutton').removeClass("activemodal");
    });
    
    
    
     $(function() {
      $('a[href*="#section"]').click(function() {
          var target = $(this.hash);
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
      });
    });
});