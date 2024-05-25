document.addEventListener('DOMContentLoaded', (event) => {
    var clicks = 0;
    var clicksNecesarios = 1;
    const codigosArrays = ["codigo1", "codigo2", "codigo3"];
    var tiempo = 25;
    var fps = 60;

    var clickerImage = document.getElementById('clicker-image');
    if (clickerImage) {
        clickerImage.addEventListener('click', clic);
    }

    function clic() {
        if (tiempo > 0) {
            clicks++;
            render();
        }
    }

    function render() {
        document.getElementById("contClicks").innerHTML = clicks;
    }

    function temporizador() {
        var tempElement = document.getElementById("temporizador");
        if (tempElement) {
            tempElement.innerHTML = tiempo;
            if (tiempo <= 0) {
                alert('Se acabo el tiempo');
            } else {
                tiempo--;
                setTimeout(temporizador, 1000);
            }
        }
    }

    function mostrarCodigoSiEsNecesario() {
        if (clicks >= clicksNecesarios && tiempo == 0) {
            const elementoAleatorio = codigosArrays[Math.floor(Math.random() * codigosArrays.length)];
            document.getElementById("codigos").innerHTML = elementoAleatorio;
            document.getElementById("codigoContenedor").style.display = "block";
        }
    }

    temporizador();

    const intervalo = setInterval(function () {
        if (clicks >= clicksNecesarios && tiempo == 0) {
            mostrarCodigoSiEsNecesario();
            clearInterval(intervalo);
        }
    }, 1000 / fps);
});

