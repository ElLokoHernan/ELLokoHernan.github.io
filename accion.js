//animacion de foto
function bigImg(x) {
  x.style.height = "100px";
  x.style.width = "auto";

}

function normalImg(x) {
  x.style.height = "350px";
  x.style.width = "autopx";
}


//menu
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

  //ocultar
  function ocultar(){
    document.getElementById('contacto').style.display='none'
  }
 //mostrar 
 function mostrarEdu(){
    document.getElementById('Educacion').style.display='block'
  }
  function mostrarTrab(){
    document.getElementById('Trabajo').style.display='block'
  }

  function mostrarPerf(){
    document.getElementById('Perfil').style.display='block'
  }