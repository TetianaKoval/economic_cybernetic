//@prepros-append jq-start.js
//@prepros-append jq-end.js

// визначаю тип приладу---------------------------------------------

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

//--------------------------------------------------------------------

//додаю до body класи відповідно до типу приладу

if (isMobile.any()) {
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu__arrow');
  
  //перебираю всі елемети меню зі стрілкою, тобто з вкладеними меню
  if (menuArrows.length > 0) {
    for (let i = 0; i < menuArrows.length; i++) {
      const menuArrow = menuArrows[i];
    // навішую подію а кожну стрілку - перемикання класу active при кліку
      menuArrow.addEventListener('click', function() {
        menuArrow.parentElement.classList.toggle('_active');
      });
    }
  }
} else {
  document.body.classList.add('_pc');
}



//---------------------------------------------------------------------

//прокрутка при кліку

// збираю в масив всі ссилки в яких є data-goto

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;

    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      if (iconMenu.classList.contains('header__menu-icon--active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('header__menu-icon--active');
        menuBody.classList.remove('menu__body--active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });

      e.preventDefault();
      console.log(gotoBlockValue);
    }
  }
};


// меню бургер

const iconMenu = document.querySelector('.header__menu-icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('header__menu-icon--active');
    menuBody.classList.toggle('menu__body--active');
  });
}



// вставка картинки фоном///////////////
function ibg(){
  let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }
    }
  }

ibg();
////////////////////////////////////////

//налаштування слайдера swiper

const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  effect: "fade",
  loop: true,

  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperNews = new Swiper('.swiper-news', {
  spaceBetween: 30,

  pagination: {
    el: '.swiper-news-pagination',
    type: "fraction",
  },

  autoHeight: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    767: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
    },
  }
})

  // налаштування слайдера Slick

  // $(document).ready(function(){
  //   $('.slider__body').slick({
  //     dots: true,
  //     arrows:false,
  //     accessibility: false,
  //     slidesToShaw: 1,
  //     autoplaySpeed: 3000,
  //     adaptiveHeight: true,
  //     nextArrow:'<button type="button" class"slick-next"></button>',
  //     prevArrow:'<button type="button" class"slick-prev"></button>',
  //     responsive:[{
  //       breakpoint: 768,
  //       settings:{}
  //     }]
  //   });
  // });


  // Initialize and add the map
// function initMap() {
  // The location of Uluru
  // const uluru = { lat: 49.163734, lng: 26.408494};
  // The map, centered at Uluru
  // const map = new google.maps.Map(document.getElementById("map"), {
  //   zoom: 8,
  //   center: uluru,
  // });
  // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

