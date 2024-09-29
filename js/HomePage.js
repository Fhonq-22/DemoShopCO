var flkty = new Flickity('.carousel', {
    wrapAround: true,
    prevNextButtons: false, // Disable Flickity's default buttons
    pageDots: true // Enable dots for navigation
    });

    document.querySelector('.prev').addEventListener('click', function() {
    flkty.previous();
    });

    document.querySelector('.next').addEventListener('click', function() {
    flkty.next();
});