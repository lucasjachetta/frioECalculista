let numeroSecreto = parseInt(Math.random() * 11);
let numeroDeTentativas = 1;
let maximoDeTentativas = 3;

function Chutar() {
  let numeroDeTentativasAtual = maximoDeTentativas - numeroDeTentativas;
  const elementoResultado = document.getElementById("resultado");
  const chute = parseInt(document.getElementById("valor").value); //pega o valor do input "valor" e transforma em numero inteiro

  if (numeroDeTentativas <= maximoDeTentativas) {
    if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML =
        "Opa, você deve digitar um número de 0 a 10!";
    } else if (chute === numeroSecreto) {
      elementoResultado.innerHTML =
        "Parabéns, você acertou o número e derrotou Tommy! Veja se consegue vencê-lo de novo, tente outro número!";
      numeroDeTentativas = 1;
      numeroSecreto = parseInt(Math.random() * 11);
    } else if (numeroDeTentativasAtual === 0) {
      elementoResultado.innerHTML = `Tommy te venceu! O número que ele estava pensando era ${numeroSecreto}. Agora ele está pensando em outro número (ou não). Tente novamente!`;
      numeroDeTentativas = 1;
      numeroSecreto = parseInt(Math.random() * 11);
    } else {
      numeroDeTentativas++;

      elementoResultado.innerHTML = `Você errou! Você ainda tem ${numeroDeTentativasAtual} tentativas`;
    }
  }
}