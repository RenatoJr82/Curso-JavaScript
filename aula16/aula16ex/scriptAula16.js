// Seleciona o elemento input com id "fnumero" e armazena na variável num
let num = document.querySelector("#fnumero");
// Seleciona o elemento select com id "flista" e armazena na variável lista
let lista = document.querySelector("#flista");
// Seleciona o elemento com id "resposta" e armazena na variável resposta
let resposta = document.querySelector("#resposta");
// Cria um array vazio chamado valores para armazenar os números digitados
let valores = [];

// Função que adiciona um novo número à lista
function adicionar() {
    // Verifica se o número está fora do intervalo 1-100
    if (Number(num.value) < 1 || Number(num.value) > 100) {
        // Se estiver fora do intervalo, exibe um alerta informando o usuário
        alert("Por favor, digite um número entre 1 e 100.");
        // Encerra a execução da função
        return;
    } 
    // Verifica se o número já existe no array valores
    if (valores.indexOf(Number(num.value)) != -1) {
        // Se o número já foi adicionado, exibe um alerta
        alert("Número já adicionado. Digite outro número.");
        // Encerra a execução da função
        return;
    // Caso o número seja válido e não tenha sido adicionado ainda    
    } else {
        // Adiciona o número convertido para Number ao final do array valores
        valores.push(Number(num.value));
        // Cria um novo elemento option (opção de select)
        let item = document.createElement("option");
        // Define o texto do option como "Valor X adicionado."
        item.text = `Valor ${num.value} adicionado.`;
        // Adiciona o option criado ao final do select lista
        lista.appendChild(item);
        // Limpa o conteúdo HTML do elemento resposta
        resposta.innerHTML = "";
    } 
    // Limpa o valor do input para que o usuário possa digitar outro número
    num.value = "";
    // Coloca o foco de volta no input para melhorar a experiência do usuário
    num.focus();
}

// Função que finaliza o processo e exibe as estatísticas dos números adicionados
function finalizar() {
    // Verifica se nenhum número foi adicionado (array vazio)
    if (valores.length == 0) {
        // Se não há números, exibe um alerta pedindo para adicionar valores
        alert("Adicione valores antes de finalizar.");
        // Encerra a execução da função
        return;
    // Caso haja números no array
    } else {
        // Armazena a quantidade total de números adicionados
        let total = valores.length;
        // Encontra o maior valor do array usando Math.max com spread operator
        let maior = Math.max(...valores);
        // Encontra o menor valor do array usando Math.min com spread operator
        let menor = Math.min(...valores);
        // Usa reduce para somar todos os valores do array (acumulador começando em 0)
        let soma = valores.reduce((a, b) => a + b, 0);
        // Calcula a média dividindo a soma pela quantidade total de números
        let media = soma / total;

        // Adiciona ao HTML a quantidade total de números cadastrados
        resposta.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        // Adiciona ao HTML o maior valor informado
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        // Adiciona ao HTML o menor valor informado
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        // Adiciona ao HTML a soma de todos os valores
        resposta.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        // Adiciona ao HTML a média dos valores digitados
        resposta.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}