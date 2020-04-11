function area() {
    var a = document.getElementById('txt1')
    var b = document.getElementById('txt2')
    var larg = parseFloat(a.value)
    var alt = parseFloat(b.value)
    var area = larg * alt
    var tinta = area / 2
    alert(`CÁLCULO...${larg}x${alt} = ${area}m²\nTotal de tinta para pintar a parede ${tinta}L`)
}