function gerarTemplates() {
    var versiculos = document.getElementById('versiculos').value;
    var outputDiv = document.getElementById('output');

    // Verifica se o campo dos versículos não está vazio
    if (versiculos.trim() === '') {
        alert('Por favor, insira pelo menos um versículo bíblico.');
        return;
    }

    // Separa os versículos com base em duas quebras de linha
    var versiculosArray = versiculos.split('\n\n');
    var templateHTML = '';

    // Gera o HTML para cada versículo
    for (var i = 0; i < versiculosArray.length; i++) {
        var versiculo = versiculosArray[i].trim();
        if (versiculo !== '') {
            // Divide o versículo em linhas
            var linhas = versiculo.split('\n');

            // O primeiro versículo é o título
            var titulo = linhas[0].trim();

            // O restante é o texto do versículo
            var texto = linhas.slice(1).join('<br>');

            templateHTML += '<div class="verse-container">';
            templateHTML += '<p class="verse-title">' + titulo + '</p>';
            templateHTML += '<p class="verse-text">' + texto + '</p>';
            templateHTML += '</div>';
        }
    }

    // Adiciona os templates ao elemento de saída
    outputDiv.innerHTML = templateHTML;
}
