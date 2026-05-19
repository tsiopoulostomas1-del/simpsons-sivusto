const images = [
    'images/restroom2.jpg',
    'images/simpsons_bed1.jpg',
    'images/simpsons_hom3.jpg',
    'images/simpsons_kitchen.jpg',
    'images/simpsons_restroom.jpg'
]

let currentIndex = 0

function openLightbox(index) {
    currentIndex = index
    document.getElementById('lightbox-img').src = images[currentIndex]
    document.getElementById('lightbox').classList.add('active')
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active')
}

function changeImage(direction) {
    currentIndex += direction
    if (currentIndex < 0) currentIndex = images.length - 1
    if (currentIndex >= images.length) currentIndex = 0
    document.getElementById('lightbox-img').src = images[currentIndex]
}