if (JSON.parse(localStorage.getItem('logged')) === false || JSON.parse(localStorage.getItem('logged')) === null) {
  window.location.href = "../index.html";
}


const objetoMapa = [
  {
    jugador: "Qatar 2022",
    coordenada: [25.2841478, 51.4419568],
    ciudad: "World Cup",
  },
  {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
  },

  {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
  },
  {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
  },
];

let select = document.querySelector("select");

objetoMapa.map(function (futbolista) {
  let option = document.createElement("option");
  select.appendChild(option);
  option.innerHTML = futbolista.jugador;
});



let center = [25.2841478, 51.4419568];

var map = L.map("map").setView(center, 12);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

let iconMap = L.icon({
  iconUrl: "/media/marker.png",
  iconSize: [30,30],
  iconAnchor: [22, 44],
  popupAnchor: [-6, -43]
})

let marker = L.marker(center, {icon: iconMap}).addTo(map)

marker.bindPopup("<b>Qatar 2022</b><br>World Cup").openPopup()

function changeMap() {
  const objeto = objetoMapa.find((item) => item.jugador === select.value);
  map.setView(new L.LatLng(...objeto.coordenada), 11);
  marker = L.marker(objeto.coordenada, {icon: iconMap}).addTo(map);
  marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
};

let cerrarSesion = () => {
  localStorage.removeItem("logged");
  window.location.href = "../index.html";
};
