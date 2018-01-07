"use strict";

var in1 = document.getElementById("in1");
var out1 = document.getElementById("out1");
var time = document.getElementById("time");
var nbres = document.getElementById("nbres");

var isNumeric = function(n)
{
  return ! isNaN(parseFloat(n)) && isFinite(n);
};

function find_diviseurs()
{
  var t0 = performance.now();
  time.innerHTML = "";
  nbres.innerHTML = "";
  out1.innerHTML = "";
  var classes = ["alert", "alert-danger"];
  if(! isNumeric(in1.value))
  {
    out1.innerHTML = "Pas de valeur";
    for(var cpt=0; cpt<classes.length; cpt++)
      out1.classList.add(classes[cpt]);
    return;
  }

  var input = in1.value;
  var result = [];
  for(var cpt=0; cpt<classes.length; cpt++)
    out1.classList.remove(classes[cpt]);

  for(var cpt=1; cpt<=input; cpt++)
  {
    if(input % cpt === 0)
      result.push(cpt);
  }
  out1.innerHTML = result.join("<br />");
  var t1 = performance.now();
  time.innerHTML = ("ΔT = " + (t1 - t0) + " ms");
  nbres.innerHTML = input + " a " + result.length + " diviseurs";
}
