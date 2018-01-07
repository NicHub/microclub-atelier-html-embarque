"use strict";
function main(source)
{
    var now = new Date();
    console.log("fonction main " + now.getTime() +
                "\nsource = " + source);
}
main("index.js");