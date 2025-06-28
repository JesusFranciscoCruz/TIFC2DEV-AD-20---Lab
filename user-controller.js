const users = [
  { ID: '1', EMAIL: 'Alan@hotmail.com' },
  { ID: '2', EMAIL: 'Jesus@hotmail.com' },
  { ID: '3', EMAIL: 'Rebeca@hotmail.com' },
  { ID: '4', EMAIL: 'Daniel@hotmail.com' }
];


function getmail(){
  const x=[];

    for(const userEMAIL of users){
    
        x.push(userEMAIL.EMAIL);

    }  
return x;
}


function findByEmail(g) {
 const xx= getmail();

const existe = xx.some(email => email === g);
  if(existe) {
     return true;
  } else {
    return false;
  }
}

///////////////// funcion id ///////////////////
function getID(){
  const y=[];

    for(const userid of users){
    
        y.push(userid.ID);

    }  
return y;
}

function  findById(h){
 const yy= getID();

const existe = yy.some(id => id === h);

  if(existe) {
     return true;
  } else {
    return false;
  }
}

module.exports = { findById , findByEmail };