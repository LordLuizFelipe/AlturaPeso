var altura
var sexo
var totalMasculino = 0
var totalFeminino = 0
var somaAlturaMasculino = 0
var mediaAlturaMasculino = 0
var maiorAltura = 0
var menorAltura = 0

for(var i = 1; i <= 15; i++) {
    altura = parseFloat(prompt("Informe a altura da "+i+"ª pessoa:"));
    sexo = prompt("Informe o sexo da "+i+"ª pessoa (M para Masculino e F para Feminino):");
    if (sexo == "M") {
        totalMasculino++ ;
        somaAlturaMasculino += altura;
    }


    else totalFeminino++

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
    else if (menorAltura == 0){
        menorAltura = altura
    }
    
    if (altura < menorAltura){
        menorAltura = altura
    }
}




alert("Maior altura informada: "+maiorAltura+" m");
alert("Menor altura informada: "+menorAltura+" m");

if (totalMasculino > 0) {
    mediaAlturaMasculino = somaAlturaMasculino / totalMasculino;
    alert("Média de altura dos homens: "+mediaAlturaMasculino+" m");
}

alert("Número de mulheres que responderam: "+totalFeminino+" ");
