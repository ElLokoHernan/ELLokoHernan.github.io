//animacion de foto
function bigImg(x) {
    document.getElementById('foto').src='DSC_1541.JPG';
    x.style.width = "auto";

}

function normalImg(x) {
  document.getElementById('foto').src='2.png';
  x.style.height = "350px";
  x.style.width = "autopx";
}

function AnimacionFotos(x){
    x.style.height = "autopx";
}

function TamañoNormal(x){
    x.style.height = "autopx";
}


//menu
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }

  //ocultar
  function ocultarEdu(){
    document.getElementById('Educacion').style.display='none'
  }
  function ocultarTrab(){
    document.getElementById('Trabajo').style.display='none'
  }
  function ocultarPerf(){
    document.getElementById('Perfil').style.display='none'
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