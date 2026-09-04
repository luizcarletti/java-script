function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao precisamente ${hora} horas`
    if (hora >= 0 && hora <= 12) {
        img.src = 'img-dia.jpg'
        document.body.style.background = '#b19f64ce'
    } else if (hora >= 13 && hora <= 18) {
        img.src = 'img-tarde.jpg'
        document.body.style.background = '#6d5e2e'
    } else {
        img.src = 'img-noite.jpg'
        document.body.style.background = '#141209'
    }

}