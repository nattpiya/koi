

const messave = 'Hi Arnon';
//messave = "Hi Hyde";
console.log('Messge : ', messave);

let message2;
message2 = 'Hi Hidato';
message2 = '555';

/*let อานนท์;
อานนท์ = 'Hi อานนท์';*/

//console.log('Message อานนท์',อานนท์);


let humen;
let name;
name = 'xxx';

humen = name;

console.log("Humen : ", humen);

const amount = 10000000000;
const dadname = 'Chaiyong';
const momname = 'Prapai';
const address = '302/240 ถนนเสรีไทย กรุงเทพฯ';
const ageuniverse = '100000 Milion'

console.log("Amount : ", amount);
console.log("Dad : ", dadname);
console.log("Mom : ", momname);
console.log("Address : ", address);
console.log("Age of Universe : ", ageuniverse);

console.log(typeof dadname);
console.log(typeof 13);

//  alert("Hello");
/*  console.log("test");
 var a = 10;
 var b = 30
 var c = a + b;
 console.log(c); */

//TestCAll();


const myname = 'อานนท์ คงมานะเกียรติคุณ';
const myage = '23';
const myaddress = '302/240 ถนนเสรีไทย กรุงเทพฯ';
let history = `ชื่อ : ${myname}
อายุ : ${myage}
ที่อยู่ : ${myaddress} `;

console.log(history);

let value = "9" / "4.5";
console.log(typeof value);
console.log(value);

let value1 = "";
console.log(typeof value1);
let value2 = Number(value1);
console.log(typeof value2);

console.log("undefined :", Number(undefined));
console.log("null :", Number(null));
console.log("true :", Number(true));
console.log("false :", Number(false));
console.log(" :", Number(""));
console.log("  154  ", Number("  154  "));
console.log(" 1 5 4  :", Number(" 1 5 4 "));
console.log("140sss :", Number("140sss"));
console.log("434.23 :", Number("434.23"));



console.log("0 :", Boolean(0));
console.log(" :", Boolean(""));
console.log("null :", Boolean(null));
console.log("undefined :", Boolean(undefined));

console.log("NaN :", Boolean(NaN));
console.log("0 :", Boolean("0"));

console.log(" ", Boolean(" "));

let a = 1, b = 1;

console.log(++a);
console.log(b++);

console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");

console.log("4px" - 2);
console.log(7 / 0);
console.log("-9" + 5);
console.log("-9" - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log("\t\n" + 2);


/* let year = prompt('ddddddddd');

if(year == 1998)
{
alert("ถูกต้อง");
alert("คุณเก่งมากๆ");
}
else
{
    alert("555");
} */


/* let ans = prompt('Age');

alert((ans == 37) ? 'ถูกต้อง' : 'เกือบแล้ว');

function TestCAll() {

    alert("Hello2");

} */

/* let yname = prompt('what your name!');
if (yname == "arnon") {
    alert('true');
}
else {
    alert('false');
} */
/*
let point = prompt('what your point!');
if (point > 80) {
    alert('A');
}
else if (point > 70){
    alert('B');
}
else if (point > 60){
    alert('C');
}
else if (point > 50){
    alert('D');
}
else {
    alert('F');
}


 let yage = prompt('How old are you!');
 let price = (yage < 18) ? 2000 : 3500;
 alert(price); */

console.log("++++++++++++++++");

console.log(null || 2 || undefined);
//console.log( alert(1) || 2 || alert(3));
console.log(1 && null && 2);
//console.log(alert(1) && alert(2));
console.log(null || 2 && 3 || 4);

console.log(null);

console.log(2 || 3);

console.log(4);

/*
 let pointage = prompt('what Age 18 - 60!');
if (pointage > 17 && pointage < 61) {
    alert('True');
}
else {
    alert('F');
}


let pointage2 = prompt('what Age not 18 - 60!');
if (pointage2 < 18 || pointage2 > 60) {
    alert('True');
}
else {
    alert('F');
} */


/*

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "ไม่ตรงกับ case ใด ๆ เลย" );
}
*/

/*
function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }
  */

/*
let x = prompt('get?', '');

getParam(x);

function getParam(n) {
    let a = "";
    for(let i=0; i<n ; i++){
        a += '*';
    }
    alert(a);
}
*/

/*
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  function showOk() {
    alert( "You agreed." );
  }
  function showCancel() {
    alert( "You canceled the execution." );
  }
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);
  
*/
/*
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}
*/

/*
//เรื่อง Object
let user = {
    name: "John",
    age: 30,
    height: 176,
    isSingle: true,
  };

  console.log(user.age);
  alert(user.age);

*/

/*
  let propertiesName = "age";

  let obj = {
    propertiesName: 20, // จะได้ key เป็น propertiesName
  }
  
  console.log(obj);
  
*/

/*

  let propertiesName = "age";

  let obj = {
  [propertiesName]: 20, // จะได้ key เป็น age
}

console.log(obj);
*/

/*
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {};  // เอาค่าชื่อมาจากตัวแปร
bag[fruit] = 5;
*/


/*
//Object Compute
let mkey = prompt('Key');
let mvalue = '';

objkey = {};

while (mkey.toLowerCase() != "stop") {
    let mvalue = prompt('Value');
    objkey[mkey] = mvalue;

    mkey = prompt('Key');
}

console.log(objkey);
*/
/*

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
  alert( key );  // name, age, isAdmin
  }
  */

  /*
  let user = { name: 'John' };

  let admin = user;
  
  admin.name = 'Pete'; // เปลี่ยน properties name ใน admin
  
  alert(user.name); // 'Pete', properties name ใน user ก็จะถูกเปลี่ยนเช่นเดียวกัน
  */


/*

 let user = { name: "John" };

 let permissions1 = { canView: true };
 let permissions2 = { canEdit: true };
 
 // copies all properties from permissions1 and permissions2 into user
 Object.assign(user, permissions1, permissions2);

 console.log(user);
 
 // now user = { name: "John", canView: true, canEdit: true }
 
 */

/*
exam Obj ข้อ 20
 // before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  

multiplyNumeric(menu, 2);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

*/

/*

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// ใส่ function sayHi ไปให้ทั้งสอง Object
user.sayHi = sayHi;
admin.sayHi = sayHi;

// การเรียกฟังก์ชันทั้งสองครั้งนี้ this จะแตกต่างกัน
user.sayHi(); // John  (this จะหมายถึง user)
admin.sayHi(); // Admin  (this จะหมายถึง admin)

admin['sayHi'](); // Admin (dot หรือ square brackets ก็ได้)

*/

/*
let user = {
    name: "John",
    go: function() { alert(this.name) }
  }
  
//console.log(user.go());
user.go();
*/

/* ตัวอย่างนี้ fail ข้อ 6.6
function makeUser() {
    return {
      name: "John",
      ref: this
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name); // What's the result?  == fail **this ที่ ref ไม่มีค่าอะไร **
*/  




let calculator = {
    param1: 0,
    param2: 0,
    

    read: function () {
        this.param1 = Number(prompt('Param1 : ', 0));
        this.param2 = Number(prompt('Param2 : ', 0));
        //param1 = prompt('Param1 : ', 0);
        //param2 = prompt('Param2 : ', 0);        
    },
    
    //แบบเต็ม
    /*
    sum : function() {
        return this.param1 + this.param2 ;
    },

    mul : function() {
        return this.param1 * this.param2 ;
    }
    */

    //แบบย่อ
    sum() { return Number(this.param1) + Number(this.param2) },

    mul() { return Number(this.param1) * Number(this.param2) },

  }
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  