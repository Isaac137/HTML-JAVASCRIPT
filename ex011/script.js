var n1 = document.getElementById('txt')
var n2 = document.getElementById('txt1')
function soma() {
    var num1 = parseInt(n1.value)
    var num2 = parseInt(n2.value)
    alert(`A soma entre ${num1} + ${num2} = ${num1 + num2}`)
} 
function mult() {
    var num1 = parseInt(n1.value)
    var num2 = parseInt(n2.value)
    alert(`A multiplicação entre ${num1} x ${num2} = ${num1 * num2}`)
}
function div() {
    var num1 = parseInt(n1.value)
    var num2 = parseInt(n2.value)
    alert(`A divisão entre ${num1} / ${num2} = ${num1 / num2}`)
}
function maior() {
    var num1 = parseInt(n1.value)
    var num2 = parseInt(n2.value)
    var maior = 0
    if (num1 > num2) {
        maior = num1
        alert(`O maior número é ${maior}`)
    } else if (num2 > num1) {
        maior = num2
        alert(`O maior número é ${maior}`)
    } else {
        alert(`Os dois números são iguais`)
    }
}
function menor() {
    var num1 = parseInt(n1.value)
    var num2 = parseInt(n2.value)
    var menor = num1
    if (num2 < menor) {
        menor = num2
        alert(`O Menor número é ${menor}`)
    } else if (menor == num2) {
        alert('Os dois número são iguais')
    }
}