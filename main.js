// realizzare uno slider
// Inserire 2 frecce a sinistra e a destra dell'immagine momentanea dello slider che permettono di andare avanti e indietro tra le immagini
// BONUS:
// nello slider ci sono dei pallini in basso al click dei pallini cambia l'immagine nello slider
// a ogni 3 sec l'immagine cambia automaticamente senza nessun click da parte nostra



var app = new Vue(
    {
      el: '#root',
      data: {
        obj: [
            { id: 1, Image: './img/basket.jpg' },
            { id: 2, Image: './img/bicicle mountain.jpg' },
            { id: 3, Image: './img/diving.jpg' },
            { id: 4, Image: './img/runner.jpg' },
            { id: 5, Image: './img/snowboard.jpg'}
        ],
        index : 0,
     },

    //  created: setTimeout( cambioImage, 3000 ),
     
      methods: {

//         function cambioImage(){
//             return this.index++;
//         }
// ,
        // funzione per mandare vanti immagine
        cambiaOggettoNext(){
            this.index++;
            if( this.index > this.obj.length -1){
            return this.index = 0;
            }
        }    
,
        // funzione per mandare indietro immagine
        cambiaOggettoPrev(){
            this.index--;
            if( this.index < 0){
            return this.index = this.obj.length -1;
            }    
        }    
,
        // primo palline restituisce prima immagine
        cambiaOggettoDot1(){
            return this.index = 0
        }    
,        
        // tutto il resto dei pallini che restituisce la corrispondente immagine
        cambiaOggettoDot(){
            return this.index++ 
        }    

     
    }
}
 );