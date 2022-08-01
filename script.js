(function () {
    var nombres = ["Felipe", "Juan", "Jose", "Jeniffer", "Miriam", "David", "Alex", "Sergio", "Cristian", "Jack"];
    for (var nombre in nombres) {
       var start = nombres[nombre].charAt(0).toLowerCase();
        if (start === 'j') {
           despedir.saluda(nombres[nombre]);
   } else {
     hola.saluda(nombres[nombre]);
   }
 }
 
 })();
