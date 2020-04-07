function vel() {
    var velocidade = window.document.getElementById('velocidade')
    var v = parseFloat(velocidade.value)
    if (v > 80) {
        var multa = (v - 80) * 4
        alert(`MULTADO! Você Utrapasou o limite de velocidade, que é 80km/h\nDecerá pagar umka multa de R$${multa} \nTenha um bom Dia!`)
    } else {
        alert(`Parábens! Você está no limite de velocidade.\nTenha um bom dia!`)
    }
}