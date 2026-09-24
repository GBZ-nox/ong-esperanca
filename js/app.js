// ============================================================
// ONG ESPERANÇA - SPA
// Projeto simples utilizando JavaScript, DOM e templates
// ============================================================

const conteudoApp = document.getElementById("conteudo-app");
const botaoMenu = document.querySelector(".menu-toggle");
const navegacao = document.querySelector("nav");


// ============================================================
// DADOS DOS PROJETOS
// ============================================================

const projetos = [
    {
        titulo: "Educação para Todos",
        descricao: "Apoio escolar e atividades educativas para crianças e jovens.",
        imagem: "../images/educacao.jpg"
    },
    {
        titulo: "Cestas de Esperança",
        descricao: "Arrecadação de alimentos para famílias em situação de necessidade.",
        imagem: "../images/doacoes.jpg"
    },
    {
        titulo: "Amigos de Quatro Patas",
        descricao: "Ações de cuidado e apoio a animais em situação de abandono.",
        imagem: "../images/animais.jpg"
    }
];


// ============================================================
// TEMPLATE DOS PROJETOS
// ============================================================

function criarProjetos() {
    return projetos.map(function (projeto) {
        return `
            <article class="projeto-card">
                <img src="${projeto.imagem}"
                     alt="${projeto.titulo}"
                     class="projeto-imagem">

                <div class="projeto-conteudo">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <a href="#cadastro"
                       data-rota="cadastro"
                       class="link-projeto">
                        Saiba mais →
                    </a>
                </div>
            </article>
        `;
    }).join("");
}


// ============================================================
// PÁGINA INICIAL
// ============================================================

function paginaInicio() {
    return `
        <section class="hero">
            <div class="hero-texto">
                <h2>Pequenas atitudes,<br>grandes mudanças</h2>

                <p>
                    Acreditamos no poder das pessoas para construir
                    uma comunidade mais justa, solidária e com mais oportunidades.
                </p>

                <a href="#projetos"
                   data-rota="projetos"
                   class="botao-link">
                    Conheça nossos projetos
                </a>
            </div>

            <img src="../images/hero.jpg"
                 alt="Pessoa segurando uma muda de planta"
                 class="hero-imagem">
        </section>

        <section class="secao-projetos">
            <h2>Nossos Projetos</h2>

            <div class="grid-projetos">
                ${criarProjetos()}
            </div>
        </section>

        <section class="chamada">
            <h2>Faça parte dessa história!</h2>

            <p>
                Seja voluntário, doe ou compartilhe.
                Toda ajuda faz a diferença.
            </p>

            <div class="chamada-botoes">
                <a href="#cadastro"
                   data-rota="cadastro"
                   class="botao-link">
                    Quero ser voluntário
                </a>

                <a href="#contato"
                   data-rota="contato"
                   class="botao-link botao-claro">
                    Quero doar
                </a>
            </div>
        </section>
    `;
}


// ============================================================
// PÁGINA DE PROJETOS
// ============================================================

function paginaProjetos() {
    return `
        <section class="pagina-intro">
            <h2>Projetos da ONG Esperança</h2>

            <p>
                Conheça algumas das ações realizadas pela ONG
                e veja como você também pode participar.
            </p>
        </section>

        <div class="grid-projetos">
            ${criarProjetos()}
        </div>
    `;
}


// ============================================================
// PÁGINA DE CADASTRO
// ============================================================

