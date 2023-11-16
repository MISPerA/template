function gerarTemplates() {
    var versiculos = document.getElementById('versiculos').value;
    var outputDiv = document.getElementById('output');

    // Verifica se o campo dos versículos não está vazio
    if (versiculos.trim() === '') {
        alert('Por favor, insira pelo menos um versículo bíblico.');
        return;
    }

    // Separa os versículos com base nas quebras de linha
    var versiculosArray = versiculos.split('\n');
    var templateHTML = '';

    // Gera o HTML para cada versículo
    for (var i = 0; i < versiculosArray.length; i++) {
        var versiculo = versiculosArray[i].trim();
        if (versiculo !== '') {
            templateHTML += '<div style="border: 1px solid #000; padding: 10px; margin-bottom: 10px;">';
            templateHTML += '<p style="font-size: 16px; font-weight: bold;">Versículo Bíblico:</p>';
            templateHTML += '<p style="font-size: 14px;">' + versiculo + '</p>';
            templateHTML += '</div>';
        }
    }

    // Adiciona os templates ao elemento de saída
    outputDiv.innerHTML = templateHTML;
}

function imprimir() {
    var conteudo = document.getElementById('output').innerHTML;
    var janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write('<html><head><title>Imprimir</title></head><body>' + conteudo + '</body></html>');
    janelaImpressao.document.close();
    janelaImpressao.print();
}
