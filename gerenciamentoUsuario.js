// CARREGAR USUÁRIOS SALVOS

const tabela = document.getElementById("tabelaUsuarios");

let usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

usuariosSalvos.forEach(usuario => {

    tabela.innerHTML += `
        <tr class="linha-usuario">

            <td class="usuario">
                <div>
                    <strong>${usuario.nome}</strong>
                    <small>${usuario.email}</small>
                </div>
            </td>

            <td>
                <span class="cargo">${usuario.cargo}</span>
            </td>

            <td>
                <span class="${usuario.status.toLowerCase()}">
                    ${usuario.status}
                </span>
            </td>

            <td>
                <select class="permissao-select">
                    <option>Visualizar Relatórios</option>
                </select>
            </td>

        </tr>
    `;

});



const btnBuscar = document.getElementById("btnBuscar");
const campoBusca = document.getElementById("buscarUsuario");

btnBuscar.addEventListener("click", function () {

    const pesquisa = campoBusca.value.toLowerCase().trim();

    const usuarios = document.querySelectorAll(".linha-usuario");

    usuarios.forEach(function (usuario) {

        const nome = usuario
            .querySelector("strong")
            .textContent
            .toLowerCase();

        if (nome.includes(pesquisa) || pesquisa === "") {
            usuario.style.display = "";
        } else {
            usuario.style.display = "none";
        }

    });

});