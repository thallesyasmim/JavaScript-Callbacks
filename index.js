/*
    0 - Obter o usuário
    1 - Obter o telefone de um usuário à partir do seu ID
    2 - Obter o endereço do usuário à partir do seu ID
*/

function obterUsuario(callback) {
    setTimeout(() =>{
        return callback(null, {
            id: 1,
            nome: 'Yasmim',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '31082018',
            ddd: 11
        })
    }, 2000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Igarapé da missão',
            numero: 624,
            apartamento: '13 B',
            bairro: 'Cidade Tiradentes'
        })
    }, 2000)
}   


/* Podemos criar o nosso callback externamente, ou no próprio paramêtro da função
function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario);
}
*/

obterUsuario(
    function resolverUsuario(erro, usuario) {
        // null || "" || 0 === false
        if(erro) {
            console.log('DEU RUIM!', erro);
            return;
        }

        obterTelefone(
            usuario.id, 
            function resolverTelefone(erro1, telefone) {
                if(erro1) {
                    console.log('DEU RUIMZAÃO!', erro1);
                    return;
                }

                obterEndereco(
                    usuario.id,
                    function resolverEndereco(erro2, endereco) {
                        if(erro2) {
                            console.log('DEU RUIMZINHO!', erro2);
                            return;
                        }

                        console.log(`
                            Nome: ${usuario.nome}
                            Data de Nascimento: ${usuario.dataNascimento}
                            Endereço: ${endereco.rua}, ${endereco.numero}, ${endereco.apartamento}, ${endereco.bairro}
                            Telefone: (${telefone.ddd})${telefone.telefone}
                        `);

                    }
                )

         })
        
    }
);
/*const telefone = obterTelefone(usuario.id);
const endereco = obterEndereco(usuario.id);*/


// console.log('telefone', telefone);
