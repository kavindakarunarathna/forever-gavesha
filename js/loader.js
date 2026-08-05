/*=========================================
        FOREVER GAVESHA
            LOADER.JS
=========================================*/


document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("loader");

    const hero = document.querySelector(".hero");

    const heroContent = document.querySelector(".hero-content");

    // Hero එක මුලින් hide කරන්න
    if (hero) {

        hero.style.opacity = "0";

        hero.style.transform = "scale(1.05)";

        hero.style.transition = "all 1.5s ease";

    }

    // Loader එක තත්පර 4.5ක් පෙන්වන්න
    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.pointerEvents = "none";

        // Hero Reveal
        if (hero) {

            hero.style.opacity = "1";

            hero.style.transform = "scale(1)";

        }

        // Hero Text Animation
        if (heroContent) {

            heroContent.animate(

                [

                    {

                        opacity: 0,

                        transform: "translateY(60px)"

                    },

                    {

                        opacity: 1,

                        transform: "translateY(0px)"

                    }

                ],

                {

                    duration: 1800,

                    easing: "ease-out",

                    fill: "forwards"

                }

            );

        }

    }, 4500);

});


/*=========================================
        LOADER LOGO GLOW
=========================================*/

const logo = document.querySelector(".loader-logo");

if (logo) {

    setInterval(() => {

        logo.animate(

            [

                {

                    transform: "scale(1)",

                    textShadow: "0 0 15px gold"

                },

                {

                    transform: "scale(1.08)",

                    textShadow: "0 0 40px gold"

                },

                {

                    transform: "scale(1)",

                    textShadow: "0 0 15px gold"

                }

            ],

            {

                duration: 2000

            }

        );

    }, 2000);

}


/*=========================================
        LOADER TEXT FADE
=========================================*/

const loaderText = document.querySelector(".loader-text");

if (loaderText) {

    setInterval(() => {

        loaderText.animate(

            [

                {

                    opacity: .3

                },

                {

                    opacity: 1

                },

                {

                    opacity: .3

                }

            ],

            {

                duration: 1800

            }

        );

    }, 1800);

}


/*=========================================
        GOLD FLASH EFFECT
=========================================*/

function goldFlash() {

    const flash = document.createElement("div");

    flash.style.position = "fixed";

    flash.style.inset = "0";

    flash.style.pointerEvents = "none";

    flash.style.background =
        "radial-gradient(circle, rgba(212,175,55,.18), transparent 70%)";

    flash.style.opacity = "0";

    flash.style.zIndex = "99998";

    flash.style.transition = "opacity .8s";

    document.body.appendChild(flash);

    requestAnimationFrame(() => {

        flash.style.opacity = "1";

    });

    setTimeout(() => {

        flash.style.opacity = "0";

    }, 300);

    setTimeout(() => {

        flash.remove();

    }, 1200);

}

// Loader එක close වෙනකොට flash එක
setTimeout(() => {

    goldFlash();

}, 4400);


/*=========================================
        LOADER PROGRESS EFFECT
=========================================*/

let progress = 0;

const progressInterval = setInterval(() => {

    progress += Math.floor(Math.random() * 8);

    if (progress >= 100) {

        progress = 100;

        clearInterval(progressInterval);

    }

    console.log("Loading...", progress + "%");

}, 180);


/*=========================================
        END
=========================================*/

console.log("🎬 Luxury Loader Ready");