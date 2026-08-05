/*=========================================
        FOREVER GAVESHA
            MUSIC.JS
=========================================*/

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicIcon = musicBtn ? musicBtn.querySelector("i") : null;

let musicStarted = false;


/*=========================================
        START MUSIC
=========================================*/

function startMusic() {

    if (!music || musicStarted) return;

    music.volume = 0.35;

    music.play()
        .then(() => {

            musicStarted = true;

            if (musicIcon) {

                musicIcon.className = "fa-solid fa-pause";

            }

        })
        .catch(() => {});

}


/*=========================================
        FIRST USER INTERACTION
=========================================*/

["click", "touchstart", "keydown"].forEach(event => {

    document.addEventListener(event, startMusic, {

        once: true

    });

});


/*=========================================
        PLAY / PAUSE
=========================================*/

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (!music) return;

        if (music.paused) {

            music.play();

            if (musicIcon) {

                musicIcon.className = "fa-solid fa-pause";

            }

        } else {

            music.pause();

            if (musicIcon) {

                musicIcon.className = "fa-solid fa-music";

            }

        }

    });

}


/*=========================================
        FADE IN MUSIC
=========================================*/

function fadeInMusic() {

    if (!music) return;

    music.volume = 0;

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.02;

        if (volume >= 0.35) {

            volume = 0.35;

            clearInterval(fade);

        }

        music.volume = volume;

    }, 150);

}

document.addEventListener("click", () => {

    if (!musicStarted) {

        fadeInMusic();

    }

}, {

    once: true

});


/*=========================================
        ICON ANIMATION
=========================================*/

if (musicBtn) {

    setInterval(() => {

        if (!music || music.paused) return;

        musicBtn.animate(

            [

                {

                    transform: "scale(1)"

                },

                {

                    transform: "scale(1.15)"

                },

                {

                    transform: "scale(1)"

                }

            ],

            {

                duration: 1200

            }

        );

    }, 1300);

}


/*=========================================
        MUSIC BUTTON STYLE
=========================================*/

if (musicBtn) {

    musicBtn.style.position = "fixed";

    musicBtn.style.right = "25px";

    musicBtn.style.bottom = "25px";

    musicBtn.style.width = "60px";

    musicBtn.style.height = "60px";

    musicBtn.style.borderRadius = "50%";

    musicBtn.style.background =
        "linear-gradient(45deg,#D4AF37,#FFD86B)";

    musicBtn.style.color = "#000";

    musicBtn.style.border = "none";

    musicBtn.style.fontSize = "22px";

    musicBtn.style.cursor = "pointer";

    musicBtn.style.zIndex = "9999";

    musicBtn.style.boxShadow =
        "0 0 25px rgba(212,175,55,.45)";

}


/*=========================================
        KEEP LOOP SAFE
=========================================*/

if (music) {

    music.addEventListener("ended", () => {

        music.currentTime = 0;

        music.play();

    });

}


/*=========================================
        READY
=========================================*/

console.log("🎵 Music Player Ready");