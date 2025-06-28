const {multiply,divide} = require('./calculator.js')

test("Multiplicación de dos numeros 10 x 2: ", () => {
  expect(multiply(10, 2)).toBe(20);
});

test("División de 40 / 5 : ", () => {
  expect(divide(40, 5)).toBe(8);
});

//tarea 3
test("División de 40 / 0 : ", () => {
  expect(divide(40, 0)).toBe(0);
});