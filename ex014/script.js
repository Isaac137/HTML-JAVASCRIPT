function conversor() {
    var moeda = document.getElementById('txt')
    var dindin = parseFloat(moeda.value)
    var dolar = dindin * 5.18
    alert(`Com R$${dindin} está assesível para comprar US$${dolar}`)
}