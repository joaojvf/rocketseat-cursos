//REST utilizado para pegar o "resto" das propriedades - aplicável em vetores

const usuario = {
    nome: 'Joao',
    idade: '22',
    empresa: 'Teste'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);
//----------------------------------------------//

// SPREAD repassa as informacoes de um objeto para outra estrutura de dados
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 =[...arr1,...arr2];
console.log(arr3);
const usuarioNovo = {...usuario, nome: 'Joao Novo'};
console.log(usuarioNovo);


//template-literals
console.log(`Meu nome é ${usuario.nome} e tenho ${usuario.idade} anos`);
