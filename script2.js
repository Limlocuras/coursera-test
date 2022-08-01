(function (window) {
	var hola = {};
	var hello = "Hello";
hola.saluda = function (nombre) {
  console.log(hello + " " + nombre);
}
window.hola = hola;
})(window);
