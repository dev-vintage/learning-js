/*
 * Escopos e let
 */

/*
 * Escopo Global
 */

var nome = "José";
console.log(nome);

function imprimeNome () {
	console.log(nome);
}

imprimeNome();

/*
 * Escopo Local
 */ 

function imprimeIdade(){
	var idade 15;
	console.log(idade);
}

imprimeIdade();

/*
 * Escopo Dinâmico
 */

function imprimeThis() {
	console.log('imprimeThis', this);
}

function imprimeMensagem() {
	imprimeThis.call({ msg : 'Sou um objeto' });
}

function imprimeMensagem2() {
	imprimeThis.call([ 'Sou um array!' ]);
}
imprimeMensagem();
imprimeMensagem2();









