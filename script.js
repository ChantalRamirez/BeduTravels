/*
document.querySelector('#search-button').addEventListener("click", ()=> {
    var busqueda = document.querySelector("#search-input").value;
    alert("El usuario quiere ir a: " + busqueda);
  });

  */

  var string = 'Cadena de texto';
  var number = 123;
  var bool = true;
  var nulo = null;
  var indefinido = undefined;
  var valor1 = 'piedra';
  var valor2 = 'papel';

var juego = function (valor1,valor2){  
 
  if( valor1 === valor2){
    return 'Es un empate';
  } 
  
  if (valor1 === 'piedra'){
    if (valor2 === 'tijera'){
      return 'gana valor 1';
    } else{
      return 'gana valor 2'
    }
  }  
  if (valor1 === 'papel'){
    if (valor2 === 'piedra'){
      return 'gana valor 1';
    } else{
      return 'gana valor 2'
    }
  }
  if (valor1 === 'tijera'){
    if (valor2 === 'papel'){
      return 'gana valor 1';
    } else{
      return 'gana valor 2'
    }
  }
  
}

var contador = 0;

for (contador;contador <=100;contador++){
    if (contador%2 === 1){
      console.log(contador+'es par');
    }else {
      console.log(contador+'es impar');
    }

}

function parEimpar(limite){
  var contador = 1;
  for (contador;contador < limite; contador++){
      if (contador%2 === 1){
        console.log(contador + 'es impar');
      }else{
        console.log(contador + 'es par');
      }
  }
}

//  $('#search-button').on('click', ()=> {
//     var busqueda = $('#search-input').val();
//     $('.main-section').css({
//       backgroundImage: "url(" + busqueda + ")"
//     })
//     // alert("El usuario quiere ir a: " + busqueda);
//   });