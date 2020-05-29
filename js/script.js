function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var mensagem = document.getElementById('mensagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas e <strong>${minutos}</strong> minutos`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#00ceff'
        mensagem.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e17a17'
        mensagem.innerHTML = 'Boa tarde!'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = 'black'
        mensagem.innerHTML = 'Boa noite!'
    }
}
