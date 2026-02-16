
const slides = [
    { img: "images/slide1.jpg", alt: "AR glasses lateral view showing design", text: "Heat-forged carbon fiber unibody design for exceptional lightness and resistance." },
    { img: "images/slide2.jpg", alt: "AR glasses interface to real life", text: "Interface to real life" },
    { img: "images/slide3.jpg", alt: "Interface in glasses", text: "Only visible by you" },
    { img: "images/slide4.jpg", alt: "glasses, luxury style", text: "Luxury style" },
];

const container = document.getElementById('carouselcontainer');
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let current = 0;

function cleanSlide(number) {
    const slide = document.querySelector('#slide' + number);
    slide.innerHTML = ''; 
    slide.className = 'caruselSlides sideslide';
}


function centerSlide(slideNumber) {
    const slide = document.getElementById('slide' + slideNumber);
    const containerWidth = container.offsetWidth;
    const slideWidth = slide.offsetWidth;
    const offset = (containerWidth - slideWidth) / 2 - slide.offsetLeft;
    container.style.transform = "translateX(" + offset + "px)";
}

function chargeSlide(number) {
    const slide = document.getElementById('slide' + number);
    slide.className = 'caruselSlides';
    slide.innerHTML = `
        <img src="${slides[number].img}" alt="${slides[number].alt}" class="carouselimg fadein">
        <p class="slidetext fadein">${slides[number].text}</p>
        <button class="btnexpand fadein"><img src="images/add_2.svg"></button>`;
}


centerSlide(0);

nextBtn.addEventListener('click', function() {
    if (current < slides.length - 1) {
        let Prev = current;
        current++;

        centerSlide(current);

        setTimeout(function() {
            cleanSlide(Prev);
            chargeSlide(current);
            document.getElementById('dot' + Prev).className = 'dot';
            document.getElementById('dot' + current).className = 'activedot';

            container.style.transition = 'none';
            centerSlide(current);
            container.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
        }, 800);

        if (current !== 0) prevBtn.disabled = false;
    }
    if (current === slides.length - 1) nextBtn.disabled = true;
});

prevBtn.addEventListener('click', function() {
    if (current > 0) {
        let Prev = current;
        current--;

        centerSlide(current);

        setTimeout(function() {
            cleanSlide(Prev);
            chargeSlide(current);
            document.getElementById('dot' + Prev).className = 'dot';
            document.getElementById('dot' + current).className = 'activedot';

            container.style.transition = 'none'; 
            centerSlide(current);
            container.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
        }, 800);

        nextBtn.disabled = false;
    }
    if (current === 0) prevBtn.disabled = true;
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        if (current < slides.length - 1) {
        let Prev = current;
        current++;

        centerSlide(current);

        setTimeout(function() {
            cleanSlide(Prev);
            chargeSlide(current);
            document.getElementById('dot' + Prev).className = 'dot';
            document.getElementById('dot' + current).className = 'activedot';
            container.style.transition = 'none';
            centerSlide(current);
            container.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
        }, 800);

            if (current !== 0) prevBtn.disabled = false;
        }
        if (current === slides.length - 1) nextBtn.disabled = true;
    }
    if (e.key === 'ArrowLeft') {
        if (current > 0) {
        let Prev = current;
        current--;

        centerSlide(current);

        setTimeout(function() {
            cleanSlide(Prev);
            chargeSlide(current);
            document.getElementById('dot' + Prev).className = 'dot';
            document.getElementById('dot' + current).className = 'activedot';

            container.style.transition = 'none'; 
            centerSlide(current);
            container.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
        }, 800);

        nextBtn.disabled = false;
    }
    if (current === 0) prevBtn.disabled = true;
    }
});
