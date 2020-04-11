function imc() {
    var tor = document.getElementById('lbl2')
    var p = document.getElementById('txt')
    var a = document.getElementById('txt1')
    var peso = parseFloat(p.value)
    var alt = parseFloat(a.value)
    var imc = peso / (alt ** 2)
    tor.innerHTML = `<hr>Seu IMC: ${imc}`
}