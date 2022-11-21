// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// import Parallax from 'parallax-js'

import Swiper, { Navigation } from 'swiper';
import FormHandler from 'formhandler.js';

Swiper.use([Navigation]);


//- SERVIVE FUNCTIONS==================

//- remove-class--------------------------
//- require('./vendor/libs-vanilla/service-functions/remove-class.js')

//- siblings--------------------------
//- require('./vendor/libs-vanilla/service-functions/siblings.js')

//- webp-detection--------------------------
// require('./vendor/libs-vanilla/service-functions/webp-detection.js')

//- dropdown-toggle on touch devices--------------------------
//- require('./vendor/libs-vanilla/service-functions/dropdown-toggle.js')

//- isMobile--------------------------
// require('./vendor/libs-vanilla/service-functions/mobileDetect.js')

//- All in one file--------------------------
require('./vendor/service-functions/all-functions.js')


//- WITH JQUERY===================================
//- jquery--------------------------
// require('./vendor/libs/jquery/jquery-3.1.1.min.js')

//- jquery-UI--------------------------
// require('./vendor/libs/jquery-ui/jquery-ui.min.js')
	
//- dl-menu--------------------------
// require('./vendor/libs/dlmenu/js/jquery.dlmenu.js')

//- magnific-popup--------------------------
// require('./vendor/libs/magnific-popup/dist/jquery.magnific-popup.min.js')
	
//- slick--------------------------
// require('./vendor/libs/slick/slick.min.js')
	
//- slick-master (без лишних контейнеров)--------------------------
// require('./vendor/libs/slick-master/slick.js')
		
//- superfish--------------------------
// require('./vendor/libs/superfish/dist/js/hoverIntent.js')
// require('./vendor/libs/superfish/dist/js/superfish.min.js')

//- end WITH JQUERY===================================


//- VANILLA JS===================================
//- dynamic-adaptive--------------------------
// require('./vendor/libs-vanilla/dynamic-adaptive/da(es6).js')
	
//- slideout--------------------------
// require('./vendor/libs-vanilla/slideout/slideout.js')

//- multilevel-panel--------------------------
// require('./vendor/libs-vanilla/multilevel-panel/multilevel-panel.js')

//- multilevel-dropdown-menu--------------------------
// require('./vendor/libs-vanilla/multilevel-dropdown/multidropdown.js')
		
//- lazysizes--------------------------
// require('./vendor/libs-vanilla/lazysizes/lazysizes.min.js')
	
//- accordion--------------------------
// require('./vendor/libs-vanilla/accordion/vanilla-accordion.js')
	
//- tabs--------------------------
// require('./vendor/libs-vanilla/tabs/tabs-pure.js')

//- tabs-accordion-combine--------------------------
// require('./vendor/libs-vanilla/tabs-accordion-combine/tabs-accordion.js')
	
//- micromodal--------------------------
// require('./vendor/libs-vanilla/swiper/swiper-bundle.min.js')
	
//- swiper--------------------------
// require('./vendor/libs-vanilla/micromodal/micromodal.js')

//- tiny-slider--------------------------
// require('./vendor/libs-vanilla/swiper/swiper-bundle.min.js')

//- wNumb--------------------------
// require('./vendor/libs-vanilla/wnumb/wNumb.js')

//- noUiSlider--------------------------
// require('./vendor/libs-vanilla/noUiSlider/nouislider.min.js')

//- iMask--------------------------
// require('./vendor/libs-vanilla/imask/imask.js')

//- FormHandler--------------------------
//- html разыметка должна быть как в доке https://ivangrimes.github.io/formhandler.js/, обязателько должен присутствовать <div class="formhandler__notices"></div>!
//- кастомные стили для инпута и ошибок здесь _misc/formHandler-custom
// require('./vendor/libs-vanilla/formhandler.js-1.1.2/dist/js/FormHandler.min.js')

//- ratings--------------------------
// require('./vendor/libs-vanilla/rating/ratings.js')

//- scroll-to-sects--------------------------
// require('./vendor/libs-vanilla/scroll-to-sects/scrolltosect.js')

//- tippy--------------------------
//- https://atomiks.github.io/tippyjs/
//- base using:  html: <button data-tippy-content="Tooltip">Text</button>; js: tippy('[data-tippy-content]');
// require('./vendor/libs-vanilla/tippy/popper.min.js')
// require('./vendor/libs-vanilla/tippy/tippy-bundle.umd.js')

//- sticky-sidebar --------------------------
//- https://abouolia.github.io/sticky-sidebar/#usage
// require('./vendor/libs-vanilla/sticky-sidebar/dist/resizeSensor.js')
// require('./vendor/libs-vanilla/sticky-sidebar/dist/sticky-sidebar.min.js')

//- simplebar--------------------------
//- USE:	new SimpleBar(document.querySelector('mySelector'), { autoHide: false });
// require('./vendor/libs-vanilla/simplebar/simplebar.min.js')
	
//- fstdropdown (кастомный селект), исп-е.: <select data-searchdisable="true" class="fstdropdown-select">
// require('./vendor/libs-vanilla/fstdropdown/fstdropdown.min.js')

//- baguetteBox-------------------------- use: https://github.com/feimosi/baguetteBox.js#usage
// require('./vendor/libs-vanilla/baguetteBox/dist/baguetteBox.min.js')

//- counter--------------------------
// require('./vendor/libs-vanilla/counter/counter.js')
	
//- end VANILLA JS===================================

// require('./vendor/color-scheme-switcher.js')
require('./vendor/jquery-scrollify/jquery.scrollify.js')



document.querySelector('.toggle-mnu').onclick = function(e) {
	this.classList.toggle('on');
	document.documentElement.classList.toggle('menu-opened');
	document.documentElement.classList.toggle('lock');
}



document.addEventListener('DOMContentLoaded', () => {
	//---------------Swiper
if(document.querySelector('.works__cards') !== null){
  const swiper = new Swiper('.works__cards', {
		  /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			//spaceBetween: 0,
			//autoHeight: true,
			//speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
		  // direction: 'vertical',
		  // loop: true,
		  breakpoints: {
		    // when window width is >= 320px
		    320: {
		    	slidesPerView: 1.2,
		    	spaceBetween: 15,
			    },
		    // when window width is >= 480px
		    480: {
		    	slidesPerView: 2,
		    	spaceBetween: 30,

		    },
		    // when window width is >= 640px
		    768: {
		    	slidesPerView: 3,
		    	spaceBetween: 56
		    }
		  },

		  // Navigation arrows
		  navigation: {
		  	nextEl: '.works__nav--next',
		  	prevEl: '.works__nav--prev',
		  	// enabled: false
		  },

		  // And if we need scrollbar
		  scrollbar: {
		  	el: '.swiper-scrollbar',
		  	hide: false,
		  	draggable: true
		  },
		});
	}
//---------------END Swiper

	// $.scrollify({
	// 	section : "section",
	// });

	const formhandler = new FormHandler({
	  fields: {
	    name: {
	      validation: 'isName',
	    },
	    email: {
	      validation: 'isEmail',
	    },
	    message: {
	      validation: 'isNonEmpty',
	    }
	  },
	});

});