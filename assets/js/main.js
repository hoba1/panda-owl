document.querySelectorAll('.product-image').forEach((image) => {
    image.addEventListener('click', (e) => {
        document.querySelector('.modal-image').setAttribute('src', e.target.getAttribute('src'));
    });
})

if (window.innerWidth <= 768) {
    document.querySelector(".products swiper-container").setAttribute("slides-per-view", "auto");
} else {
    document.querySelector(".products swiper-container").setAttribute("slides-per-view", "3");
}