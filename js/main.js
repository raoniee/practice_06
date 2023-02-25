const TOP = document.querySelector('.go_top');
const HD = document.querySelector('#header');

new Swiper('.mainVisual .swiper', {
    // direction: "vertical",
    loop: true,
    autoplay: true,
    speed: 5000,
    pagination: {
        el: ".swiper-dots",
        clickable: true,
    },
});

new fullpage('#fullpage', {
    //options here
    //autoScrolling: true,
    //scrollHorizontally: true

    onLeave: function (origin, destination, direction, trigger) {
        console.log(origin.index, destination.index, direction, trigger)
        if (direction == 'down') {
            HD.classList.add('on');
        }
        else {
            HD.classList.remove('on');
            if (destination.index > 0) {
                HD.classList.add('on_bg');
            }
            else {
                HD.classList.remove('on_bg');
            }
        }

        if (destination.index == 4) {
            TOP.classList.add('on');
            TOP.classList.remove('on02');
        }
        else if (destination.index == 5) {
            TOP.classList.add('on');
            TOP.classList.add('on02');
        }
        else {
            TOP.classList.remove('on');
            TOP.classList.remove('on02');
        }

        HD.addEventListener('click', () => {

        })
    },
});



const TIT = ['Onshore', 'Offshore', 'CS BEARING', 'CS ENERGY'];

new Swiper('.mainESG .swiper', {
    loop: true,
    autoplay: true,
    speed: 1000,
    pagination: {
        el: ".swiper-dots",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + TIT[index] + "</span>";
        },
    },
    effect: 'fade',
});

TOP.addEventListener('click', () => {
    fullpage_api.moveTo(1);
});




