function verificaChute(chute) {
    const numero = +chute;

    if (Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>';
        return;
    }

    if (numero < menorValor || numero > maiorValor) {
        elementoChute.innerHTML += `<div>Valor inválido!O número secreto precisa estar entre ${menorValor} e ${maiorValor}.</div>`;
        return;
    }

    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroAleatorio}</h3>
            <button id="jogar-novamente" class="btn-jogar">JOGAR NOVAMENTE</button>
        `;
    } else if (numero < numeroAleatorio) {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>';
    } else {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>';
    }
}

document.body.addEventListener('click', e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload();
    }
});
