/* BOTON HACIA ARRIBA
 */
window.onscroll = function(){
    if(document.documentElement.scrollTop>100){
        document.querySelector('.go-top-container').classList.add('show');
    }else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
};

document.querySelector('.go-top-container').addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* VALIDAR CAMPOS */

const nombre = document.getElementById("id_nombre");
const email = document.getElementById("id_email");
const parrafo = document.getElementById("warnings");

formulario.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = "";
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Mensaje enviado!";
    }
    
    setTimeout(function(){
    formulario.reset();
    }, 4000);
});

let btn_hideText = document.getElementById('btn_hideText');
let hideText = document.getElementById('hideText');

btn_hideText.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')){
        btn_hideText.innerHTML = 'Leer menos';
    } else{
        btn_hideText.innerHTML = 'Conóceme mas';
    }
};

/* Toggle Menu */

let menu = document.getElementById('menu');
let toggle_open = document.getElementById('toggle_open');
let toggle_close = document.getElementById('toggle_close');

toggle_open.addEventListener('click', toggleMenu);
toggle_close.addEventListener('click', toggleMenu);

function toggleMenu(){
    menu.classList.toggle('show-menu');

    if(menu.classList.contains('show-menu')){
        toggle_open.style.display = 'none';
        toggle_close.style.display = 'block';
    } else{
        toggle_open.style.display = 'block';
        toggle_close.style.display = 'none';
    }
}