// Page Présentation

let part1 = document.querySelector('#presentationPart1Container')
let part2 = document.querySelector('#presentationPart2Container')
let part3 = document.querySelector('#presentationPart3Container')

// =======================COOKIE=======================

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function checkCookie(name) {
    const cookie = getCookie(name);
    if (cookie != null) {
        return true;
    } else {
        return false;
    }
}

// =======================GLOBAL=======================
window.addEventListener('DOMContentLoaded', () => {

    if (checkCookie('page')) {
        loadPart(getCookie('page'))
    } else {
        loadPart(1)
    }
})

function hideAll() {
    part1.style.display = 'none'
    part2.style.display = 'none'
    part3.style.display = 'none'

}

function loadPart(nb) {
    hideAll()
    setCookie('page', nb, 1)
    document.querySelector(`#presentationPart${nb}Container`).style.display = 'flex';
}

// =======================PART =======================
function presentationPart1Back() {
    window.location = '/'
    setCookie('page', 1, 1)
}

function presentationPart1Next() {
    hideAll()
    setCookie('page', 2, 1)
    part2.style.display = 'flex'
}

function presentationPart2Back() {
    hideAll()
    setCookie('page', 1, 1)
    part1.style.display = 'flex'
}

function presentationPart2Next() {
    hideAll()
    setCookie('page', 3, 1)
    part3.style.display = 'flex'
}

function presentationPart3Back() {
    hideAll()
    setCookie('page', 2, 1)
    part2.style.display = 'flex'
}

function presentationPart3Next() {
    hideAll()
    setCookie('page', 4, 1)
    part4.style.display = 'flex'
}


// =======================PART 2 BUTTON =======================
let tile = document.querySelector('.presentationPart2Title')
let texte = document.querySelector('.presentationPart2Texte')

function clearTextes(){
    tile.textContent = ''
    texte.textContent =''
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('focus'));}
function presentationPart2LesBesoins() {
    clearTextes()
    this.classList.add('focus')

    tile.textContent = 'Répondre aux besoins'
    texte.textContent = 'Identifier et répondre aux besoins de votre enfant est essentiel pour son développement. Cela inclut l\'observation attentive de ses signaux et l\'adaptation à ses exigences physiques et émotionnelles.'
}

function presentationPart2LeRythme() {
       clearTextes()
    this.classList.add('focus')
    tile.textContent = 'Respecter le rythme'
    texte.textContent = 'Respecter le rythme et l\'évolution de votre enfant permet de favoriser un développement harmonieux. Chaque enfant progresse à son propre rythme, et il est crucial de lui offrir un environnement qui soutient sa croissance.'
}

function presentationPart2ConfortSecurity() {
       clearTextes()
    this.classList.add('focus')
    tile.textContent = 'Confort et sécurité'
    texte.textContent = 'Assurer le confort et la sécurité physique et psychique de votre enfant est une priorité. Le rassurer, le protéger, et l\'accompagner dans ses activités quotidiennes contribuent à renforcer sa confiance en lui.'
}

function presentationPart2Moments() {
       clearTextes()
    this.classList.add('focus')
    tile.textContent = 'Moments privilégiés'
    texte.textContent = 'Proposer des moments privilégiés tels que le jeu, les activités diverses, et les moments de repos et de repas adaptés à son rythme est essentiel pour son bien-être et son développement global.'
}

function presentationPart2EveilAutonomie() {
       clearTextes()
    this.classList.add('focus')
    tile.textContent = 'Éveil et autonomie'
    texte.textContent = 'Accompagner l\'éveil, l\'épanouissement, la socialisation, et l\'autonomie de votre enfant aide à bâtir une base solide pour son avenir. Cela inclut des activités stimulantes qui favorisent la découverte et l\'indépendance.'
}

function presentationPart2Confiance() {
       clearTextes()
    this.classList.add('focus')
    tile.textContent = 'Relation de confiance'
    texte.textContent = 'Respecter vos attentes et travailler en collaboration avec vous, en privilégiant le dialogue, permet de construire une relation de confiance. Cette coopération est essentielle pour le bien-être et le développement de votre enfant.'
}


function presentationPart2BigTitle() {
    clearTextes()
    tile.textContent='Sélectionnez l’une des cases sur les côtés pour plus d’explications'
   }