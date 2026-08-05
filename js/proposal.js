/*=========================================
        FOREVER GAVESHA
          PROPOSAL.JS
=========================================*/

const yesBtn = document.getElementById("yesBtn");
const foreverBtn = document.getElementById("foreverBtn");
const proposalCard = document.querySelector(".proposal-card");

/*=========================================
        HEART RAIN
=========================================*/

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-50px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999999";
    heart.style.opacity = ".9";

    document.body.appendChild(heart);

    heart.animate(

        [

            {

                transform: "translateY(0px) rotate(0deg)",

                opacity: 1

            },

            {

                transform:
                    `translateY(${window.innerHeight + 120}px)
                     rotate(${360 + Math.random() * 360}deg)`,

                opacity: 0

            }

        ],

        {

            duration: 4500,

            easing: "linear"

        }

    );

    setTimeout(() => {

        heart.remove();

    }, 4500);

}


/*=========================================
        HEART SHOWER
=========================================*/

function heartRain() {

    let total = 0;

    const rain = setInterval(() => {

        createHeart();

        total++;

        if (total >= 120) {

            clearInterval(rain);

        }

    }, 70);

}


/*=========================================
        GOLD CONFETTI
=========================================*/

function confetti() {

    for (let i = 0; i < 180; i++) {

        const piece = document.createElement("div");

        piece.style.position = "fixed";
        piece.style.width = "8px";
        piece.style.height = "14px";
        piece.style.background =
            Math.random() > .5 ? "#D4AF37" : "#FFD86B";

        piece.style.left =
            Math.random() * window.innerWidth + "px";

        piece.style.top = "-20px";

        piece.style.zIndex = "999999";

        document.body.appendChild(piece);

        piece.animate(

            [

                {

                    transform:
                        "translateY(0px) rotate(0deg)",

                    opacity: 1

                },

                {

                    transform:
                        `translateY(${window.innerHeight + 100}px)
                         rotate(${720 + Math.random() * 720}deg)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    3000 + Math.random() * 2000,

                easing: "linear"

            }

        );

        setTimeout(() => {

            piece.remove();

        }, 5200);

    }

}


/*=========================================
        YES BUTTON
=========================================*/

if (yesBtn) {

    yesBtn.addEventListener("click", () => {

        confetti();

        heartRain();

        if (proposalCard) {

            proposalCard.animate(

                [

                    {

                        transform: "scale(1)"

                    },

                    {

                        transform: "scale(1.05)"

                    },

                    {

                        transform: "scale(1)"

                    }

                ],

                {

                    duration: 1000

                }

            );

        }

        setTimeout(() => {

            alert("❤️ Yaaay!! Forever Begins Today ❤️");

        }, 800);

    });

}


/*=========================================
        FOREVER BUTTON
=========================================*/

if (foreverBtn) {

    foreverBtn.addEventListener("click", () => {

        confetti();

        heartRain();

        document.body.animate(

            [

                {

                    filter: "brightness(1)"

                },

                {

                    filter: "brightness(1.4)"

                },

                {

                    filter: "brightness(1)"

                }

            ],

            {

                duration: 1400

            }

        );

        setTimeout(() => {

            alert("💍 FOREVER ❤️");

        }, 900);

    });

}


/*=========================================
        AUTO GLOW
=========================================*/

if (proposalCard) {

    setInterval(() => {

        proposalCard.animate(

            [

                {

                    boxShadow:
                        "0 0 20px rgba(212,175,55,.20)"

                },

                {

                    boxShadow:
                        "0 0 70px rgba(212,175,55,.60)"

                },

                {

                    boxShadow:
                        "0 0 20px rgba(212,175,55,.20)"

                }

            ],

            {

                duration: 2500

            }

        );

    }, 2500);

}


/*=========================================
        READY
=========================================*/

console.log("💍 Proposal Ready");