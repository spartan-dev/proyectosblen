/* scope global */
const name = "curso nov 2020";
const edad = 37; // numero
const metalero = true; // boolean
const borracho = null; //  sin valor
const regueton = undefined; // no definido

function decirhola(name) {
  /* scope local */
  let texto = "Blenio rules man!!:";

  console.log(texto + name);
}

/* llamar o invocar mi funcion  */
decirhola(name);
