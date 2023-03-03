const form = document.getElementById('appointment-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const date = form.elements.date.value;
  const time = form.elements.time.value;

  console.log(`Nombre: ${name}`);
  console.log(`Correo electrónico: ${email}`);
  console.log(`Fecha: ${date}`);
  console.log(`Hora: ${time}`);
});