function paginaCadastro() {
    return `
        <section class="pagina-intro">
            <h2>Cadastro de Voluntário</h2>

            <p>
                Preencha seus dados para participar das ações
                e projetos da ONG Esperança.
            </p>

            <div class="alerta alerta-info">
                Os campos marcados com * são obrigatórios.
            </div>

            <div id="alerta-erro"
                 class="alerta alerta-erro"
                 style="display: none;">
                Verifique os campos obrigatórios.
            </div>
        </section>

        <form id="form-cadastro">

            <fieldset>
                <legend>Dados pessoais</legend>

                <div class="form-grid">

                    <div class="campo campo-nome">
                        <label for="nome">Nome completo *</label>
                        <input type="text"
                               id="nome"
                               name="nome"
                               placeholder="Digite seu nome"
                               required>
                    </div>

                    <div class="campo campo-cpf">
                        <label for="cpf">CPF *</label>
                        <input type="text"
                               id="cpf"
                               name="cpf"
                               placeholder="000.000.000-00"
                               pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                               required>
                    </div>

                    <div class="campo campo-nascimento">
                        <label for="nascimento">Data de nascimento *</label>
                        <input type="date"
                               id="nascimento"
                               name="nascimento"
                               required>
                    </div>

                </div>
            </fieldset>

            <fieldset>
                <legend>Contato</legend>

                <div class="form-grid">

                    <div class="campo campo-email">
                        <label for="email">E-mail *</label>
                        <input type="email"
                               id="email"
                               name="email"
                               placeholder="exemplo@email.com"
                               required>
                    </div>

                    <div class="campo campo-telefone">
                        <label for="telefone">Telefone *</label>
                        <input type="tel"
                               id="telefone"
                               name="telefone"
                               placeholder="(15) 99999-9999"
                               pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                               required>
                    </div>

                </div>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <div class="form-grid">

                    <div class="campo campo-endereco">
                        <label for="endereco">Endereço *</label>
                        <input type="text"
                               id="endereco"
                               name="endereco"
                               placeholder="Rua, número e bairro"
                               required>
                    </div>

                    <div class="campo campo-cep">
                        <label for="cep">CEP *</label>
                        <input type="text"
                               id="cep"
                               name="cep"
                               placeholder="00000-000"
                               pattern="[0-9]{5}-[0-9]{3}"
                               required>
                    </div>

                    <div class="campo campo-cidade">
                        <label for="cidade">Cidade *</label>
                        <input type="text"
                               id="cidade"
                               name="cidade"
                               placeholder="Digite sua cidade"
                               required>
                    </div>

                    <div class="campo campo-estado">
                        <label for="estado">Estado *</label>
                        <input type="text"
                               id="estado"
                               name="estado"
                               maxlength="2"
                               placeholder="SP"
                               required>
                    </div>

                </div>
            </fieldset>

            <button type="submit">Cadastrar</button>
        </form>

        <section class="historico-cadastros">
            <h2>Cadastros salvos</h2>
            <p>
                Esta lista é recuperada do localStorage do navegador.
            </p>

            <div id="lista-cadastros"></div>
        </section>

        <div id="toast-sucesso"
             class="toast toast-sucesso">
            <div>
                <strong>Cadastro realizado!</strong>
                <p>Os dados foram salvos neste navegador.</p>
            </div>

            <button type="button"
                    id="fechar-toast"
                    aria-label="Fechar">
                ×
            </button>
        </div>
    `;
}

// ============================================================
// PÁGINA SOBRE
// ============================================================

function paginaSobre() {
    return `
        <section class="pagina-intro">
            <h2>Sobre a ONG Esperança</h2>

            <p>
                A ONG Esperança trabalha com projetos sociais,
                ações solidárias e atividades voltadas para a comunidade.
            </p>
        </section>

        <section class="sobre-grid">
            <article class="card">
                <h3>Nossa missão</h3>
                <p>
                    Ajudar pessoas, promover oportunidades
                    e incentivar a solidariedade.
                </p>
            </article>

            <article class="card">
                <h3>Nossos valores</h3>
                <p>
                    Respeito, responsabilidade, inclusão,
                    solidariedade e transparência.
                </p>
            </article>
        </section>
    `;
}


// ============================================================
// PÁGINA DE CONTATO
// ============================================================

function paginaContato() {
    return `
        <section class="pagina-intro">
            <h2>Entre em Contato</h2>

            <p>
                Entre em contato para saber mais sobre doações,
                voluntariado e projetos.
            </p>
        </section>

        <section class="card contato-card">
            <p><strong>Telefone:</strong> (15) 99999-9999</p>
            <p><strong>E-mail:</strong> contato@ong.org.br</p>
            <p><strong>Endereço:</strong> Rua Principal, 100 - Itapeva/SP</p>
        </section>
    `;
}


