/*

    1) Rimuovere il markup statico e inserisco le immagini in un Array; 
    2) Creo un ciclo for che contenga un template literal;
    3) Tutte le immagini sono nascoste tranne la prima, che avrà una classe specifica che la renderà visibile.

*/

// 1) Rimuovere il markup statico e inserisco le immagini in un Array; 

const myImages = [
    `<img src="img/01.webp" alt="">`,
    `<img src="img/02.webp" alt="">`,
    `<img src="img/03.webp" alt="">`,
    `<img src="img/04.webp" alt="">`,
    `<img src="img/05.webp" alt="">`
];

console.log('myImages', myImages, typeof myImages);

// Prendo i bottoni dall'HTML e li inserisco in delle variabili
const myButtonBack = document.querySelector('.my-button-back');
console.log('Indietro', myButtonBack, typeof myButtonBack);


const myButtonForward = document.querySelector('.my-button-forward');
console.log('Avanti', myButtonForward, typeof myButtonForward);

// Prendo il contenitore dall'HTML e lo inserisco in una variabile

const myCard = document.querySelector('.my-card');

// All'apertura del browser voglio che la prima immagine sia presente nel contenitore perciò la stampo nell'HTML

myCard.innerHTML = myImages[0];

let counter = 0;

// Creo l'evento che si verifica al clic del bottone "avanti" 

myButtonForward.addEventListener('click', function(){
    
    if (counter < myImages.length-1) {

    counter += 1;

    myCard.innerHTML = myImages[counter];

    console.log(counter);

    // Creo la condizione per cui se l'album finisce allora riparte dalla 1^ immagine
    } else if (counter == myImages.length-1) {
        
        counter = 0;

        myCard.innerHTML = myImages[counter]

        console.log(counter);

    }
})

// Creo una nuova variabile contatore che parta dalla fine dell'Array

let counterInverse = (myImages.length);

// Creo l'evento che si verifica al clic del bottone "indietro" 

myButtonBack.addEventListener('click', function(){

    if ((counter !== myImages.length) && (counter !== 0)) {

        counter -= 1;

        myCard.innerHTML = myImages[counter];

        console.log(counter);

        // Creo la condizione per cui se ci si trova sulla 1^ immagine allora l'album può fare il giro al contrario

        // Da Fissare

        }  else if ((counter == 0) && (counterInverse !== 0)) {

            counterInverse --

            myCard.innerHTML = myImages[counterInverse];

            console.log(counterInverse);
        }
})
