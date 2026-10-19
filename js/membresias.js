function calcularFechaFin(fechaInicio, tipo) {
  const dias = { mensual: 30, trimestral: 90, anual: 365 };
  if (!dias[tipo]) throw new Error("Tipo de membresía inválido");
  const fin = new Date(fechaInicio);
  fin.setDate(fin.getDate() + dias[tipo]);
  return fin;
}
module.exports = { calcularFechaFin };
