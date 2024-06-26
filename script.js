let isTemplateGenerated = false;

function gerarTemplates() {
    var versiculos = document.getElementById('versiculos').value;
    var outputDiv = document.getElementById('output');
    var messageDiv = document.getElementById('message');

    if (versiculos.trim() === '') {
        showMessage('Por favor, insira pelo menos um versículo bíblico.');
        return;
    }

    isTemplateGenerated = true;
    messageDiv.style.display = 'none'; // Esconde qualquer mensagem existente

    var versiculosArray = versiculos.split('\n\n');
    var templateHTML = '';

    for (var i = 0; i < versiculosArray.length; i++) {
        var versiculo = versiculosArray[i].trim();
        if (versiculo !== '') {
            var linhas = versiculo.split('\n');
            var titulo = linhas[0].trim();
            var texto = linhas.slice(1).join('<br>');

            templateHTML += '<div class="verse-container">';
            templateHTML += '<p class="verse-title">' + titulo + '</p>';
            templateHTML += '<p class="verse-text">' + texto + '</p>';
            templateHTML += '<div class="instagram-link">';
            templateHTML += '<i class="fab fa-instagram" style="color: #01BAD2; margin-right: 5px;"></i>';
            templateHTML += '<a href="https://www.instagram.com/mis.pera/" target="_blank" style="color: #01BAD2; text-decoration: none; margin-left: 5px;">@mis.pera</a>';
            templateHTML += '</div>';
            templateHTML += '</div>';
        }
    }

    outputDiv.innerHTML = templateHTML;

    var link = document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"]');
    link.parentNode.removeChild(link);
    var newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css';
    document.head.appendChild(newLink);

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                var icons = document.querySelectorAll('.fab');
                var allLoaded = Array.prototype.every.call(icons, function(icon) {
                    return icon.complete;
                });

                if (allLoaded) {
                    observer.disconnect();
                    setTimeout(function() {
                        window.print();
                    }, 500); // Atraso de 500ms para garantir que os ícones sejam carregados
                }
            }
        });
    });

    observer.observe(outputDiv, { childList: true, subtree: true });
}

function showMessage(message) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
}

function imprimir() {
    var outputDiv = document.getElementById('output');
    var versiculos = document.getElementById('versiculos').value;

    if (outputDiv.innerHTML.trim() === '') {
        showMessage('Por favor, gere os templates antes de imprimir.');
        return;
    }

    if (!isTemplateGenerated || versiculos.trim() === '') {
        showMessage('Por favor, gere os templates antes de imprimir.');
        return;
    }

    document.querySelectorAll('.print-hidden').forEach(element => {
        element.classList.add('hidden-print');
    });

    window.print();

    document.querySelectorAll('.print-hidden').forEach(element => {
        element.classList.remove('hidden-print');
    });
}

document.getElementById('versiculos').addEventListener('input', function() {
    isTemplateGenerated = false;
    showMessage('O conteúdo foi alterado. Por favor, clique em "Gerar Templates" novamente para atualizar.');
});
