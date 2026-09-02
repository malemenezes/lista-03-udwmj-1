function calcularJuros() {
    const capital = Number(document.getElementById("capital").value);
    const taxa = Number(document.getElementById("taxa").value);
    const tempo = Number(document.getElementById("tempo").value);

    const resultado = document.getElementById("resultado");

    if (capital <= 0 || isNaN(capital)) {
        resultado.textContent = "Digite um capital inicial válido.";
        return;
    }

    if (taxa < 0 || isNaN(taxa)) {
        resultado.textContent = "Digite uma taxa de juros válida.";
        return;
    }

    if (tempo <= 0 || isNaN(tempo)) {
        resultado.textContent = "Digite um tempo válido.";
        return;
    }

    const taxaDecimal = taxa / 100;

    const montante = capital * Math.pow(1 + taxaDecimal, tempo);

    resultado.textContent =
        `O montante final é R$ ${montante.toFixed(2)}.`;
}