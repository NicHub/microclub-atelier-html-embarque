"use strict";

function get_js_version()
{
  var jsv =
  {
    versions: [
      "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2.0"
    ],
      version: ""
  };

  var d = document;

  for(var i=0; i<jsv.versions.length; i++)
  {
    var g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0];

      g.setAttribute("language", "JavaScript" + jsv.versions[i]);
      g.text = "jsv.version='" + jsv.versions[i] + "';";
      s.parentNode.insertBefore(g, s);
  }

  return jsv.version;
}
console.log("START");
console.log("JavaScript Version: " + get_js_version());
var el = document.getElementById("JSversion");
if(el != null && el.value == '')
{
  console.log("Console + HTML");
  el.innerHTML = get_js_version();
}
else
{
  console.log("Console seulement");
}
