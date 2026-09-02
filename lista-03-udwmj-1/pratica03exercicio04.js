function calcularArea() {
    const raio = Number(document.getElementById("raio").value);
    const resultado = document.getElementById("resultado");

    if (raio <= 0 || isNaN(raio)) {
        resultado.textContent = "Digite um raio válido.";
        return;
    }

    const area = Math.PI * Math.pow(raio, 2);

    resultado.textContent = `A área do círculo é ${area.toFixed(2)}.`;
}