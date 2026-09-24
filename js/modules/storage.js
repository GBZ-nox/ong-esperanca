// Funções responsáveis apenas pelo localStorage.

const CHAVE_CADASTROS = "cadastros";

export function obterCadastros() {
    try {
        const dados = localStorage.getItem(CHAVE_CADASTROS);

        if (!dados) {
            return [];
        }

        const cadastros = JSON.parse(dados);

        return Array.isArray(cadastros) ? cadastros : [];
    } catch (erro) {
        console.error("Erro ao recuperar os cadastros:", erro);
        return [];
    }
}

export function salvarCadastros(cadastros) {
    try {
        localStorage.setItem(
            CHAVE_CADASTROS,
            JSON.stringify(cadastros)
        );

        return true;
    } catch (erro) {
        console.error("Erro ao salvar os cadastros:", erro);
        return false;
    }
}

export function adicionarCadastro(novoCadastro) {
    const cadastros = obterCadastros();

    cadastros.push(novoCadastro);

    return salvarCadastros(cadastros);
}

export function excluirCadastro(indice) {
    const cadastros = obterCadastros();

    cadastros.splice(indice, 1);

    return salvarCadastros(cadastros);
}
