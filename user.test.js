const {add,remove} =require ('./user.js')


let e ="irving";
let f ="pedro";

test("Verificaremos si el nombre irving se encuentra en la lista con la funcion add(): ", () => {
  expect(add(e)).toBe(false);
});

test("Verificaremos si el nombre pedro se encuentra en la lista con la funcion remove(): ", () => {
  expect(remove(f)).toBe(false);
});