// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu-bottom')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)



//Яндекс карта

   // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [55.76692978264153,37.63083424506226],
            zoom: 14
        }, {
          suppressMapOpenBlock: true
        });
        var myPlacemark = new ymaps.Placemark(
          [55.769511481423514,37.639477336205104],
          {},
          {
            iconLayout: "default#image",
            iconImageHref: "img/location.svg",
            iconImageSize: [12, 12],
            iconImageOffset: [0, 0],
          }
        );

        myMap.geoObjects.add(myPlacemark);
        myMap.controls.remove("zoomControl");
        myMap.controls.remove("geolocationControl");
        myMap.controls.remove("inputSearch");
        myMap.controls.remove("fullscreenControl");
        myMap.controls.remove("typeSelector");
        myMap.controls.remove("trafficControl");
        myMap.controls.remove("rulerControl");
        myMap.controls.remove("rulerControl");
        myMap.controls.remove("rulerControl");
        myMap.controls.remove("searchControl");
        myMap.controls.remove("routeButtonControl");
        myMap.controls.remove('routeEditor');
    }


    //Скрытие и открытие contacts__info

    const closeInfo = document.querySelector('.contacts-info__close')
    const info = document.querySelector('.contacts__info')
    const openInfo = document.querySelector('.contacts-info__open')
    
    closeInfo.addEventListener('click', function(){
      info.classList.add('close-info')
    })
 

    openInfo.addEventListener('click', function(){
      info.classList.remove('close-info')
    })


  //Just Validate
  //about form
  new window.JustValidate('.about__form', {
    colorWrong: '#F06666',
    borderWrong: '#F06666',
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
          required: 'Укажите ваш e-mail',
          email: 'Недопустимый формат'
        }
    }
  });

  //contacts form
  new window.JustValidate('.contacts__form', {
    colorWrong: '#FF3030',
    borderWrong: '#FF3030',
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
          required: 'Укажите ваш e-mail',
          email: 'Недопустимый формат'
        }
    }
  });


  //search


    const searchBtn = document.querySelector('.search__btn')
    const search = document.querySelector('.search')
    const closeSearch = document.querySelector('.search-form__close')
    
    searchBtn.addEventListener('click', function(){
      search.classList.add('search-active')
      searchBtn.classList.add('search__btn-active')
    })
 
    closeSearch.addEventListener('click', function(){
      search.classList.remove('search-active')
      searchBtn.classList.remove('search__btn-active')
    });

 