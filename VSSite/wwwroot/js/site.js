// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var oldSize = document.getElementById('pink-text').style.fontSize;

function newSize() {
    document.getElementById('pink-text').style.fontSize = "30px";
}

function revertSize() {
    document.getElementById('pink-text').style.fontSize = oldSize;
}