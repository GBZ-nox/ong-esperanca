import {
    paginaInicio,
    paginaProjetos,
    paginaCadastro,
    paginaSobre,
    paginaContato
} from "./modules/templates.js";

import { configurarFormulario } from "./modules/form.js";
import { configurarTema } from "./modules/theme.js";


const conteudoApp = document.getElementById("conteudo-app");
const botaoMenu = document.querySelector(".menu-toggle");
const navegacao = document.querySelector("nav");


function carregarPagina() {
    const rota = window.location.hash.replace("#", "") || "inicio";

    if (rota === "projetos") {
        conteudoApp.innerHTML = paginaProjetos();

    } else if (rota === "cadastro") {
        conteudoApp.innerHTML = paginaCadastro();
        configurarFormulario();

    } else if (rota === "sobre") {
        conteudoApp.innerHTML = paginaSobre();

    } else if (rota === "contato") {
        conteudoApp.innerHTML = paginaContato();

    } else {
        conteudoApp.innerHTML = paginaInicio();
    }

    fecharMenu();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


document.addEventListener("click", function (evento) {
    const link = evento.target.closest("a[data-rota]");

    if (!link) {
        return;
    }

    evento.preventDefault();

    const rota = link.getAttribute("data-rota");

    history.pushState(
        { rota: rota },
        "",
        "#" + rota
    );

    carregarPagina();
});


window.addEventListener("popstate", carregarPagina);


botaoMenu.addEventListener("click", function () {
    navegacao.classList.toggle("ativo");

    const aberto = navegacao.classList.contains("ativo");

    botaoMenu.textContent = aberto ? "✕" : "☰";
    botaoMenu.setAttribute("aria-expanded", aberto);
});


function fecharMenu() {
    navegacao.classList.remove("ativo");
    botaoMenu.textContent = "☰";
    botaoMenu.setAttribute("aria-expanded", "false");
}


if (!window.location.hash) {
    history.replaceState(
        { rota: "inicio" },
        "",
        "#inicio"
    );
}

configurarTema();
carregarPagina();
