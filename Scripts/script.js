function fall(c, g, grav) {
  var gg = 0;
  document.getElementById('planet').style.backgroundColor = c;
  $("#gravedad").text(grav);
  var caida = setInterval(function () {
    gg += g;
    document.getElementById('ball').style.marginTop = gg + "px";
    if (gg >= 450) {
      clearInterval(caida);
    }
  }, 1);


}

function pruebaGenerica() {
  var gravedad = document.getElementById('gravedadGenerica').value;
  console.log(gravedad);

  fall('',(gravedad/9.8)*5, gravedad + " m/s²");
}