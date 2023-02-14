const credenciales = {
  email: "estudiante@guayerd.com",
  password: "123456",
};

let form = document.querySelector("form");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  window.location.href = "../map.html";
  if (
    form.email.value === credenciales.email &&
    form.password.value === credenciales.password
  ){
    localStorage.setItem("logged", true);
  } else {
    alert("Las credenciales introducidas son invalidas");
  }
});

if (JSON.parse(localStorage.getItem("logged"))) {
  window.location.href = "../map.html";
}
