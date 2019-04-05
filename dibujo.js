var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  const color = document.getElementById("color")
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = color.value;
  var espacio = ancho / lineas;

  for(l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, ancho);
    console.log("Linea " + l);
  }

  dibujarLinea(colorcito, 0, 1, 1, ancho);
  dibujarLinea(colorcito, 1, 299, 299, ancho);

}
