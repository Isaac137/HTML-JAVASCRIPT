function aluga() {
    var d = document.getElementById('txt')
    var k = document.getElementById('txt1')
    var dias = parseInt(d.value)
    var km = parseFloat(k.value)
    var total = (dias * 0.50) + (km * 0.45)
    alert(`Total de Dias com o Carro: R$${dias * 0.50}\n\nTotal de Quilômetros rodados: R$${km * 0.45}\n\nTotal à pagar: R$${total}`)
}