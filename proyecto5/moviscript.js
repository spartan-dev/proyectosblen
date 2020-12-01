console.log("proyecto movies");

console.log(movies.length, "total de peliculas que tenemos ");
//* dede el backend  llega el arreglo y en el front debo presentarlo
//!movies es el nomre de mi arreglo en data
//todo function que me deje traer el top 20 de peliculas por titulo
const topTwenty = (movies) => {
  // este solo trae 20 movis

  //console.log(movies.slice(0, 20));
  let misveinteMovis = [];
  for (let i = 0; i < movies.length; i++) {
    if (i < 20) {
      misveinteMovis[i] = movies[i].title;
    }
  }
  //console.log(misveinteMovis, "hay weyyyyy 💀");
  return misveinteMovis;
};
topTwenty(movies);
//todo las 12 pero ustedes no las misiones de hercules
//todo Iteration 1: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
  let reducido = movies.reduce((total, currentValue) => {
    if (currentValue.rate == "") {
      currentValue.rate = 0;
    }
    return (total += parseInt(currentValue.rate));
  }, 0);
  console.log(reducido, movies.length);
  return Math.round((reducido / movies.length) * 100) / 100;
};
console.log(ratesAverage(movies));
//todo Iteration 2: Drama movies - Get the average of Drama Movies

//todo Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

//todo Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

//todo  iteracion5: Alphabetic Order - Order by title and print the first 20 titles
