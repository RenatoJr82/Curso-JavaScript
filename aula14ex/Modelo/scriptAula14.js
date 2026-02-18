function tabuada() {
    let num = document.getElementById("numero").value;
    let sel = document.getElementById("seltab");
    sel.innerHTML = "";
    if (num.length == 0) {
        alert("Por favor, digite um número!");
        return;
    }
    for (let c = 1; c <= 10; c++) {
        let item = document.createElement("option");
        item.text = `${num} x ${c} = ${num * c}`;
        item.value = `tab${c}`;
        sel.appendChild(item);
    }
}