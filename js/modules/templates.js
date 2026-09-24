import { projetos } from "./data.js";

export function criarProjetos() {
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


export function paginaInicio() {
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

            <img src="/images/hero.webp" width="810" height="335"
                 alt="Pessoa segurando uma muda de planta"
                 class="hero-imagem" fetchpriority="high" decoding="async">
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


export function paginaProjetos() {
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


export function paginaCadastro() {
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
                               minlength="2"
                               maxlength="2"
                               pattern="[A-Za-z]{2}"
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
    `;
}


export function paginaSobre() {
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


export function paginaContato() {
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
