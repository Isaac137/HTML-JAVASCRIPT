var nome = prompt('Por favor, digite seu nome: ')
var date = new Date()
var data = date.getHours()
var dia = date.getDay()
var mes = date.getMonth()
var pri = document.getElementById('primeiro__h3')
var seg = document.getElementById('segundo__h3')
pri.innerHTML = `Agora são ${data} horas `
if (nome == null) {
    seg.innerHTML = 'Olá! Tudo bem com você hoje?'
} else {
    seg.innerHTML = `Olá ${nome}!, tudo bem com você hoje?`
}
switch (dia) {
    case 0:
        switch (mes) {
            case 0:
                pri.innerHTML += `de um Domingo do mês de Janeiro`
                break
            case 1:
                pri.innerHTML += 'de um Domingo do mês de Feveiro'
                break
            case 2:
                pri.innerHTML += 'de um Domindo do mês de Março'
                break
            case 3:
                pri.innerHTML += 'de um Domingo do mês de Abril'
                break
            case 4:
                pri.innerHTML += 'de um Domingo do mês de Maio'
                break
            case 5:
                pri.innerHTML += 'de um Domingo do mês de Junho'
                break
            case 6:
                pri.innerHTML += 'de um Domingo do mês de Julho'
                break
            case 7:
                pri.innerHTML += 'de um Domingo do mês de Agosto'
                break
            case 8:
                pri.innerHTML += 'de um Domingo do mês de Setembro'
                break
            case 9:
                pri.innerHTML += 'de um Domingo do mês de Outubro'
                break
            case 10:
                pri.innerHTML += 'de um Domingo de mês do Novembro'
                break
            case 11:
                pri.innerHTML += 'de um Domingo de mês de Dezembro'
                break
        }
        break
    case 1:
        switch (mes) {
            case 0:
                pri.innerHTML += `de uma Segunda do mês de Janeiro`
                break
            case 1:
                pri.innerHTML += 'de uma Segunda do mês de Feveiro'
                break
            case 2:
                pri.innerHTML += 'de uma Segunda de mês de Março'
                break
            case 3:
                pri.innerHTML += 'de uma Segunda de mês de Abril'
                break
            case 4:
                pri.innerHTML += 'de uma Segunda do mês de Maio'
                break
            case 5:
                pri.innerHTML += 'de uma Segunda do mês de Junho'
                break
            case 6:
                pri.innerHTML += 'de uma Segunda do mês de Julho'
                break
            case 7:
                pri.innerHTML += 'de uma Segunda do mês de Agosto'
                break
            case 8:
                pri.innerHTML += 'de uma Segunda do mês de Setembro'
                break
            case 9:
                pri.innerHTML += 'de uma Segunda do mês de Outubro'
                break
            case 10:
                pri.innerHTML += 'de uma Segunda de mês do Novembro'
                break
            case 11:
                pri.innerHTML += 'de uma Segunda de mês de Dezembro'
                break
        }
        break
    case 2:
        switch (mes) {
            case 0:
                pri.innerHTML += `de uma Terça do mês de Janeiro`
                break
            case 1:
                pri.innerHTML += 'de uma Terça do mês de Feveiro'
                break
            case 2:
                pri.innerHTML += 'de uma Terça de mês de Março'
                break
            case 3:
                pri.innerHTML += 'de uma Terça de mês de Abril'
                break
            case 4:
                pri.innerHTML += 'de uma Terça do mês de Maio'
                break
            case 5:
                pri.innerHTML += 'de uma Terça do mês de Junho'
                break
            case 6:
                pri.innerHTML += 'de uma Terça do mês de Julho'
                break
            case 7:
                pri.innerHTML += 'de uma Terça do mês de Agosto'
                break
            case 8:
                pri.innerHTML += 'de uma Terça do mês de Setembro'
                break
            case 9:
                pri.innerHTML += 'de uma Terça do mês de Outubro'
                break
            case 10:
                pri.innerHTML += 'de uma Terça de mês do Novembro'
                break
            case 11:
                pri.innerHTML += 'de uma Terça de mês de Dezembro'
                break
        }
        break
    case 3:
        switch (mes) {
            case 0:
                pri.innerHTML += `de uma Quarta do mês de Janeiro`
                break
            case 1:
                pri.innerHTML += 'de uma Quarta do mês de Feveiro'
                break
            case 2:
                pri.innerHTML += 'de uma Quarta de mês de Março'
                break
            case 3:
                pri.innerHTML += 'de uma Quarta de mês de Abril'
                break
            case 4:
                pri.innerHTML += 'de uma Quarta do mês de Maio'
                break
            case 5:
                pri.innerHTML += 'de uma Quarta do mês de Junho'
                break
            case 6:
                pri.innerHTML += 'de uma Quarta do mês de Julho'
                break
            case 7:
                pri.innerHTML += 'de uma Quarta do mês de Agosto'
                break
            case 8:
                pri.innerHTML += 'de uma Quarta do mês de Setembro'
                break
            case 9:
                pri.innerHTML += 'de uma Quarta do mês de Outubro'
                break
            case 10:
                pri.innerHTML += 'de uma Quarta de mês do Novembro'
                break
            case 11:
                pri.innerHTML += 'de uma Quarta de mês de Dezembro'
                break
        }
        break
    case 4:
        switch (mes) {
            case 0:
                pri.innerHTML += `de uma Quinta do mês de Janeiro`
                break
            case 1:
                pri.innerHTML += 'de uma Quinta do mês de Feveiro'
                break
            case 2:
                pri.innerHTML += 'de uma Quinta de mês de Março'
                break
            case 3:
                pri.innerHTML += 'de uma Quinta de mês de Abril'
                break
            case 4:
                pri.innerHTML += 'de uma Quinta do mês de Maio'
                break
            case 5:
                pri.innerHTML += 'de uma Quinta do mês de Junho'
                break
            case 6:
                pri.innerHTML += 'de uma Quinta do mês de Julho'
                break
            case 7:
                pri.innerHTML += 'de uma Quinta do mês de Agosto'
                break
            case 8:
                pri.innerHTML += 'de uma Quinta do mês de Setembro'
                break
            case 9:
                pri.innerHTML += 'de uma Quinta do mês de Outubro'
                break
            case 10:
                pri.innerHTML += 'de uma Quinta de mês do Novembro'
                break
            case 11:
                pri.innerHTML += 'de uma Quinta de mês de Dezembro'
                break
        }
        break
    case 5:
        switch (mes) {
            case 0:
                pri.innerHTML += `de uma Setxa do mês de Janeiro`
                break
            case 1:
                pri.innerHTML += 'de uma Sexta do mês de Feveiro'
                break
            case 2:
                pri.innerHTML += 'de uma Sexta de mês de Março'
                break
            case 3:
                pri.innerHTML += 'de uma Sexta de mês de Abril'
                break
            case 4:
                pri.innerHTML += 'de um Domingo do mês de Maio'
                break
            case 5:
                pri.innerHTML += 'de um Domingo do mês de Junho'
                break
            case 6:
                pri.innerHTML += 'de um Domingo do mês de Julho'
                break
            case 7:
                pri.innerHTML += 'de um Domingo do mês de Agosto'
                break
            case 8:
                pri.innerHTML += 'de um Domingo do mês de Setembro'
                break
            case 9:
                pri.innerHTML += 'de um Domingo do mês de Outubro'
                break
            case 10:
                pri.innerHTML += 'de um Domingo de mês do Novembro'
                break
            case 11:
                pri.innerHTML += 'de um Domingo de mês de Dezembro'
                break
        }

    case 6:
        switch (mes) {
            case 0:
                pri.innerHTML += `de um Sábado do mês de Janeiro`
                break
            case 1:
                pri.innerHTML += 'de um Sábado do mês de Feveiro'
                break
            case 2:
                pri.innerHTML += 'de um Sábado de mês de Março'
                break
            case 3:
                pri.innerHTML += 'de um Sábado de mês de Abril'
                break
            case 4:
                pri.innerHTML += 'de uma Sábado do mês de Maio'
                break
            case 5:
                pri.innerHTML += 'de uma Sábado do mês de Junho'
                break
            case 6:
                pri.innerHTML += 'de uma Sábado do mês de Julho'
                break
            case 7:
                pri.innerHTML += 'de uma Sábado do mês de Agosto'
                break
            case 8:
                pri.innerHTML += 'de uma Sábado do mês de Setembro'
                break
            case 9:
                pri.innerHTML += 'de uma Sábado do mês de Outubro'
                break
            case 10:
                pri.innerHTML += 'de uma Sábado de mês do Novembro'
                break
            case 11:
                pri.innerHTML += 'de uma Sábado de mês de Dezembro'
                break
        }
        break
}
function linguagem() {
    var res = document.getElementById('resposta')
    var pro = document.getElementById('linguagem')
    var p = String(pro.value.toUpperCase())
    switch (p) {
        case 'PYTHON':
            res.innerHTML = 'O objetivo do Lean Seis Sigma é tornar os processos mais eficientes e produtivos, de modo que os desperdícios e aumento de nível de qualidade sejam evitados. Mas o que a filosofia LSS e a linguagem de programação Python têm em comum? O Python foi desenvolvido para ser focado no programador, visando priorizar o esforço do homem em relação à máquina e tem como objetivo chave aumentar a produtividade. Acontece que esses dois assuntos, por mais distintos que sejam, possuem uma ideologia em comum: busca por melhores resultados. Mas o que é Python? Como surgiu? É fácil de aprender? Preciso pagar por esse software? Neste artigo, vou responder a todas essas perguntas, apresentando uma das principais linguagens de desenvolvimento do mercado. Pegue o café aí e vamos aprender um pouco sobre Python!'
            break
        case 'JAVASCRIPT':
            res.innerHTML = 'Antes de mais nada, vamos deixar claro: Javascript não é Java. Apesar da confusão que as pessoas normalmente fazem sobre essas duas linguagens, Java e Javascript não possuem nenhuma ligação direta uma com a outra a não ser o java no nome. Tendo isso em mente, vamos para a definição de o que é Javascript. O JS ou JavaScript é uma linguagem de programação de alto-nível, criada no meio da década de 90, mais precisamente em 1996 pelo lendário programador Brendan Eich que, além de criar o JavaScript, foi também um dos fundadores da Mozilla Corporation. Ele criou a linguagem quando ainda trabalhava na Netscape Communications Corporation, originalmente criado para funcionar no navegador Netscape Navigator, seu objetivo era facilitar processos dentro de páginas web, tornado a programação de animações e alertas muito mais simples. Pouco tempo depois, cerca de 1 ano depois do seu lançamento, a Microsoft começou a aceitar esta linguagem em seu navegador da época, o que foi um dos grandes impulsionadores para consolidar o que é Javascript como uma das principais linguagens de programação dos dias de hoje. Desse tempo para cá, o JScript vem sofrendo diversas funções e aplicações diferentes, ficando mais versátil e completo de acordo com o tempo. Hoje, por exemplo, já é possível usar Javascript para criar aplicativos Desktop e Mobile, não só aplicações baseadas em web e navegadores.'
            break
        case 'JAVA':
            res.innerHTML = 'Originalmente desenvolvida por uma equipe de desenvolvedores liderada por James Gosling na Sun Microsystems (atualmente de propriedade da Oracle) e lançada em 1995, o Java é uma linguagem de programação orientada a objetos que atualmente faz parte do núcleo da Plataforma Java. A sintaxe utilizada deriva do C++ porém com um modelo mais simples. Como sua principal característica, todo o código é escrito dentro de uma classe e tudo é um objeto, com exceção dos tipos intrínsecos (números reais e ordinais, valores booleanos e caracteres) que não são classes por questões da funcionalidade exercida. No momento de seu desenvolvimento, os objetivos principais desejados para esta linguagem foram que ela deveria ser simples, orientada a objetos e de fácil aprendizagem não somente para programadores experientes. Além disto, a linguagem Java deveria possuir arquitetura neutra e portável, de forma que pudesse ser utilizada em diversos Sistemas operacionais, ter alta performance, apresentar segurança e solidez e ser uma linguagem interpretada com suporte a threads e dinâmica. As aplicações em Java normalmente podem ser executadas em qualquer plataforma que possua a Java Virtual Machine (JVM) instalada, independente da arquitetura do computador. O Java utiliza o “Garbage Collector” para gerenciar a memória referente ao ciclo de vida dos objetos e sua permanência nela. O programador determina quando os objetos são criados e o Java Runtime é responsável pela retirada do objeto da memória quando ele não estiver mais em uso, evitando que este processo seja feito manualmente como nas linguagens de programação estruturada'
    }
}