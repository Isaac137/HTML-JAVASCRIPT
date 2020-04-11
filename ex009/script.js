function clas() {
    var n = document.getElementById('txt')
    var idade = parseInt(n.value)
    if (idade <= 6) {
        alert(`IDADE: ${idade}\nCLASSIFICAÇÃO: Baby.`)
    } else if (idade <= 13) {
        alert(`IDADE: ${idade}\nCLASSIFICAÇÃO: Infantil`)
    } else if (idade <= 18) {
        alert(`IDADE: ${idade}\nCLASSIFICAÇÃO: Junior`)
    } else if (idade <= 25) {
        alert(`IDADE: ${idade}\nCLASSIFICAÇÃO: Sênior`)
    } else {
        alert(`IDADE: ${idade}\nCLASSIFICAÇÃO: Master`)
    }
}