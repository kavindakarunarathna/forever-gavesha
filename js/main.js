/*=========================================
        FOREVER GAVESHA
            MAIN.JS
=========================================*/


/*=========================================
        SMOOTH SCROLL
=========================================*/

const startJourney = document.getElementById("startJourney");

if (startJourney) {

    startJourney.addEventListener("click", () => {

        const target = document.querySelector(".countdown");

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}


/*=========================================
        REVEAL ON SCROLL
=========================================*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.15,

    }

);

sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});


/*=========================================
        PARALLAX HERO
=========================================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const scroll = window.pageYOffset;

    hero.style.backgroundPositionY = scroll * 0.5 + "px";

});


/*=========================================
        GOLDEN GLOW BUTTONS
=========================================*/

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {

    btn.addEventListener("mouseenter", () => {

        btn.style.boxShadow =
            "0 0 35px rgba(212,175,55,.55)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.boxShadow = "none";

    });

});


/*=========================================
        HERO TITLE FADE
=========================================*/

const heroTitle = document.querySelector(".hero h1");

window.addEventListener("scroll", () => {

    if (!heroTitle) return;

    const opacity = 1 - window.scrollY / 600;

    heroTitle.style.opacity = opacity;

});


/*=========================================
        SCROLL INDICATOR
=========================================*/

const indicator = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {

    if (!indicator) return;

    if (window.scrollY > 100) {

        indicator.style.opacity = "0";

    } else {

        indicator.style.opacity = "1";

    }

});


/*=========================================
        RANDOM GOLD SPARKLE
=========================================*/

setInterval(() => {

    const sparkle = document.createElement("div");

    sparkle.className = "particle";

    sparkle.style.left = Math.random() * 100 + "%";

    sparkle.style.animationDuration =
        5 + Math.random() * 5 + "s";

    document.getElementById("particles")
        ?.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 10000);

}, 300);


/*=========================================
        HERO BUTTON PULSE
=========================================*/

setInterval(() => {

    if (!startJourney) return;

    startJourney.animate(

        [

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.06)"

            },

            {

                transform: "scale(1)"

            }

        ],

        {

            duration: 1600

        }

    );

}, 3000);


/*=========================================
        PAGE LOADED
=========================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


console.log("❤️ Forever Gavesha Loaded Successfully ❤️");

/*=========================================
        APPLE ENHANCEMENT PACK
=========================================*/


/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    document.documentElement.style.setProperty(
        "--scroll-width",
        progress + "%"
    );

});


/*=========================================
        MOUSE GLOW
=========================================*/

document.addEventListener("mousemove", (e) => {

    document.documentElement.style.setProperty(

        "--mouse-x",

        e.clientX + "px"

    );

    document.documentElement.style.setProperty(

        "--mouse-y",

        e.clientY + "px"

    );

});


/*=========================================
        CREATE STARS
=========================================*/

const hero = document.querySelector(".hero");

for (let i = 0; i < 80; i++) {

    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    hero.appendChild(star);

}


/*=========================================
        FLOATING LIGHTS
=========================================*/

function createLight() {

    const light = document.createElement("div");

    light.className = "light";

    light.style.left =
        Math.random() * window.innerWidth + "px";

    light.style.animationDuration =
        8 + Math.random() * 8 + "s";

    document.body.appendChild(light);

    setTimeout(() => {

        light.remove();

    }, 16000);

}

setInterval(createLight, 500);


/*=========================================
        HERO PARALLAX
=========================================*/

window.addEventListener("scroll", () => {

    const value = window.scrollY;

    if (hero) {

        hero.style.transform =
            `translateY(${value * 0.15}px)`;

    }

});


/*=========================================
        CARD REVEAL
=========================================*/

const cards = document.querySelectorAll(

    ".reason-card,.timeline-item,.time"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0px)"

}

],

{

duration:1000,

fill:"forwards"

}

);

}

});

},

{

threshold:.2

}

);

cards.forEach(card=>{

revealObserver.observe(card);

});


/*=========================================
        TYPEWRITER EFFECT
=========================================*/

const letterParagraphs =

document.querySelectorAll(".letter p");

letterParagraphs.forEach((paragraph,index)=>{

const text = paragraph.innerHTML;

paragraph.innerHTML="";

let i=0;

setTimeout(()=>{

const typing=setInterval(()=>{

paragraph.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},18);

},index*1200);

});


/*=========================================
        HERO TITLE FLOAT
=========================================*/

const heroTitle = document.querySelector(".hero h1");

setInterval(()=>{

if(!heroTitle) return;

heroTitle.animate(

[

{

transform:"translateY(0px)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0px)"

}

],

{

duration:3500

}

);

},3500);


/*=========================================
        RANDOM GOLD FLASH
=========================================*/

function flash(){

document.body.animate(

[

{

filter:"brightness(1)"

},

{

filter:"brightness(1.15)"

},

{

filter:"brightness(1)"

}

],

{

duration:1200

}

);

}

setInterval(flash,25000);


/*=========================================
        PREMIUM BUTTON HOVER
=========================================*/

document.querySelectorAll("button")

.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.animate(

[

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],

{

duration:500

}

);

});

});


/*=========================================
        HERO IMAGE GLOW LOOP
=========================================*/

setInterval(()=>{

if(!hero) return;

hero.animate(

[

{

filter:"brightness(1)"

},

{

filter:"brightness(1.08)"

},

{

filter:"brightness(1)"

}

],

{

duration:5000

}

);

},5000);


/*=========================================
        READY
=========================================*/

console.log("🍎 Apple Luxury Enhancement Loaded");