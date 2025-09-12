const { expect } = require('chai');
const { retornarUsuarios } = require ('../src/gerenciarUsuario');
const { adicionarNovoUsuario } = require ('../src/gerenciarUsuario');

describe('Testar as funções de Gestão dos Usuários', function (){
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        //Add um novo nome na lista de usuários
        adicionarNovoUsuario({

            nome: 'maria',
            email: 'maria@gmail.com'
        });
        // Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios(); 
        // Comparar se o novo nome é igual ao último na lista de usuários
        expect(listaDeUsuarios.at(-1).nome).to.equal('maria');
        expect(listaDeUsuarios.at(-1).email).to.equal('maria@gmail.com');
    });
});