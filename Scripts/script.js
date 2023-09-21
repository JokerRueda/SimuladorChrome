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
  var select = document.getElementById('select');
  var gravedad = document.getElementById('gravedadGenerica').value;
  pruebaG(select);
  console.log(gravedad);

  fall('',(gravedad/9.8)*5, gravedad);
}

function pruebaG (select) {
  var selectedOption = select.selectedIndex;
  console.log(selectedOption.value + ': ' + selectedOption.text);
};
