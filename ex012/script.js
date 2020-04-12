var com = Math.round(Math.random()*10)
function ad() {
    var num = document.getElementById('txt')
    var n = parseInt(num.value)
    if (n > com) {
        alert('Hmm...Não foi dessa vez. Tente Novamente!\nDICA: Menor')
    } else if (n < com) {
        alert('Hmm...Não foi dessa vez. Tente Novamente!\nDICA: Maior')
    } else {
        alert('Parabéns!!! Eu pensei nesse número mesmo')
    }
}