(function (window) {
	var despedir = {};
	var despide = "Good Bye";
despedir.saluda = function (nombre) {
  console.log(despide + " " + nombre);
}
window.despedir = despedir;
})(window);
