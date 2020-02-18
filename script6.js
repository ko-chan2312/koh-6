$(function(){
        $('.slideshow').each(function(){
    
            var $slides = $(this).find('img'),
                slideCount = $slides.length,
                currentIndex = 0;
        
            $slides.eq(currentIndex).fadeIn();
    
            setInterval(showNextSlide, 7500);
    
            function showNextSlide () {
    
                var nextIndex = (currentIndex + 1) % slideCount;
    
                $slides.eq(currentIndex).fadeOut();
    
                $slides.eq(nextIndex).fadeIn();
    
                currentIndex = nextIndex;
            }
        
            });
    });

    $(function(){
        $('.faq-list-item').click(function(){
            var $answer = $(this).find('.answer');
            if($answer.hasClass('open')){
                $answer.removeClass('open');
                $answer.slideUp();
                $(this).find('span').text('+');
            }else{
                $answer.addClass('open');
                $answer.slideDown();
                $(this).find('span').text('-');
            }
        });
    });

    $(function(){
        $('.header-iphone').click(function(){
          var $list =$(this).find('.menu-list');
          if($list.hasClass('open')){
            $list.removeClass('open');
            $list.slideUp();
          }else{
            $list.addClass('open');
            $list.slideDown();
          }
        });
      });

