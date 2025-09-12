const usuarios = [
    {
        nome: 'matheus',
        email: 'matheus@gmail.com'

    },
    {
        nome: 'marcos',
        email: 'marcos@gmail.com'

    },
    {
        nome: 'lucas',
        email: 'lucas@gmail.com'

    },
    {
        nome: 'joao',
        email: 'joao@gmail.com'

    }
];

function retornarUsuarios () {
    return usuarios;
}

function adicionarNovoUsuario (usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}