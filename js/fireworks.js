/*=========================================
        FOREVER GAVESHA
          FIREWORKS.JS
=========================================*/

const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

const fireworks = [];
const particles = [];

/*=========================================
        FIREWORK CLASS
=========================================*/

class Firework {

    constructor(x, y, targetY) {

        this.x = x;
        this.y = y;

        this.targetY = targetY;

        this.speed = 6 + Math.random() * 3;

        this.color = `hsl(${40 + Math.random()*15},100%,65%)`;

    }

    update() {

        this.y -= this.speed;

        if (this.y <= this.targetY) {

            explode(this.x, this.y, this.color);

            return true;

        }

        return false;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);

        ctx.fillStyle = this.color;

        ctx.fill();

    }

}

/*=========================================
        PARTICLE
=========================================*/

class Particle {

    constructor(x, y, color) {

        this.x = x;
        this.y = y;

        this.color = color;

        this.angle = Math.random() * Math.PI * 2;

        this.speed = Math.random() * 6 + 2;

        this.life = 100;

        this.size = Math.random() * 3 + 2;

    }

    update() {

        this.x += Math.cos(this.angle) * this.speed;

        this.y += Math.sin(this.angle) * this.speed;

        this.speed *= .97;

        this.life--;

    }

    draw() {

        ctx.globalAlpha = this.life / 100;

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = this.color;

        ctx.fill();

        ctx.globalAlpha = 1;

    }

}

/*=========================================
        EXPLOSION
=========================================*/

function explode(x, y, color) {

    for (let i = 0; i < 80; i++) {

        particles.push(new Particle(x, y, color));

    }

}

/*=========================================
        CREATE FIREWORK
=========================================*/

function createFirework() {

    fireworks.push(

        new Firework(

            Math.random() * canvas.width,

            canvas.height,

            120 + Math.random() * 250

        )

    );

}

/*=========================================
        HEART FIREWORK
=========================================*/

function createHeartExplosion(x, y) {

    for (let i = 0; i < 120; i++) {

        const t = i / 120 * Math.PI * 2;

        const hx = 16 * Math.pow(Math.sin(t),3);

        const hy = -(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));

        const p = new Particle(x, y, "#ff4d88");

        p.x = x + hx * 7;

        p.y = y + hy * 7;

        p.speed = 2;

        particles.push(p);

    }

}

/*=========================================
        AUTO HEARTS
=========================================*/

setInterval(() => {

    createHeartExplosion(

        Math.random() * canvas.width,

        150 + Math.random() * 200

    );

}, 8000);

/*=========================================
        LOOP
=========================================*/

function animate() {

    requestAnimationFrame(animate);

    ctx.fillStyle = "rgba(0,0,0,.18)";

    ctx.fillRect(0,0,canvas.width,canvas.height);

    for(let i=fireworks.length-1;i>=0;i--){

        fireworks[i].draw();

        if(fireworks[i].update()){

            fireworks.splice(i,1);

        }

    }

    for(let i=particles.length-1;i>=0;i--){

        particles[i].draw();

        particles[i].update();

        if(particles[i].life<=0){

            particles.splice(i,1);

        }

    }

}

animate();

/*=========================================
        AUTO FIREWORKS
=========================================*/

setInterval(createFirework,900);

/*=========================================
        PROPOSAL BONUS
=========================================*/

const yesButton=document.getElementById("yesBtn");

if(yesButton){

yesButton.addEventListener("click",()=>{

for(let i=0;i<12;i++){

setTimeout(()=>{

createFirework();

},i*180);

}

});

}

const foreverButton=document.getElementById("foreverBtn");

if(foreverButton){

foreverButton.addEventListener("click",()=>{

for(let i=0;i<20;i++){

setTimeout(()=>{

createFirework();

},i*150);

}

});

}

/*=========================================
        READY
=========================================*/

console.log("🎆 Fireworks Ready");