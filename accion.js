//animacion de foto
function bigImg(x) {
    document.getElementById('foto').src='DSC_1541.JPG';
    x.style.width = "auto";

}

function normalImg(x) {
  x.style.height = "350px";
  document.getElementById('foto').src='2.png';
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