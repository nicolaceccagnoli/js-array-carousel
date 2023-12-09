/*

    1) Rimuovere il markup statico e inserisco le immagini in un Array; 
    2) Creo un ciclo for che contenga un template literal;
    3) Tutte le immagini sono nascoste tranne la prima, che avrà una classe specifica che la renderà visibile.

*/

// 1) Rimuovere il markup statico e inserisco le immagini in un Array; 

const myImages = [
    `<img src="img/01.webp" alt="Spiderman Miles Morales">`,
    `<img src="img/02.webp" alt="Ratchet">`,
    `<img src="img/03.webp" alt="Fortnite">`,
    `<img src="img/04.webp" alt="Cyberpunk">`,
    `<img src="img/05.webp" alt="The Avengers">`
];

console.log('myImages', myImages, typeof myImages);

// Prendo i bottoni dall'HTML e li inserisco in delle variabili
const myButtonBack = document.querySelector('.my-button-back');
console.log('Indietro', myButtonBack, typeof myButtonBack);


const myButtonForward = document.querySelector('.my-button-forward');
console.log('Avanti', myButtonForward, typeof myButtonForward);

// Prendo il contenitore dall'HTML e lo inserisco in una variabile

const myCard = document.querySelector('#my-card');

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
    } else if (counter !== myImages.length) {
        
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

        }  else if (counter == 0) {

            counter--;

            counter = myImages.length-1;

            myCard.innerHTML = myImages[4];

            console.log(counter);
        }
})

/* BOUNS 2: 

    1) Crea una Thumbnail dove puoi vedere l'anteprima delle foto nell'album;
    2) Cliccando sulle foto nella Thumbnail nell'album viene visualizzata la foto corrispondente;

*/

let thumbnailImg1 = document.createElement('img');
thumbnailImg1.src = 'img/01.webp';

let thumbnailImg2 = document.createElement('img');
thumbnailImg2.src = 'img/02.webp';

let thumbnailImg3 = document.createElement('img');
thumbnailImg3.src = 'img/03.webp';

let thumbnailImg4 = document.createElement('img');
thumbnailImg4.src = 'img/04.webp';

let thumbnailImg5 = document.createElement('img');
thumbnailImg5.src = 'img/05.webp';


const imgListThumbnail = [thumbnailImg1, 
                          thumbnailImg2, 
                          thumbnailImg3, 
                          thumbnailImg4, 
                          thumbnailImg5];

// 1) Crea una Thumbnail dove puoi vedere l'anteprima delle foto nell'album;

const myThumbnail = document.getElementById('my-thumbnail');
console.log('myThumbnail', myThumbnail, typeof myThumbnail);

    // Aggiungo delle classi a My Thumbnail
    myThumbnail.classList.add('d-flex', 'justify-content-around', 'align-items-center', 'rounded');

// Creo un ciclo che mi stampi dei Tag a con all'interno My Images

for (let i = 0; i < imgListThumbnail.length; i ++ ) {

    // Creo un tag "a" all'interno dell'HTML e lo metto Thumbnail
    let myAnchor = document.createElement('a');

    myAnchor.append(imgListThumbnail[i]);
    console.log('myAnchor', myAnchor, typeof myAnchor);

    myThumbnail.append(myAnchor);

    imgListThumbnail[i].addEventListener('click', function(){

        myCard.innerHTML = myImages[i];

    })

}

// myThumbnail.append(myAnchor);
// console.log('myThumbnail', myThumbnail, typeof myThumbnail);


