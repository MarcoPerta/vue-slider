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
            { Image: './img/basket.jpg' },
            { Image: './img/bicicle mountain.jpg' },
            { Image: './img/diving.jpg' },
            { Image: './img/runner.jpg' },
            { Image: './img/snowboard.jpg'}
        ],
        index : 0,
     },

     created() {setInterval( this.cambiaOggettoNext, 10000 )},
     
      methods: {

        // funzione per mandare vanti immagine
        cambiaOggettoNext(){
            this.index++;
            if( this.index > this.obj.length -1){
             this.index = 0;
            }
        }    
,
        // funzione per mandare indietro immagine
        cambiaOggettoPrev(){
            this.index--;
            if( this.index < 0){
             this.index = this.obj.length -1;
            }    
        }    
,        
        // pallini che restituisce la corrispondente immagine
        cambiaOggettoDot(indice){
            this.index = indice;
        }    
        
    }
}
 );