console.log("coucou");

// 1.Créer l'élément canvas et l'afficher
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

// Carré rouge
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// Rond vert
// ctx.beginPath();
// ctx.arc(340, 260, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath()

// Rectangle
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();


// 2.Bouger la boule
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() { 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();    
    x += dx; // direction
    y += dy;
}

setInterval(draw, 10);


// 3.Rebondir sur les murs
// 4.Contrôles clavier
// 5.Jeu terminé
// 6.Construire le mur de briques
// 7.Détection des collisions
// 8.Afficher le score et gagner
// 9.Contrôles souris
// 10.Finir
