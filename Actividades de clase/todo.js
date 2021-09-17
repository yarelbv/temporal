var btnAgregar = document.getElementsByID("agregar");
btnAgregar.addEventListener("click", agregar);

var txtTarea = document.getElementsById("tarea");
var listaTareas = document.getElementsByid("tareas");

function agregar() {
    let tarea = document.getElements("li");
    tarea.textContent = txtTarea.value;
    listaTareas.appendChild(tarea);
}