const galleryImages = document.querySelectorAll(".gallery-grid img, .gallery-single img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

let currentIndex = 0;

function showImage(index){
    currentIndex = index;
    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt;
}

galleryImages.forEach(function(image, index){
    image.addEventListener("click", function(){
        lightbox.classList.add("active");
        showImage(index);
    });
});

function showPrevImage(){
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = galleryImages.length - 1;
    }

    showImage(currentIndex);
}

function showNextImage(){
    currentIndex++;

    if(currentIndex >= galleryImages.length){
        currentIndex = 0;
    }

    showImage(currentIndex);
}

closeButton.addEventListener("click", function(){
    lightbox.classList.remove("active");
});

prevButton.addEventListener("click", function(event){
    event.stopPropagation();
    showPrevImage();
});

nextButton.addEventListener("click", function(event){
    event.stopPropagation();
    showNextImage();
});

lightbox.addEventListener("click", function(event){
    if(event.target === lightbox){
        lightbox.classList.remove("active");
    }
});

document.addEventListener("keydown", function(event){
    if(!lightbox.classList.contains("active")){
        return;
    }

    if(event.key === "Escape"){
        lightbox.classList.remove("active");
    }

    if(event.key === "ArrowLeft"){
        showPrevImage();
    }

    if(event.key === "ArrowRight"){
        showNextImage();
    }
});