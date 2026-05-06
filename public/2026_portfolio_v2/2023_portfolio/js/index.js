$(function(){
	custom_cursor();
	Splitting();


	resetBullet = function(){
		$("body").addClass("intro");
		$("body,html").animate({scrollTop:0},0);
	}
	setTimeout(resetBullet,100)
	
	let events = 'animationend webkitAnimationEnd oAnimationEnd';
	$(".intro_wrap .char").on(events, function(e) {
		smoothscroll.init();
		$("body").addClass("size");
	});
	

	//scroll js
	smoothscroll = {

		passive : function(){
			let supportsPassive = false;
			try {
			  document.addEventListener("test", null, { get passive() { supportsPassive = true }});
			} catch(e) {}

			return supportsPassive;
		},
		init : function(){


			let $window = $(window);
			let scrollTime = 1;
			let distance_offset = 2.5;
			let scrollDistance = $window.height() / distance_offset;

			if(this.passive()){
				window.addEventListener("wheel",this.scrolling,{passive: false});
			}else{
				$window.on("mousewheel DOMMouseScroll", this.scrolling);
			}

		},
		destroy : function(){

			if(this.passive()){
				window.removeEventListener("wheel",this.scrolling);
			}else{
			   $(window).off("mousewheel DOMMouseScroll", this.scrolling);
			}
			gsap.killTweensOf($(window),{scrollTo:true});

		},
		scrolling : function(event){

			event.preventDefault();

			let $window = $(window);
			let scrollTime = 1;
			let distance_offset = 2.5;
			let scrollDistance = $window.height() / distance_offset;
			let delta = 0;

			if(smoothscroll.passive()){
				delta = event.wheelDelta/120 || -event.deltaY/3;
			}else{
				if(typeof event.originalEvent.deltaY != "undefined"){
					delta = -event.originalEvent.deltaY/120;
				}else{
					delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
				}
			}

			let scrollTop = $window.scrollTop();
			let finalScroll = scrollTop - parseInt(delta*scrollDistance);

			gsap.to($window, {
				duration: scrollTime,
				scrollTo : { y: finalScroll, autoKill:true },
				ease: 'power3.out',
				overwrite: 5
			});


			

		}

	};

	//공통 스크롤 모션
	$('.ani').each(function(){
        const $this = $(this);
	
        gsap.to($this,{
            duration: 1,
            scrollTrigger: {
				scrub:true,
                trigger: $this,
                start: 'top 50%',
				onEnter: function(){
					$this.addClass('animate');
				}
            },
            ease: 'power2.out',            
        });
    });
	$('.ani2').each(function(){
        const $this = $(this);
	
        gsap.to($this,{
            duration: 1,
            scrollTrigger: {
				scrub:true,
                trigger: $this,
                start: 'top 80%',
				onEnter: function(){
					$this.addClass('animate');
				}
            },
            ease: 'power2.out',            
        });
    });

	// section2 button motion
	$(".hover_mt").mouseover(function(){
		$(".portfolio_list li").removeClass("on");
		$(this).parents("li").addClass("on");
	});
	
	$(".hover_mt").mouseleave(function(){
		$(".portfolio_list li").removeClass("on");
	});

	

});


//button custom js
function custom_cursor(){

	var $cursor = null;
	var $inner = null;
	var $circle = null;

	if( $('html').hasClass('mobile') || $('html').hasClass('ie10') ) { return; }

	// default moving
	$('body').mousemove(function(e) {
		TweenMax.to($('#custom_cursor'), 1.3, {
			x: e.clientX,
			y: e.clientY,
			ease: Power3.easeOut
		});
	});

	// global cursor
	$(document).on({
		mouseenter: function(){
			$cursor = $('#custom_cursor');
			$inner = $cursor.find('.custom_cursor_inner');
			$circle = $cursor.find('.custom_hover_circle');

			var $this = $(this);
			var words = ( $this.data('hover') != undefined ) ? $this.data('hover') : '';

			if( $this.hasClass('drag') ){ $cursor.addClass('drag'); }

			if( $this.hasClass('custom_simple_cursor') ){
				words = '';

				var size = ( $this.data('size') != undefined ) ? $this.data('size') : '48';

				TweenMax.to($inner, .1, {width: size,height: size,ease: Power0.easeNone});
			}


			TweenMax.killTweensOf($circle);
			TweenMax.to($circle, .3, {width: '100%',height: '100%',autoAlpha: 1,ease: Power0.easeNone});
		},
		mouseleave: function(){
			$cursor = $('#custom_cursor');
			$inner = $cursor.find('.custom_cursor_inner');
			$circle = $cursor.find('.custom_hover_circle');

			var $this = $(this);

			if( $this.hasClass('drag') ){ $cursor.removeClass('drag'); }

			if( $this.hasClass('custom_simple_cursor') ){
				TweenMax.to($inner, .2, {width: '100%',height: '100%',ease: Power0.easeNone});
			}

			TweenMax.killTweensOf($circle);
			TweenMax.to($circle, .2, {width: '0%',height: '0%',autoAlpha: 0,ease: Power0.easeNone});
		}
	}, '.custom_hover');

}






