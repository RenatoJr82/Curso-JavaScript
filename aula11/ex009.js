function verificarNacionalidade() {
    var pais = 'Brasil'
    var txtpais = document.getElementById('txtnac')
    pais = txtpais.value
    var res = document.getElementById('res')
    if (pais != 'Brasil') {
        res.innerText = ('Você é estrangeiro!')
    } else {
        res.innerText =('Você é brasileiro!')
    }
}