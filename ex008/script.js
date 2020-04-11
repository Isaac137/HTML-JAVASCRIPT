function rea() {
    var n = document.getElementById('txt')
    var sal = parseFloat(n.value)
    var novoSal = sal + (sal * 10 / 100)
    alert(`O preço R$${sal} com 10% de Reajuste Salárial é R$${novoSal}`)
}