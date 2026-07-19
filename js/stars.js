const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<200;i++){

    stars.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        s:Math.random()*0.5+0.2

    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    stars.forEach(star=>{

        ctx.beginPath();
        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
        ctx.fill();

        star.y+=star.s;

        if(star.y>canvas.height){

            star.y=0;
            star.x=Math.random()*canvas.width;

        }

    });

    requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

});
