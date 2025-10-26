// Simples alternador de tema, baseado no snippet do usuário.
// Seleciona os elementos do DOM
const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");
const body = document.body;

// Aplica tema (claro|escuro) e atualiza textos
function aplicarTema(tema) {
    if (!body) return;
    body.classList.remove('claro', 'escuro');
    body.classList.add(tema);
    // título textual para leitores de tela e para informar o usuário
    if (titulo) titulo.textContent = tema === 'escuro' ? 'Tema Escuro 🌙' : 'Tema Claro ☀️';
    // botão mostra só o ícone (visual simples); aria-label mantém acessibilidade
    if (botao) botao.textContent = tema === 'escuro' ? '☀️' : '🌙';
}

// Inicialização simples: tenta ler preferência, senão define claro
(function init() {
    // Inicialização sem persistência: respeita classe já presente no body, senão aplica 'claro'
    if (body.classList.contains('escuro')) {
        aplicarTema('escuro');
    } else {
        aplicarTema('claro');
    }
})();

// Evento de clique: alterna entre claro e escuro (como no snippet fornecido)
if (botao) {
    botao.addEventListener('click', function () {
        if (body.classList.contains('claro')) {
            // troca para escuro
            aplicarTema('escuro');
        } else {
            // troca para claro
            aplicarTema('claro');
        }
    });
}

