//Youngest name

let array=[{name:'Temo',age:25},{name:'Lasha', age:21},{name:'ana',age:28}]

let youngestUser = array[0];
function youngestName(x){
    for (let i = 0; i < x.length; i++) {
        if (x[i].age < youngestUser.age) {
            youngestUser = x[i];
        }
    }
    return youngestUser
  }
    console.log(`${youngestName(array).name} is youngest `)


// winner 

function getNumber(){
  return parseInt(Math.random()*6)+1;
}

let numberA=getNumber();
let numberB=getNumber();
let a=0;
let b=0;

while(numberA != 3){
  numberA=getNumber();
  a++
}

while(numberB != 3){
  numberB=getNumber();
  b++
}

console.log("count A = "+ a)
console.log("count B = "+ b)

if(a < b ){
  console.log("winner A")
}else if( b < a ) {
  console.log("winner B")
}else{
    console.log("No winner")
}



// New user

const user = {
  name:'James',
  surname:'Bond',
  age:30
}

function userToNewUser(user) {
  const newUser = {};

  for (let key in user) {
      newUser[key] = user[key];
  }
  return newUser;
  
}

const newUser = userToNewUser(user);
console.log( newUser);
console.log(user)