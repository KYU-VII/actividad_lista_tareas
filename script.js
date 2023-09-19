// Función para agregar una nueva tarea

function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;
        const botonEliminar = document.createElement("button");
        const botonCompletar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonCompletar.textContent = "Completar";
        botonEliminar.className = "delete";
        botonCompletar.className = "complete";
        botonEliminar.onclick = function () {
            listaTareas.removeChild(nuevaTarea);
        };
        botonCompletar.onclick = function () {
            nuevaTarea.classList.toggle("completed");
        }
        nuevaTarea.appendChild(botonEliminar);
        nuevaTarea.appendChild(botonCompletar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
    }
} 


// Agregar evento de clic al botón "Agregar"

document.getElementById("agregar").addEventListener("click", agregarTarea);

// Función para mostrar tareas completadas

function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    } 
    
    // Función para mostrar tareas pendientes

    function mostrarPendientes() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (!tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    } 
    
    // Agregar evento de clic al botón "Mostrar Completadas"

    document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);
    
    // Agregar evento de clic al botón "Mostrar Pendientes"

    document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);


//Función mostar todas las tareas
function mostrarTodas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (!tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "flex";
    }
    });
    } 

    // Agregar evento de clic al botón "Mostrar Todas"

    document.getElementById("mostrarTodas").addEventListener("click", mostrarTodas);
