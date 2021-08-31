const prompt = require("prompt-sync")();
let contadors = 0 
let contadorn = 0

console.log('Responda as perguntas abaixo com(S) para sim e (N) para não')

let P1 = prompt('Telefonou para a vítima?')
let P2 = prompt('Esteve no local do crime?')
let P3 = prompt('Mora perto da vítima?')
let P4 = prompt('Devia para a vítima?')
let P5 = prompt('Já trabalhou com a vítima?')

if (P1 == 'S'){
    contadors = contadors +1;
}
else{
    contadorn = contadorn +1;
}
if (P2 == 'S'){
    contadors = contadors +1;
}
else{
    contadorn = contadorn +1;
}
if (P3 == 'S'){
    contadors = contadors +1;
}
else{
    contadorn = contadorn +1;
}
if (P4 == 'S'){
    contadors = contadors +1;
}
else{
    contadorn = contadorn +1;
}
if (P5 == 'S'){
    contadors = contadors +1;
}
else{
    contadorn = contadorn +1;
}
if (contadors ==2 ){
    console.log('Voce é Suspeito')
}
else if (contadors ==3 || contadors==4){
    console.log('Você é Cúmplice')
}
else if (contadors ==5){
    console.log('Você é Assassino')
}
else if (contadors ==1 || contadors==0){
    console.log('Você é Inocente')
}
