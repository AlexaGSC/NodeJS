const cadena = "Hello there captain kenobi";
const numchar = cadena.length;    //Devuelve la longitud del string.
const car;
var contador = 0;
for (let i = 0; i < numchar; i++) {
   car = cadena.charAt(i);    //recupera el caracter i del string.
   if ((car === "a")) {
       contador++;
   }
}
console.log("Número de Vocales: " + contador);
