var btnEnviar = document.getElementById('btnEnviar');

function boton4(){
    window.alert('enviar4');
}

var btnEnviar = document.getElementsById('btnEnviar');
btnEnviar.style.color= 'yellow';

btnEnviar.addEventListener('click', function(){
    window.alert('enviar')
    cambiarColor('red');
    cambiarEstado('true');
});

var emailHelp = document.getElementsById('emailHelp');
function cambiarColor(){
    emailHelp.style.color = "red";
}

function cambiarEstado(estado){
    var exampleCheck1 = document.getElementsById('exampleCheck1').checked = estado;
}

var btnEnviar5 = document.getElementsById('btnEnviar5');
btnEnviar5.addEventListener('click', callback);

function callback(){
    window.alert("enviar5");
    cambiarColor('green');
    cambiarEstado('false');
}