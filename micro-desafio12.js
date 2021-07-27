//parte 1

let numerosPares=[2, 4, 6, 8, 10];

let numerosImpares= numerosPares.map(function(numeros){

    return (numeros) -1;
});

console.log(numerosImpares);

//parte 2

let nomes=["Maria", "Joana", "Francisca", "Carla", "Rebecca", "Maria"];

let eitaMarias= nomes.filter(nomes => nomes == 'Maria');

console.log('eita Marias')

//parte 3- NÃO CONSEGUI FAZER, NÃO ENTENDI O ENUNCIADO

//parte 4

let animais= ['gato','cachorro','coelho','peixe','passarinho'];

animais.forEach(function(bichinhos){
    console.log('O animal é: '+ bichinhos);
})