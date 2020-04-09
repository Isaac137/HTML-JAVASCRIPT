var date = new Date()
var ano = date.getFullYear()
function alistamento() {
    var nasc = window.document.getElementById('txt')
    var nas = parseInt(nasc.value)
    var idade = ano - nas
    if (idade == 18) {
        alert(`Você tem ${idade} anos\nALISTAMENTO IMEDIATO!`)
    } else if (idade < 18) {
        var tot = 18 - idade
        alert(`Você tem ${idade} anos\nALISTAMENTO DAQUI À ${tot} anos`)
    } else {
        var tot = idade - 18
        alert(`Você tem ${idade} anos\nSEU ALISTAMENTO FOI HÁ ${tot} anos`)
    }
}