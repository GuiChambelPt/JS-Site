function botao() {
    document.getElementById("Saudacao").innerHTML = texto;
}
const dt = new Date()
const hora = dt.getHours()
let nome = null
nome = prompt("Qual é seu nome?");
let texto = null
console.log(texto)
if (hora > 6 && hora <= 12){ 
    texto = ('Bom Dia, ' + nome)
}
else if (hora > 12 && hora < 18){
    texto = ('Boa Tarde, ' + nome)
}
else{
    texto = ('Boa Noite, ' + nome)
}

