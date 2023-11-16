function gerarTemplate() {
    var versiculo = document.getElementById('versiculo').value;
    var outputDiv = document.getElementById('output');

    // Verifica se o campo do versículo não está vazio
    if (versiculo.trim() === '') {
        alert('Por favor, insira um versículo bíblico.');
        return;
    }

    // Gera o HTML para o template
    var templateHTML = '<div style="border: 1px solid #000; padding: 10px; margin-bottom: 10px;">';
    templateHTML += '<p style="font-size: 16px; font-weight: bold;">Versículo Bíblico:</p>';
    templateHTML += '<p style="font-size: 14px;">' + versiculo + '</p>';
    templateHTML += '</div>';

    // Adiciona o template ao elemento de saída
    outputDiv.innerHTML = templateHTML;
}
