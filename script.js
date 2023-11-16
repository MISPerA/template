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
        templateHTML += '<div class="instagram-link">';
        templateHTML += '<i class="fab fa-instagram" style="color: white;"></i>; // Ícone do Instagram
        templateHTML += '<a href="https://www.instagram.com/mis.pera/" target="_blank" style="color: #01BAD2; text-decoration: none; margin-left: 5px;">@mis.pera</a>';
        templateHTML += '</div>';
        templateHTML += '</div>';
    }
}

    // Adiciona os templates ao elemento de saída
    outputDiv.innerHTML = templateHTML;
}

function imprimir() {
    var versiculos = document.getElementById('versiculos').value;
    var outputDiv = document.getElementById('output');

    // Verifica se o campo dos versículos não está vazio
    if (versiculos.trim() === '') {
        alert('Por favor, insira pelo menos um versículo bíblico.');
        return;
    }
    
    var conteudo = document.getElementById('output').innerHTML;
    // Cria uma nova janela para imprimir
    var janelaImpressao = window.open('', '_blank');
    janelaImpressao.document.write('<html><head><title>Imprimir</title>');
    janelaImpressao.document.write('<link rel="stylesheet" href="styles.css">');
    janelaImpressao.document.write('</head><body>');

    // Adiciona os templates ao corpo da página de impressão
    janelaImpressao.document.write(conteudo);

    janelaImpressao.document.write('</body></html>');
    janelaImpressao.document.close();

    // Agora, em vez de chamar print na nova janela, chama na janela atual
    janelaImpressao.print();
}
