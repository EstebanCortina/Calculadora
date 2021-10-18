function init(){
  var a;
  var b;
  var c;
  var valor;
  var memoria;
  var operacion;
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var cero = document.getElementById('cero');
var borrar = document.getElementById('borrar');
var masMenos = document.getElementById('masMenos');
var porciento = document.getElementById('porciento');
var dividir = document.getElementById('dividir');
var mmenos = document.getElementById('mmenos');
var mmas = document.getElementById('mmas');
var mostrar = document.getElementById('mostrar');


uno.onclick = function(e){
  
  pantalla.textContent = pantalla.textContent + "1";
}
dos.onclick = function(e){
  
  pantalla.textContent = pantalla.textContent + "2";
}
tres.onclick = function(e){
  
  pantalla.textContent = pantalla.textContent + "3";
}
cuatro.onclick = function(e){
  
  pantalla.textContent = pantalla.textContent + "4";
}
cinco.onclick = function(e){
  
  pantalla.textContent = pantalla.textContent + "5";
}
seis.onclick = function(e){
  
  pantalla.textContent = pantalla.textContent + "6";
}
siete.onclick = function(e){
  
  pantalla.textContent = pantalla.textContent + "7";
}
ocho.onclick = function(e){
  
  pantalla.textContent = pantalla.textContent +"8";
}
nueve.onclick = function(e){
  
  pantalla.textContent = pantalla.textContent + "9";
}
cero.onclick = function(e){
 
  pantalla.textContent = pantalla.textContent + "0";
}
punto.onclick = function(e){

  pantalla.textContent = pantalla.textContent +".";
}
borrar.onclick = function(e){
  reset();
}
mas.onclick = function(e){
  a = pantalla.textContent;
  operacion = "suma";
  limpiar();
}
menos.onclick = function(e){
  a = pantalla.textContent;
  operacion = "resta";
  limpiar();
}
dividir.onclick = function(e){
  a = pantalla.textContent;
  operacion = "division"
  limpiar();
}
multi.onclick = function(e){
  a = pantalla.textContent;
  operacion = "multi";
  limpiar();
}
masMenos.onclick = function(e){
  a = pantalla.textContent;
  operacion = "masMenos";
  resolver();
}
porciento.onclick = function(e){
  a = pantalla.textContent;
  operacion = "porciento";
  resolver();
}

igual.onclick = function(e){
  b = pantalla.textContent;
  resolver();
}

mmas.onclick = function(e){
  a = pantalla.textContent;
  operacion = "mmas";
  resolver();
}
mmenos.onclick = function(e){
  a = pantalla.textContent;
  operacion = "mmenos";
  resolver();
}
mostrar.onclick = function(e){
  operacion = "mostrar";
  resolver();
}

function reset(){
  pantalla.textContent = "";
  a = 0;
  b = 0;
  operacion = "";
}

function limpiar(){
  pantalla.textContent = "";
}

memoria = 0;
function resolver(){
  var res = 0;
  
    switch(operacion){
      case 'suma':
        res = parseFloat(a) + parseFloat(b);
        reset();
        pantalla.textContent = res;
        break;
      case 'resta':
        res = parseFloat(a) - parseFloat(b);
        reset();
        pantalla.textContent = res;
        break;
      case 'division':
        res = parseFloat(a) / parseFloat(b);
        reset();
        pantalla.textContent = res;
        break;
      case 'multi':
        res = parseFloat(a) * parseFloat(b);
        reset();
        pantalla.textContent = res;
        break;
      case 'masMenos':
        res = -a;
        reset();
        pantalla.textContent = res;
        break;
      case 'porciento':
        res = parseFloat(a) / 100;
        reset();
        pantalla.textContent = res;
        break;
      case 'mmas':
        memoria += parseFloat(a);
        reset();
        break;
      case 'mmenos':
        memoria -= parseFloat(a);
        reset();
        break;
      case 'mostrar':
        pantalla.textContent = memoria;
    }
    
  
}
}
