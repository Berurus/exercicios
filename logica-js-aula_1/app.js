alert('Jogo do Número Secreto. Estás com sorte?');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
console.log ('valor do chute:', chute);

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log ('Resultado da comparação:', chute == numeroSecreto);

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    alert(`Quem diria, hein? Acertou mizerávi! ${numeroSecreto}`);
} else {
     // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
     console.log('O número secreto era:', numeroSecreto);
     alert(`Errasate! Era ${numeroSecreto}`);
    }