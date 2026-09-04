function verify() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Digite um ano valido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var man = 'homem'
        var fem = 'mulher'
        if (fsex[0].checked) {
            res.innerHTML = `Voce e um ${man} de ${idade} anos de idade`
        } else {
            res.innerHTML = `Voce e uma ${fem} de ${idade} anos de idade`
        }
    }
}