$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll: 1,
		speed:1000,
		easing:'linear',
		infinite:true,
		autoplay:true,
		autoplaySpeed:5000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		waitForAnimate:false,
		/*responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 2,
      }
    }
  ]*/
	});
 $('.responsive').slick({
                          dots: true,
                          infinite: true,
                          speed: 1000,
                          slidesToShow: 3,
                          slidesToScroll: 1,
                          responsive: [
                            {
                              breakpoint: 1024,
                              settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true
                              }
                            },
                            {
                              breakpoint: 600,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 480,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            }
                          ]
                        });
})

