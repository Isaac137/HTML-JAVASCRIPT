function calc() {
    var num = window.document.getElementById('txt')
    var n = parseInt(num.value)
    alert(`O Dobro de ${n} é ${n * 2}\nO Triplo de ${n} é ${n * 3}\nA Raiz Quadrada de ${n} é ${n ** (1/2)}`)
}