

const intro = document.querySelector(".intro");
const sobre = document.querySelector(".sobre");
const cielo = document.querySelector(".cielo");
const corazon = document.querySelector(".corazon");
const carta = document.querySelector(".carta");



function crearEstrellas() {

    const cantidad = 120;

    for (let i = 0; i < cantidad; i++) {

        const estrella = document.createElement("span");

        estrella.textContent = "✦";


        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.top = Math.random() * 100 + "%";


        estrella.style.fontSize = Math.random() * (5 - 2) + 2 + "px";


        estrella.style.opacity = Math.random() * 0.5 + 0.5;

        estrella.style.animationDuration = Math.random() * 2 + 1 + "s";

   
        estrella.style.animationDelay = Math.random() * 3 + "s";

    
        const colores = [
            "white",
            "#FFF8DC",
            "#E6F7FF",
            "#F8F8FF"
        ];

        estrella.style.color = colores[Math.floor(Math.random() * colores.length)];

        // Aparecen poco a poco
        setTimeout(() => {

            cielo.appendChild(estrella);

        }, i * 20);

    }

}


function estrellaFugaz() {

    const fugaz = document.createElement("div");

    fugaz.classList.add("estrella-fugaz");

    fugaz.style.top = Math.random() * 35 + "%";

    fugaz.style.left = "-15%";

    cielo.appendChild(fugaz);

    setTimeout(() => {

        fugaz.remove();

    }, 2500);

}

setTimeout(() => {

    estrellaFugaz();

}, 6000);

// Después una cada 15 segundos
setInterval(() => {

    estrellaFugaz();

}, 15000);



sobre.addEventListener("click", () => {

    sobre.classList.add("desaparecer");

    setTimeout(() => {

        intro.style.display = "none";

        cielo.classList.remove("oculto");

        crearEstrellas();

    }, 1500);

});



corazon.addEventListener("click", () => {

    if (carta.style.display === "block") {

        carta.style.display = "none";

    } else {

        carta.style.display = "block";

    }

});
