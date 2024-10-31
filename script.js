function converter() {
    const real = parseFloat(document.getElementById('real').value);
    const taxaConversao = 5.25; // Taxa de conversão fictícia
    const resultado = real / taxaConversao;

    document.getElementById('resultado').innerText = 
        `Valor em Dólares: $${resultado.toFixed(2)}`;
}
