let cerrarSesion = () => {
  localStorage.removeItem("logged");
  window.location.href = "../index.html";
};

if (
  JSON.parse(localStorage.getItem("logged")) === false ||
  JSON.parse(localStorage.getItem("logged")) === null
) {
  window.location.href = "../index.html";
}


// Creacion de las cards y consumo de la API
fetch(
  "https://639a535a3a5fbccb5264b073.mockapi.io/jugadores"
)
  .then((response) => response.json())
  .then((data) => {
    let jugadores = data.map((jugador) => {
    return`
     <div class="col-12 col-sm-6 col-md-6 col-xl-4">
       <div class="card my-4">
         <div class="img-wrapper">
           <img src="https://julioavantt.github.io/guayerd-project-images/img/${jugador.dorsal}.jpg" class="card-img-top" alt="${jugador.name}">
           <span>${jugador.dorsal}</span>
         </div>
         <div class="card-body">
            <h5 class="card-title m-1">${jugador.name}</h5>
            <p class="card-text m-1">Edad: ${jugador.edad}</p>
            <p class="card-text m-1">Posicion: ${jugador.posicion} </p>
            <p class="card-text m-1">Peso: ${jugador['stats-fisico'].peso}</p>
            <p class="card-text m-1">Altura: ${jugador['stats-fisico'].altura}</p>
            <p class="card-text m-1">Equipo Actual: ${jugador['equipo-actual']}</p>
            <p class="card-text m-1">Fecha de nacimiento: ${jugador['fecha-nacimiento']}</p>
          </div>
        </div>
      </div>`})
    let section = document.querySelector("section")
    section.innerHTML = jugadores.join().replaceAll(",", "");
  })
  .catch((error) => console.log(error));