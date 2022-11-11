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
        ]
     },
     index : 0,
      method: {

        cambiaOggettoRight: function(){
            this.indice++;
            if( this.indice > this.obj.length ){
              return this.indice = 0;
            }
        }    
,
        cambiaOggettoLeft: function(){
            this.indice--;
            if( this.indice > this.obj.length ){
                return this.indice = 0;
            }    

     }
    }
}
 );