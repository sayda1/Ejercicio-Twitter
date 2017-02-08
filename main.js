var listaTareas =[];
var boton = document.getElementById("boton");
boton.addEventListener("click", onAgregarClick);

//funcion para añadir tarea
function onAgregarClick(){
    var mensaje= document.getElementById("mensaje").value;
    if (mensaje!=0){
        lista1();
        listaTareas.push({tarea:mensaje,isDone:false});
    }else{
        alert("Llena este campo");
    }
}
function lista1()
{
   var lista= document.getElementById("lista");
   lista.innerHTML="";
   for(var i in listaTareas)
   {
      var html = "<li id='texto'><input onclick='Check("+i+")' type='checkbox' " + (listaTareas[i].isDone?"checked":"") + " >" + "<span>"+listaTareas[i].tarea+"</span><i onclick='borrar()' class='icon-trash' id='eliminar'></i></li>";
      lista.innerHTML += html;
      listaTareas.value =""; 
   }   
}
//funcion para chekear
function Check (_index){
    if(listaTareas[_index].isDone==false){
        listaTareas[_index].isDone=true;
        lista.childNodes[_index].childNodes[1].style.textDecoration="line-through";
    }else{
        listaTareas[_index].isDone=false;
        lista.childNodes[_index].childNodes[1].style.textDecoration="none";
    }
}
// function para borrar tareas 
function borrar()
{
    var texto=document.getElementById("texto");
    texto.parentNode.removeChild(texto);
}

/* //funcion general
var boton = document.getElementById("boton");
boton.addEventListener("click", onAgregarClick);
function onAgregarClick()
{
    tarea();
}

// funcion para agregar tareas
var salida = document.getElementById("salida");
var textarea= document.getElementById("textarea");

function tarea()
{
    var li = document.createElement("li");
	var span = document.createElement("span");
    var check = document.createElement("input");
    check.type= "checkbox";
   
    li.appendChild(check);
	li.appendChild(span);
	salida.appendChild(li);
    span.innerHTML =textarea.value;
	textarea.value =""; 
    
    var span2=document.createElement("span");
    li.appendChild(span2);
    span2.innerHTML='<i class="icon-trash "></i>';
    span2.classList.add("tacho");
    
	span2.addEventListener( "click" , onBorrarClick);
}

//funcion para borrar
function onBorrarClick(evento)
{ 
	padre = evento.target.parentNode.parentNode.parentNode;
	salida.removeChild(evento.target.parentNode.parentNode);
}
*/