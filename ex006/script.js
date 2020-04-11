function cont() {
    var resp = document.getElementById('resp')
    var num = document.getElementById('txt')
    var n = parseInt(num.value)
    var c = 0
    var totp = toti = tot = 0
    resp.innerHTML = '<strong>RESPOSTA</strong><hr>'
    while (c <= n) {
        resp.innerHTML += `${c} `
        if (c % 2 == 0) {
            totp += 1
        } else {
            toti += 1
        }
        tot += 1
        c += 1
    }
    resp.innerHTML += `<hr>São ${totp} número pares, e ${toti} números ímpares`
}