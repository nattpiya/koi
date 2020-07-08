

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

/* console.log("++++++++++++++++");

console.log(null || 2 || undefined);
//console.log( alert(1) || 2 || alert(3));
console.log(1 && null && 2);
//console.log(alert(1) && alert(2));
console.log(null || 2 && 3 || 4);

console.log(null);

console.log(2 || 3);

console.log(4);
 */
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


/*

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
    
    //sum : function() {
        //return this.param1 + this.param2 ;
    //},

    //mul : function() {
        //return this.param1 * this.param2 ;
    //}
    

    //แบบย่อ
    sum() { return Number(this.param1) + Number(this.param2) },

    mul() { return Number(this.param1) * Number(this.param2) },

  }
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  
*/

/* 
let num = 255; 

alert( num.toString(16) ); // ff
alert( num.toString(2) ); // 11111111
alert( num.toString() ); // 255
 */

/* let num = 1.23456;
alert(Math.floor(num * 100) / 100); */

/* let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // 0.30 */


/* alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12 ~ ส่งค่ากลับมาเฉพาะจำนวนเต็ม
alert( parseFloat('12.3.4') ); // 12.3 ~ ส่งค่ากลับมาเฉพาะจุดตัวแรก */



/* alert( Math.random() ); // 0.1234567899864
alert( Math.random() ); // 0.5435258423432
alert( Math.random() ); // ... (any random numbers) */


/* this.param1 = Number(prompt('Param1 : ', 0));
this.param2 = Number(prompt('Param2 : ', 0));
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525 */

/* 
let meram = {
  param1: 0,
  param2: 0,
  
  random: function () {
      this.param1 = Number(prompt('Min : ', 0));
      this.param2 = Number(prompt('Max : ', 0));   
    
    //return ( Math.random(this.param1, this.param2) ); // 0.5435258423432
    //return this.param1 + Math.random() * (this.param2 - this.param1);    

    console.log(this.param1 + Math.random() * (this.param2 - this.param1));

          
  },
}

//meram.random();
alert(meram.random());

alert(console.log(this.param1 + Math.random() * (this.param2 - this.param1) ) );
 */


/* 
let min = 1
let max = 5


for (let i = 0; i <= 100; i++) {
  console.log(min + Math.random() * (max - min));
 }/


function random(min, Max) { 
  return min + Math.random() * (max - min);
}
 */


/* let str = "Happy New Year"

//alert(`correc\btion`);

alert( str.length ); // 14
alert( "Hello World".length ); // 11
alert( `My\n`.length ); // 3 */


/* for (let char of "Hello") {
  alert(char); // H,e,l,l,o 
  console.log(char);
} */


/* let str = 'Hi';

str[0] = 'h'; // error
alert(str[0]); // doesn't work

str[1] = 'a'; // error
alert( str[1] ); // doesn't work */


/* let str = 'Hi'; 

str = 'h' + str[1]; // replace the string

alert( str ); // hi */


/* 
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, พบที่ตำแหน่งแรก
alert( str.indexOf('widget') ); // -1, ไม่พบ เพราะว่าตัว “W” กับ “w” ไม่ใช่ตัวเดียวกัน 
alert( str.indexOf("id") ); // 1, "id" พบที่ตำแหน่งที่ 1
 */


/* let str = 'Widget with id';
alert( str.indexOf("id") ); // 1, "id" พบที่ตำแหน่งที่ 1 */

/* 
//indexOf
let str = 'Widget with id';

alert( str.indexOf("id", 2) ); // 12, เริ่มค้นหาจากตำแหน่งที่ 2 									พบ "id" ที่ตำแหน่งที่ 12
 */

 
/* let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', เลือกจากตำแหน่งที่ 0 ถึง 5 (แต่ไม่เอาตำแหน่งที่ 5) 
alert( str.slice(0, 1) ); // 's', เลือกจากตำแหน่งที่ 0 ถึง 1 (แต่ไม่เอาตำแหน่งที่ 1) */


/* let str = "stringify"; 
//alert( str.slice(2) ); // 'ringify', เลือกจากตำแหน่งที่ 2 จนถึงตัวสุดท้าย
alert( str.slice(-4, -1) ); // 'gif' */


