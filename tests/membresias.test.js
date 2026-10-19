const { calcularFechaFin } = require("../js/membresias");

test("membresía mensual dura 30 días", () => {
  const fin = calcularFechaFin("2026-10-01", "mensual");
  expect(fin.toISOString().slice(0, 10)).toBe("2026-10-31");
});

test("tipo inválido lanza error", () => {
  expect(() => calcularFechaFin("2026-10-01", "semanal")).toThrow();
});
