console.log("coucou");

// 1.Créer l'élément canvas et l'afficher
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

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
function draw() {
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI*2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
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