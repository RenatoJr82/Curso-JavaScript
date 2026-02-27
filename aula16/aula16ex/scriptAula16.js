    let num = document.querySelector("#fnumero");
    let lista = document.querySelector("#flista");
    let resposta = document.querySelector("#resposta");
    //let final = document.querySelector("#fin");
    let valores = [];

function adicionar() {

    if (Number(num.value) < 1 || Number(num.value) > 100) {
        alert("Por favor, digite um número entre 1 e 100.");
        return;
    } 
    if (valores.indexOf(Number(num.value)) != -1) {
        alert("Número já adicionado. Digite outro número.");
        return;
        
    } else {
        valores.push(Number(num.value));
        let item = document.createElement("option");
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        resposta.innerHTML = "";
    } 
        num.value = "";
        num.focus();
}

function finalizar() {

    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar.");
        return;
    } else {
        let total = valores.length;
        let maior = Math.max(...valores);
        let menor = Math.min(...valores);
        let soma = valores.reduce((a, b) => a + b, 0);
        let media = soma / total;

        resposta.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        resposta.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        resposta.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}