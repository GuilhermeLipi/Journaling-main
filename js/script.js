let Annotacion = document.querySelector('#annotations form')

function openAnnotation(){
    Annotacion.classList.add('open');
    document.getElementById("abrirAnotacao").style.display = "none";

}

function closeAnnotation(){
    Annotacion.classList.remove('open')
    document.getElementById("abrirAnotacao").style.display = "flex";
}