function header(exercise) {
  console.log("-----------------------", exercise, "-----------------------");
}

/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
header("esercizio1")

const exercise1= function(param1,param2){
  const arrayParam1= [...param1]
  const arrayParam2= [...param2]
  const [first, second]= arrayParam1
  const [, ...rest]= arrayParam2
  let lastThree= rest.join("")
  const union= first + second + lastThree
  
  return union.toUpperCase()
}


console.log(exercise1("ciao","raga"));
/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
header("esercizio2")
function arrayRandom(array) {
  const randomArray= []
  for (let i = 0; i < 10; i++) {
    const element= (Math.floor(Math.random() * 101))
    randomArray.push(element)
  }
  return randomArray
}

console.log(arrayRandom());




/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/
header("esercizio3")
const number= [20,45,33,78,84,91,98]

function numeriPari(array) {
  const result = number.filter(number => number %2===0);
  return result
}

console.log(numeriPari(number));
/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
header("esercizio4")

function summ(array) {
  let tot = 0;
  for (let i = 0; i < array.length; i++) {
    tot += array[i]
  }
  return tot
}

console.log(summ(number));
/* ESERCIZIO 5
Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
header("esercizio5")

const num= [34,56,3,5,3]

let sum= num.reduce((temp,singlenum)=>{
  return temp+singlenum;
},0); 0

console.log(sum);

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
header("esercizio6")

function exercise6(array,n) {
  const newArrey= array.map(x => x + n)
  return newArrey
}

console.log(exercise6(number,10));
/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
header("esercizio7")
const string=["stamttina", "volevo", "morire"]

function lunghezza(array) {
  const newArray=array.map(array=> array.length)
  return newArray
}

console.log(lunghezza(string));
/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
header("esercizio8")
function dispari(params) {
  let newArray=[]
  for (let i = 0; i < 100; i++) {
    let element= i
    if (element %2 !==0) {
      newArray.push(element)
    }
  }
  return newArray
}

console.log(dispari());
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
header("esercizio10")

function oldMovie(array) {
  let movieYear= parseInt(array[0].Year)
  let namemovie=""
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i].Year) < movieYear) {
      movieYear= parseInt(array[i].Year)
      namemovie= array[i].Title
    }
  } 
  return namemovie
}


console.log(oldMovie(movies));
/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
header("esercizio11")
const numberOfMovies = (array) => {
  return array.length
}
console.log(numberOfMovies(movies));
/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
header("esercizio12")

const filmsArray = (array) => {
  const newArray=array.map(array => array.Title)
  return newArray
}
console.log(filmsArray(movies));
/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
header("esercizio13")


const filmsCurrentMillenial = (array) => {
  const newArray=[]
  for (let i = 0; i < array.length; i++) {
    const element = array[i].Year;
    const filmName= array[i].Title
    if (element >2000) {
      newArray.push(filmName)
      newArray.push(element)
    }
  }
  return newArray
}
console.log(filmsCurrentMillenial(movies));
/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
header("esercizio14")
const SearchFilm = ( array, imdbID) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i].imdbID;
    switch (true) {
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      case element=== imdbID:
        console.log(array[i]);
        break;
      default:
    }
  }
}

SearchFilm(movies,"tt2395427")
/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
header("esercizio15")
const totalYears = (array) => {
  let totalYears= 0
  for (let i = 0; i < array.length; i++) {
    const element = parseInt(array[i].Year);
    totalYears += element
  }
  return totalYears
}
console.log(totalYears(movies));