/* alert( "Widget with id".includes("Widget") ); // true
alert( "Hello".includes("Bye") ); // false */

/* alert( "Widget".includes("id") ); // true
alert("Widget".includes("id", 3)); // false, เริ่มเช็คตั้งแต่ index 3 */

/* 
alert( "Widget".startsWith("Wid") ); // true, "Widget" เริ่มด้วย "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" จบด้วย "get" */




/* 
let chap = {
  param1: '',

  
  random: function () {
      this.param1 = Number(prompt('Type : ', ));

    console.log(this.param1.slice(0, 1));
    
    //alert(this.param1.slice(0, 1);
          
  },
} */

//chap.random();
//alert(meram.random());

/* let str = prompt('Type : ');
  ucFirst(str)

  function ucFirst(str){
    alert(str.slice(0, 1).toUpperCase() + str.slice(1));

  } */


//let str2 = 'TestxxxTest2';

/*
let str2 = prompt('Type :');
 
checkSpam(str2)
function checkSpam(str2) { 
  
  if (str2.includes("xxx")) { 
    //alert('True');
    vlert = 'True';
  }
  else 
    //alert('false');  
    vlert = 'False';
  
  console.log(vlert);
} */
  
//extractCurrencyValue(string, rate) 



//alert( extractCurrencyValue('$120', 30.5) === 3660 ); // true

//alert( parseInt('100px') ); // 100



/* 
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert(fruits[2]); // Plum 
*/

/* 
fruits[3] = 'Mongo'; // now ["Apple", "Orange", "Pear", "Mongo"]

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3 */

/* 
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits ); */


/* let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length ); // 4 */



/* let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
} */

/* 
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
} */

/* 
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
alert( matrix[1][1] ); // 5, ตัวกลาง */

/* 
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[1]=("Classics");
styles.shift();
styles.unshift("Rap", "Regge");

alert(styles); */

/* 
let arrPromt = Number(prompt('Type :'));
arrSum = 0;
arrDisp = [];


  while (!isNaN(arrPromt)) {
    //alert("GG");
    arrDisp.push(arrPromt);
    arrSum = arrSum + arrPromt;

    arrPromt = Number(prompt('Type :'));

  }

alert(arrPromt);
alert(arrSum);
  
 */

/*  
let arr = ["I", "study", "JavaScript", "right", "now"];

// ลบ 2 elements แรก
let removed = arr.splice(0, 2);
console.log(removed); // ผลลัพธ์คือ array ของ elements ที่ถูกลบ

console.log(arr); //ตัวเหลือหลังจากทำ splice

 */


/*let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (คัดลอกตั้งแต่ 1 ถึง 3)  , (1, 2 ) ==> e

alert( arr.slice(-2) ); // s,t (คัดลอกตั้งแต่ -2 จนจบ)
*/

/* 
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
 */


/* let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 3);

alert(user.name); // John */



/* let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// ค้นหาตัวที่ id น้อยกว่า 3
// ผลลัพธ์ที่ได้จะเก็บไว้ใน someUsers
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2 */



/* let studentsList = ["Bilbo", "Gandalf", "Nazgul"]
let nameLn = studentsList.map(item => item.length);
alert(nameLn); // 5,7,6 */



/* 
let map = new Map();

map.set("name", "John");

let keys =  Array.from( map.keys() );


// Error: keys.push is not a function
keys.push("more");

console.log(keys); 
*/



/* 
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650 
*/  //ให้ใช้ map แทนการใส่ใน object



/* let array1 = [1, -3, 2, 8, -4, 5]

let array2 = array1.map(item => Math.abs(item));

alert(array2);  // [1, 3, 2, 8, 4, 5] */


//1.9 array1 = [1, -3, 2, 8, -4, 5]
    //array2 [1, 3, 2, 8, 4, 5]

 
/* 
{
    let number = 1;
  const myName = 'supakon';
  
  console.log(number);
  console.log(myName);       
} 
*/

/* 
//การทำ copy array ทั้งก้อน
//const itemsCopy = [...items];
const fruits = ['apple', 'banana', 'orange']
const fruitsCpoy = [...fruits];
alert(fruitsCpoy); */


/* 
function getFullName({ firstName, lastName }) { // รับค่าโดยใช้ Destructuring
  return `${firstName} ${lastName}`;
} */






