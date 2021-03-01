// Iteration 1: All directors? - Get the array of all directors.

let getAllDirectors =(pelis)=>{
  let directors =pelis.map(peli=>peli.director);
  return directors;
};

// let getAllDirectors =(pelis=>{
//   const directors = pelis.map(peli=>peli.director);
//   return directors
// });



// console.log(getAllDirectors(movies));


// console.log (getAllDirectors (movies));
// // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make i
// //t unified (without duplicates)?
// let directorsReduced=(movies)=>{
//   let directorsReducedArray=[];
//   if (movies.length==0){return null;}  
//   movies.forEach(peli =>{    
//     if (directorsReducedArray.indexOf(peli.director) == -1) {     
//       directorsReducedArray.push(peli.director);
//     }
//   }) ;
//   return directorsReducedArray;
// }
// console.log (directorsReduced (movies));
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


let howManyMovies =(pelis)=>{
  let movDirector="Steven Spielberg"; //Pongo variables por si luego hace falta reaprovechar la función
  let movGenre="Drama";               //Pongo variables por si luego hace falta reaprovechar la función
  let uniquedirected = pelis.filter(peli=>peli.director==movDirector && peli.genre.includes(movGenre));
  return uniquedirected.length;
}

//  console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

  let ratesAverage=(pelis)=>{        //Creamos func solicitada
    if (pelis.length==0){return 0};  //Si recibe array vacio devuelve cero
    let totalRate=pelis.reduce((accumulator,currentMovie)=>{     //creamos subfuncion que trata el array con REDUCE
      if (currentMovie.rate==null){                              //Si recibe valor null, lo trata como un valor = 0
        return Number (accumulator + 0);}
      else {
      //console.log("accumulator is: ", accumulator, "and current value is: ", currentMovie.rate);   //Aquí podemos ir viendo lo que nos va devolviendo la función a cada iteración.
        return accumulator + Number(currentMovie.rate);
      }
    },0); //establecemos valor inicial del reduce a cero para que la suma tenga sentido, sino, nos iguala el primer valor al objeto entero y se hace la picha un lio, esto me ha costado verlooooooooooooo
  
    return Math.round(totalRate/pelis.length*100)/100;
  }
  
  // console.log ('Iteration 3 movieRateAverage result: ' + ratesAverage(movies));
  
// Iteration 4: Drama movies - Get the average of Drama Movies

let dramaMoviesRate =(pelis)=>{
  let movGenre="Drama";
  if (pelis.length==0){return 0};  //Si recibe array vacio devuelve cero
  let dramaMovies = pelis.filter(peli=>peli.genre.includes(movGenre));
  return ratesAverage(dramaMovies);
}
// console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// function orderByYear(pelis){
//   let ordererdMovies;
//   ordererdMovies = pelis.sort((a, b) => {
//     if (a.year - b.year === 0){
//       return a.title.localeCompare(b.title);
//     } else {
//       return a.year - b.year
//     }
//   });
// return ordererdMovies;

// }
function orderByYear(movies){
  const newArray = movies.map((movie) => movie);
  return newArray.sort((a, b) => {
    if (a.year - b.year === 0){
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year
    }
  });
}
// console.log(orderByYear(movies)); 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

let orderAlphabetically=(movies)=>{


  if (movies.length===0) {return []};

  let top20Array=[];
  let newMoviesArray=[...movies];
  newMoviesArray.sort((a,b)=>(a.title.localeCompare(b.title)))
  for (let i=0;i<newMoviesArray.length;i++){
   top20Array.push(newMoviesArray[i].title);
  }

  return top20Array.slice(0,20);
  }




  //orderAlphabetically(movies); 
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



function turnHoursToMinutes(pelis){
  let pelisInMins = pelis.map((peli) => peli);
  if (pelisInMins.length===0) {
    return []
  };
  let hoursToMinutes=(hours)=>{return parsetint(hours*60);}

  pelisMinuts=(peli)=>{
    let indexOfH=0;
    let indexOfMin=0;
    indexOfH = peli.duration.search('h');
    indexOfMin = peli.duration.search('min');

    if (indexOfMin != -1){ // indexOfH 
        return (hoursToMinutes(parseInt(peli.duration.substr(0,indexOfH)),10)+parseInt(peli.duration.substr(indexOfH+2,indexOfMin-indexOfH-2)));
    } else if (indexOfH != -1){
        return (parseInt(peli.duration.substr(indexOfH+2,indexOfMin-indexOfH-2)));
    }
    else {
        return (hoursToMinutes(parseInt(peli.duration.substr(0,indexOfH)),10));
    }
  }
  pelisInMins.forEach(peli => {peli.duration = pelisMinuts(peli)});
  return pelisInMins; 
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function turnHoursToMinutes(pelis){
  let pelisInMins = pelis.map((peli) => peli);
  if (pelisInMins.length===0) {
    return []
  };
  let hoursToMinutes=(hours)=>{
    return hours*60
  }
  pelisInMins.map((movie) => {

  })
}