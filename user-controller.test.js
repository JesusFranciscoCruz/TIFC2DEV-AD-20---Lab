const {findById,findByEmail}= require('./user-controller.js')

let h ='1';
let i ='5';
let j ="irving@hotmail.com";
let k ="Jesus@hotmail.com";

//exito 
test("Verificaremos si el id Alan se encuentra en la lista con la funcion findById(): ", () => {
  expect(findById(h)).toBe(true);
});

//falla
test("Verificaremos si el id irving se encuentra en la lista con la funcion findById(): ", () => {
  expect(findById(i)).toBe(false);
});

//exito
test("Verificaremos si el correo de jesus se encuentra en la lista con la funcion findByEmail(): ", () => {
  expect(findByEmail(k)).toBe(true);
});

//falla
test("Verificaremos si el correo de irving se encuentra en la lista con la funcion findByEmail(): ", () => {
  expect(findByEmail(j)).toBe(false);
});
