document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle");
    const navbarList = document.querySelector(".navbar-list");
    const body = document.body;

    toggleButton.addEventListener("click", () => {
       
        toggleButton.classList.toggle("active");
        navbarList.classList.toggle("active");
        body.classList.toggle("blur-effect"); // Add or remove blur effect on the body
    });

    // Close navbar and remove blur when clicking outside or on a link
    document.addEventListener("click", (e) => {
        if (!navbarList.contains(e.target) && !toggleButton.contains(e.target)) {
            toggleButton.classList.remove("active");
            navbarList.classList.remove("active");
            body.classList.remove("blur-effect");
        }
    });
});



// slder
$(document).ready(function(){
    $('.sliding-lists').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 3000,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [
        {
          breakpoint: 968,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1 
        }
      }
      ]
    });
  });

