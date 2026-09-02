function calcularVolume() {
    const raio = Number(document.getElementById("raio").value);
    const resultado = document.getElementById("resultado");

    if (raio <= 0 || isNaN(raio)) {
        resultado.textContent = "Digite um raio válido.";
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

    resultado.textContent = `O volume da esfera é ${volume.toFixed(2)}.`;
}