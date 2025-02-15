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
      arrows: false,
      autoplay: true,
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



// Cursor Follower
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easing = 8; // Fixed spelling mistake from "easting" to "easing"
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easing;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easing;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  
  requestAnimationFrame(loop);
});
