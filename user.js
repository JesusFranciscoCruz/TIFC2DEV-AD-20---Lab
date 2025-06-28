const users= ['Alan','Jesus','Rebeca','Daniel']

function add(e) {
  const existe = users.some(nombre => nombre === e);
  
  if(existe) {
     return true;
  } else {
    return false;
  }
}



function remove(f){
 const existe = users.some(nombre => nombre === f);
  
  if(existe) {
    return true;
  } else {
    return false;
  }

}

module.exports = { add, remove };