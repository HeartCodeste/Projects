document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('nav');
    function addNavShadow() {
        if(window.scrollY >= 300) {
            nav.classList.add('nav-shadow');
        } else {
            nav.classList.remove('nav-shadow');
        }
    }
    window.addEventListener('scroll', addNavShadow);
    addNavShadow();
    
    const mobileMenu = document.querySelector('#navbarNavAltMarkup');
    const navButton = document.querySelector('.navbar-toggler');
    
    function hideNavbar(ev) {
        if (ev.target.classList.contains('navbar-toggler') || ev.target.classList.contains('fa-bars')) {
            return;
        }

        if (mobileMenu.classList.contains('show')) {
            navButton.click();  
        }  
    }
    document.addEventListener('click', hideNavbar);

    $('.carousel-team').slick({
        mobileFirst:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite:true,
        arrows:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
             
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1600,
            settings: {
              arrows: false,
             
              slidesToShow: 4
            }
          }
        ]
    });
} );
