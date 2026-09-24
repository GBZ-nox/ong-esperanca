// Centraliza as mensagens da aplicação.
// Se o SweetAlert2 não carregar, usamos alert/confirm como alternativa.

export function mostrarErro(titulo, texto) {
    if (typeof Swal !== "undefined") {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: "error",
            confirmButtonText: "OK"
        });
    } else {
        alert(titulo + "\n\n" + texto);
    }
}

export function mostrarSucesso(titulo, texto = "") {
    if (typeof Swal !== "undefined") {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: "success",
            confirmButtonText: "OK"
        });
    } else {
        alert(titulo + (texto ? "\n\n" + texto : ""));
    }
}

export function confirmarRemocao() {
    if (typeof Swal !== "undefined") {
        return Swal.fire({
            title: "Remover cadastro?",
            text: "O cadastro será apagado deste navegador.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim, remover",
            cancelButtonText: "Cancelar"
        }).then(function (resultado) {
            return resultado.isConfirmed;
        });
    }

    return Promise.resolve(
        confirm("Remover cadastro?\n\nO cadastro será apagado deste navegador.")
    );
}
