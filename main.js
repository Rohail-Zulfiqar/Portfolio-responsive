

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle){
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.add('show-menu')
    })
}

if (navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// =========Remove menu mobile===============

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = doc.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// ============Skills==============

const skillscontent = document.getElementsByClassName('s    kills__content'),
      skillsheader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i<skillscontent.length ; i++){
        skillscontent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }else{
        this.parentNode.className = 'skills__content skills__close'
    }
}
skillsheader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
}
)


// ============services modal============
const modalView = document.querySelectorAll('.services__modal'),
      modalBtn = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalView[modalClick].classList.add('active__modal')
}
modalBtn.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})
modalClose.forEach((modalClose,i)=>{
    modalClose.addEventListener('click', ()=>{
        modalView.forEach((modalView)=>{
            modalView.classList.remove('active__modal')
        })
    })
})

// scroll section active link ====================
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if (scrollY >sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }

    })
}
window.addEventListener('scroll', scrollActive);


// ==========change background header==============
function scrollHeader(){
    const nav = document.getElementById('header')
    if (this.scrollY >= 200 ) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header');

}
window.addEventListener('scroll',scrollHeader);



// show scroll up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll' , scrollUp);