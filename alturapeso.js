let altura, sexo, totalMasculino = 0, qtdFeminino = 0, somaAlturaMasculino = 0, maiorAltura = 0, menorAltura = Infinity;

for (let i = 1; i <= 15; i++) {
  altura = parseFloat(prompt(`Informe a altura da ${i}ª pessoa (em metros):`));
  if (isNaN(altura) || altura <= 0) {
    alert("Altura inválida! Tente novamente.");
    i--;
    continue;
  }

  sexo = prompt(`Informe o sexo da ${i}ª pessoa (M para Masculino ou F para Feminino):`);
  if (sexo.toUpperCase() !== "M" && sexo.toUpperCase() !== "F") {
    alert("Sexo inválido! Tente novamente.");
    i--;
    continue;
  }

  if (altura > maiorAltura) {
    maiorAltura = altura;
  }

  if (altura < menorAltura) {
    menorAltura = altura;
  }

  if (sexo.toUpperCase() === "M") {
    totalMasculino++;
    somaAlturaMasculino += altura;
  } else {
    qtdFeminino++;
  }
}

alert(`Maior altura informada: ${maiorAltura}m`);
alert(`Menor altura informada: ${menorAltura}m`);

if (totalMasculino > 0) {
  const mediaAlturaMasculino = somaAlturaMasculino / totalMasculino;
  alert(`Média de altura dos homens: ${mediaAlturaMasculino.toFixed(2)}m`);
} else {
  alert("Nenhum homem informado.");
}

alert(`Número de mulheres que responderam: ${qtdFeminino}`);