// ============================================================
// ROTEAMENTO DA SPA
// ============================================================

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


// ============================================================
// INTERCEPTAÇÃO DOS LINKS
// ============================================================

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


// ============================================================
// MENU PARA CELULAR
// ============================================================

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


// ============================================================
// FORMULÁRIO E MENSAGEM DE SUCESSO
// ============================================================

function configurarFormulario() {
    const formulario = document.getElementById("form-cadastro");
    const alertaErro = document.getElementById("alerta-erro");

    // Mostra os cadastros que já estavam salvos ao abrir a página.
    mostrarCadastros();

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        if (!formulario.checkValidity()) {
            alertaErro.style.display = "block";
            formulario.reportValidity();

            // SweetAlert2 mostra uma mensagem de erro.
            Swal.fire({
                title: "Verifique o formulário",
                text: "Existem campos vazios ou preenchidos incorretamente.",
                icon: "error",
                confirmButtonText: "OK"
            });

            return;
        }

        const novoCadastro = {
            nome: document.getElementById("nome").value,
            cpf: document.getElementById("cpf").value,
            nascimento: document.getElementById("nascimento").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            endereco: document.getElementById("endereco").value,
            cep: document.getElementById("cep").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value
        };

        let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

        cadastros.push(novoCadastro);

        localStorage.setItem("cadastros", JSON.stringify(cadastros));

        alertaErro.style.display = "none";
        formulario.reset();

        mostrarCadastros();

        // SweetAlert2 mostra a confirmação do cadastro.
        Swal.fire({
            title: "Cadastro realizado!",
            text: "Os dados foram salvos neste navegador.",
            icon: "success",
            confirmButtonText: "OK"
        });
    });

    formulario.addEventListener("input", function () {
        if (formulario.checkValidity()) {
            alertaErro.style.display = "none";
        }
    });
}

// ============================================================
// LOCALSTORAGE
// ============================================================

function mostrarCadastros() {
    const lista = document.getElementById("lista-cadastros");

    if (!lista) {
        return;
    }

    // getItem recupera o texto salvo e JSON.parse transforma
    // esse texto novamente em um array JavaScript.
    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

    if (cadastros.length === 0) {
        lista.innerHTML = `
            <p class="sem-cadastros">
                Nenhum cadastro foi salvo neste navegador.
            </p>
        `;
        return;
    }

    lista.innerHTML = cadastros.map(function (cadastro, indice) {
        return `
            <article class="cadastro-salvo">
                <div>
                    <strong>${cadastro.nome}</strong>
                    <p>${cadastro.email} - ${cadastro.cidade}/${cadastro.estado}</p>
                </div>

                <button type="button"
                        class="botao-remover"
                        data-indice="${indice}">
                    Remover
                </button>
            </article>
        `;
    }).join("");

    const botoesRemover = document.querySelectorAll(".botao-remover");

    botoesRemover.forEach(function (botao) {
        botao.addEventListener("click", function () {
            removerCadastro(Number(botao.dataset.indice));
        });
    });
}


function removerCadastro(indice) {
    Swal.fire({
        title: "Remover cadastro?",
        text: "O cadastro será apagado deste navegador.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, remover",
        cancelButtonText: "Cancelar"
    }).then(function (resultado) {

        if (resultado.isConfirmed) {
            let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

            cadastros.splice(indice, 1);

            localStorage.setItem("cadastros", JSON.stringify(cadastros));

            mostrarCadastros();

            Swal.fire({
                title: "Cadastro removido!",
                icon: "success",
                confirmButtonText: "OK"
            });
        }
    });
}

// ============================================================
// INÍCIO DA APLICAÇÃO
// ============================================================

if (!window.location.hash) {
    history.replaceState(
        { rota: "inicio" },
        "",
        "#inicio"
    );
}

carregarPagina();
