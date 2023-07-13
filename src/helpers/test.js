function formatDate(fechaString) {
  const [day, month, year] = fechaString.split("/").map(Number);
  const diaSeleccionado = new Date(year, month - 1, day);
  return diaSeleccionado;
}
