/*=========================================
        FOREVER GAVESHA
          PARTICLES.JS
=========================================*/

const particleContainer = document.getElementById("particles");

/*=========================================
        CREATE GOLD PARTICLE
=========================================*/

function createParticle() {

    if (!particleContainer) return;

    const particle = document.createElement("span");

    particle.classList.add("particle");

    const size = Math.random() * 6 + 2;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.top = window.innerHeight + 50 + "px";

    particle.style.opacity = Math.random();

    particle.style.background =
        "radial-gradient(circle,#FFD86B,#D4AF37)";

    particle.style.boxShadow =
        "0 0 15px rgba(212,175,55,.9)";

    const duration = Math.random() * 8 + 8;

    particle.style.animation =
        `goldFloat ${duration}s linear forwards`;

    particleContainer.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, duration * 1000);

}

/*=========================================
      CONTINUOUS PARTICLES
=========================================*/

setInterval(createParticle, 120);

/*=========================================
      EXTRA SPARKLES
=========================================*/

function createSparkle() {

    if (!particleContainer) return;

    const sparkle = document.createElement("div");

    sparkle.style.position = "absolute";

    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top =
        Math.random() * window.innerHeight + "px";

    sparkle.style.width = "3px";

    sparkle.style.height = "3px";

    sparkle.style.borderRadius = "50%";

    sparkle.style.background = "#FFD86B";

    sparkle.style.boxShadow =
        "0 0 18px #FFD86B";

    sparkle.style.opacity = ".9";

    sparkle.animate(

        [

            {

                transform: "scale(0)",

                opacity: 0

            },

            {

                transform: "scale(1.4)",

                opacity: 1

            },

            {

                transform: "scale(0)",

                opacity: 0

            }

        ],

        {

            duration: 2500,

            easing: "ease-in-out"

        }

    );

    particleContainer.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 2500);

}

setInterval(createSparkle, 350);

/*=========================================
        SHOOTING STAR
=========================================*/

function shootingStar() {

    if (!particleContainer) return;

    const star = document.createElement("div");

    star.style.position = "absolute";

    star.style.width = "180px";

    star.style.height = "2px";

    star.style.background =
        "linear-gradient(to right,#FFD86B,transparent)";

    star.style.top =
        Math.random() * 40 + "%";

    star.style.left = "-200px";

    star.style.transform = "rotate(-20deg)";

    star.style.boxShadow =
        "0 0 20px #FFD86B";

    particleContainer.appendChild(star);

    star.animate(

        [

            {

                transform:
                    "translateX(0) rotate(-20deg)",

                opacity: 1

            },

            {

                transform:
                    "translateX(1700px) rotate(-20deg)",

                opacity: 0

            }

        ],

        {

            duration: 2200,

            easing: "linear"

        }

    );

    setTimeout(() => {

        star.remove();

    }, 2200);

}

setInterval(shootingStar, 9000);

/*=========================================
        WINDOW RESIZE
=========================================*/

window.addEventListener("resize", () => {

    particleContainer.innerHTML = "";

});

/*=========================================
            READY
=========================================*/

console.log("✨ Golden Particles Ready");