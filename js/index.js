function infoNumbers() {
    var counters = document.querySelectorAll(".infoNumbers__number");

    function animeNumbers() {
        //observer to check if counters are on viewport
        if ("IntersectionObserver" in window) {
            let observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    setTimeout(function () {
                        updateCount(entry.target);
                    }, 1500);
                }
                });
            });

            counters.forEach((el) => observer.observe(el));
        } else {
            // IE Fallback
            counters.forEach(function (el) {
                el.innerText = el.getAttribute("data-target");
            });
        }
    }

    function updateCount(el) {
        var speed= 1 ;
        
        //target number
        var target = +el.getAttribute("data-target");
        //initial number
        var count = +el.innerText;
        //increment numbers
        var inc = target / speed;
        var inc2 = target + 1;

        if (count < target) {
            el.innerText = Math.floor(count + inc);
            setTimeout(function () {
                updateCount(el);
            }, 3);

            if (target < 60) {
                el.innerText = Math.floor(count + 1);
                setTimeout(function () {
                updateCount(el);
                }, 1400);
            }
        } else {
            el.innerText = target;
        }
    }

    animeNumbers();
};
infoNumbers();
// swiper
var testimonialThumbs = new Swiper(".testimonial-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    autoplay: true,
    loop: true,
    speed: 3000
    
  });
  var testimonialContent = new Swiper(".testimonial-comment", {
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    speed: 3000,
    thumbs: {
      swiper: testimonialThumbs
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  