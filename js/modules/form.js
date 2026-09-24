import {
    obterCadastros,
    adicionarCadastro,
    excluirCadastro
} from "./storage.js";

import {
    mostrarErro,
    mostrarSucesso,
    confirmarRemocao
} from "./alerts.js";


export function configurarFormulario() {
    const formulario = document.getElementById("form-cadastro");
    const alertaErro = document.getElementById("alerta-erro");

    mostrarCadastros();

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const endereco = document.getElementById("endereco").value.trim();
        const cidade = document.getElementById("cidade").value.trim();

        if (!formulario.checkValidity() || !nome || !endereco || !cidade) {
            alertaErro.style.display = "block";
            formulario.reportValidity();

            mostrarErro(
                "Verifique o formulário",
                "Existem campos vazios ou preenchidos incorretamente."
            );

            return;
        }

        const novoCadastro = {
            nome: nome,
            cpf: document.getElementById("cpf").value,
            nascimento: document.getElementById("nascimento").value,
            email: document.getElementById("email").value.trim(),
            telefone: document.getElementById("telefone").value,
            endereco: endereco,
            cep: document.getElementById("cep").value,
            cidade: cidade,
            estado: document.getElementById("estado").value.trim().toUpperCase()
        };

        const salvou = adicionarCadastro(novoCadastro);

        if (!salvou) {
            mostrarErro(
                "Não foi possível salvar",
                "O navegador não permitiu gravar os dados no armazenamento local."
            );
            return;
        }

        alertaErro.style.display = "none";
        formulario.reset();

        mostrarCadastros();

        mostrarSucesso(
            "Cadastro realizado!",
            "Os dados foram salvos neste navegador."
        );
    });

    formulario.addEventListener("input", function () {
        if (formulario.checkValidity()) {
            alertaErro.style.display = "none";
        }
    });
}


function mostrarCadastros() {
    const lista = document.getElementById("lista-cadastros");

    if (!lista) {
        return;
    }

    const cadastros = obterCadastros();

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
        botao.addEventListener("click", async function () {
            const confirmou = await confirmarRemocao();

            if (!confirmou) {
                return;
            }

            const indice = Number(botao.dataset.indice);
            const removeu = excluirCadastro(indice);

            if (!removeu) {
                mostrarErro(
                    "Não foi possível remover",
                    "O navegador não permitiu atualizar o armazenamento local."
                );
                return;
            }

            mostrarCadastros();
            mostrarSucesso("Cadastro removido!");
        });
    });
}
