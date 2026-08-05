/*=========================================
        FOREVER GAVESHA
            GALLERY.JS
=========================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

let currentImage = 0;


/*=========================================
        OPEN LIGHTBOX
=========================================*/

function openLightbox(index){

    currentImage = index;

    lightbox.style.display = "flex";

    lightboxImage.src = galleryImages[index].src;

    lightbox.animate(

        [

            {
                opacity:0
            },

            {
                opacity:1
            }

        ],

        {

            duration:400,

            fill:"forwards"

        }

    );

}


/*=========================================
        IMAGE CLICK
=========================================*/

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        openLightbox(index);

    });

});


/*=========================================
        CLOSE
=========================================*/

function closeBox(){

    lightbox.style.display="none";

}

closeLightbox.addEventListener("click",closeBox);

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeBox();

    }

});


/*=========================================
        NEXT IMAGE
=========================================*/

function nextImage(){

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    lightboxImage.src=galleryImages[currentImage].src;

}


/*=========================================
        PREVIOUS IMAGE
=========================================*/

function previousImage(){

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    lightboxImage.src=galleryImages[currentImage].src;

}


/*=========================================
        KEYBOARD
=========================================*/

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!=="flex") return;

    if(e.key==="ArrowRight"){

        nextImage();

    }

    if(e.key==="ArrowLeft"){

        previousImage();

    }

    if(e.key==="Escape"){

        closeBox();

    }

});


/*=========================================
        SWIPE MOBILE
=========================================*/

let touchStartX=0;
let touchEndX=0;

lightbox.addEventListener("touchstart",(e)=>{

    touchStartX=e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend",(e)=>{

    touchEndX=e.changedTouches[0].screenX;

    if(touchStartX-touchEndX>60){

        nextImage();

    }

    if(touchEndX-touchStartX>60){

        previousImage();

    }

});


/*=========================================
        AUTO SLIDESHOW
=========================================*/

let autoSlide;

function startSlide(){

    autoSlide=setInterval(()=>{

        if(lightbox.style.display==="flex"){

            nextImage();

        }

    },4000);

}

function stopSlide(){

    clearInterval(autoSlide);

}

startSlide();

lightbox.addEventListener("mouseenter",stopSlide);

lightbox.addEventListener("mouseleave",startSlide);


/*=========================================
        ZOOM EFFECT
=========================================*/

lightboxImage.addEventListener("click",()=>{

    if(lightboxImage.classList.contains("zoom")){

        lightboxImage.classList.remove("zoom");

    }

    else{

        lightboxImage.classList.add("zoom");

    }

});


/*=========================================
        PRELOAD
=========================================*/

galleryImages.forEach(img=>{

    const preload=new Image();

    preload.src=img.src;

});


/*=========================================
        READY
=========================================*/

console.log("📸 Luxury Gallery Ready");