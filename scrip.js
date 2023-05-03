let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular() {
    if(personagem.classList != 'animar') {
        personagem.classList.add('animar')
    }

    setTimeout(function() {
        personagem.classList.remove('animar')
    }, 500)
}

var testarColisao = setInterval( function(){

    var topoPersogangem = parseInt (
    window.getComputedStyle(personagem).getPropertyValue('top')
    )

    var EsquerdaQuadrado = parseInt (
        window.getComputedStyle(quadrado).getPropertyValue('left')
        )

        if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersogangem >= 130) {
            quadrado.style.animation = 'none'
            quadrado.style.display = 'none'
            alert('voce perdeu')
        }





    
}, 10);