

var frutas = ['Maça', 'Banana'];

console.log(frutas.length);

var newLength = frutas.unshift('Morango') 

var newLength = frutas.push('Laranja');

var first = frutas[0];


var last = frutas[frutas.length - 1];


function exemplo(){
	alert(frutas);
}

function exemplo2(){
	alert(first);
}

function exemplo3(){
	alert(last);
}

function exemplo4(){
	alert(newLength);
}
