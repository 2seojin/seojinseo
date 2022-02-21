$(document).ready(function(){
    $('#fullpage').fullpage({
        anchors:['intro', 'profile', 'web', 'edit', 'contact'],
        sectionsColor:['#cb997e', '#ffe8d6', '#fff1e6', '#ffe8d6', '#ddbea9'],
        afterLoad:function(anchorLink, index){
            if(index ==1 ){
    
            }else if(index == 2){
                $('.profile h1').addClass('active');
                $('.profile-wrap .about1').addClass('active');
                $('.profile-wrap .about2').addClass('active');
                $('.profile-wrap .about3').addClass('active');
            }else if(index == 3){
                $('.web h1').addClass('active');
                $('.web .swiper').addClass('active');
            }else if(index == 4){
                $('.edit h1').addClass('active');
                $('.edit .gallery').addClass('active');
            }else{
                $('.contact .outro-title').addClass('active');
                $('.contact .contact_wrap').addClass('active');
                $('.contact .footer').addClass('active');
            }
        }
    });

    //nav
    

    //skills bar
    var skills = {
        ph: 95,
        il: 90,
        in: 85,
        ht: 80,
        jq: 60,
        af: 55,
        pr: 55,
      };
      
      $.each(skills, function(key, value) {
        var skillbar = $("." + key);
      
        skillbar.animate(
          {
            width: value + "%"
          },
          5000,
          function() {
            $(".speech-bubble").fadeIn();
          }
        );
      });

    //swiper slide
      var swiper = new Swiper(".swiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    //edit
});