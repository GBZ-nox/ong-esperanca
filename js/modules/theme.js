// Controla o tema e salva a preferência do usuário.
const CHAVE_TEMA = "tema";

export function configurarTema() {
    const botao = document.getElementById("botao-tema");
    if (!botao) return;

    if (localStorage.getItem(CHAVE_TEMA) === "escuro") {
        document.body.classList.add("modo-escuro");
    }

    atualizarBotao(botao);

    botao.addEventListener("click", function () {
        document.body.classList.toggle("modo-escuro");

        const escuro = document.body.classList.contains("modo-escuro");
        localStorage.setItem(CHAVE_TEMA, escuro ? "escuro" : "claro");

        atualizarBotao(botao);
    });
}

function atualizarBotao(botao) {
    const escuro = document.body.classList.contains("modo-escuro");
    botao.setAttribute("aria-pressed", escuro);

    if (escuro) {
        botao.setAttribute("aria-label", "Ativar modo claro");
        botao.textContent = "☀ Tema claro";
    } else {
        botao.setAttribute("aria-label", "Ativar modo escuro");
        botao.textContent = "◐ Tema escuro";
    }
}
