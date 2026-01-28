function changeImage(element) {
    const featured = document.getElementById('featured');
    
    featured.style.opacity = '0';
    
    setTimeout(() => {
        featured.src = element.src;
        featured.style.opacity = '1';
    }, 300);

    const thumbnails = document.querySelectorAll('.thumb');
    thumbnails.forEach(t => t.classList.remove('active'));

    element.classList.add('active');
}