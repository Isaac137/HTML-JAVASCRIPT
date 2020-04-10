function caixa() {
    var resp = document.getElementById('resp')
    var dindin = window.document.getElementById('txt')
    var din = parseFloat(dindin.value)
    var total = din
    var ced = 100
    var totced = 0
    resp.innerHTML = '<hr>'
    while (true) {
        if (total >= ced) {
            total -= ced
            totced += 1
        } else {
            if (totced > 0) {
                resp.innerHTML += `SACANDO ${totced} notas de R$${ced}<br><hr>`
            }
            if (ced == 100) {
                ced = 50
            } else if (ced == 50) {
                ced = 20
            } else if (ced == 20) {
                ced = 10
            } else if (ced == 10) {
                ced = 5
            } else if (ced == 5) {
                ced = 1
            } 
            totced = 0
            if (total == 0) {
                break
            }
        }
    }
}