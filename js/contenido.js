const retornoCardContenido = (contenido)=> {
   const {bebida, titulo, marca, cantidad} = contenido
   return `<div class="col s12 m6 l3">
               <div class="card z-depth-2">
                  <div class="card-content black">
                     <p class="yellow-text">Bebida: <span class="white-text">${marca}</span></p>
                     <p class="yellow-text">DISPONIBILIDAD: <span class="white-text">${cantidad}</span></p>
                  </div>
               </div>
         </div>`
}

const retornoCardError = ()=> {
   return `<div class="center white-text"> 
               <br><br><br><br> 
               <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
               <br><br> 
               <i class="large material-icons">sentiment_very_dissatisfied</i> 
               <br><br> 
         </div>`
}


const obtenerContenido = (URL)=> {
let cardsAmostrar = ""
      fetch(URL)
         .then((response)=> response.json() )
         .then( (data)=> {
               for (contenido of data)
                  cardsAmostrar += retornoCardContenido(contenido)
               contenidoDOM.innerHTML = cardsAmostrar
         })
         .catch((error)=> contenidoDOM.innerHTML = retornoCardError() )
         .finally(()=> cargandoDOM.innerHTML = "")
}