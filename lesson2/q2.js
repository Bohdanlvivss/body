//1.1
//let x = 1;
//let y = 2;

//let res1 = String(x) +String(y); 
// Допишіть код, необхідно використовувати змінні x і y
//console.log(res1); // "12"
//console.log(typeof res1); // "string"


//1.2
//let x = 1;
//let y = 2;
//Boolean (x);
//let res2 = Boolean(x) + String(y);
// Допишіть код, необхідно використовувати змінні x і y
//console.log(res2); // "true2"
//console.log(typeof res2); // "string"


//1.3
//let x = 1;
//let y = 2;
//let res3 = x!=y; // Допишіть код, необхідно використовувати змінні x і y
//console.log(res3); // true
//console.log(typeof res3); // "boolean"

//1.4
//let x = 1;
//let y = 2;
//let res4 = x*y*Number.NaN;
//isNaN(res4);// Допишіть код, необхідно використовувати змінні x і y
//console.log(res4); // NaN
//console.log(typeof res4); // "number"

//2.1
//let x = prompt();


//if (0<x &&(x%2) ==0) //більше 0 і ділиться 2
//{ x = "positive pair";
//}
//else if ((x%7) == 0)   //кратне сім і ділиться без залишку
//{ x = "multiple seven"; 
//} 
//else 
//{ x= "no-one";
//}
//console.log(x);

//3
//let arr =[];
//arr.push(1);
//arr.push("str");
//arr.push(Boolean);
//arr.push(null);
//console.log(arr.length); 
//let x = prompt(); 
//arr.push(x);  
//console.log(arr[4]);
//arr.splice(0, 1);
//console.log(arr);

//4

//let cities = ["Rome", "Lviv", "Warsaw"];
// перемінна result приймає перше значення масиву.
//let result = cities[0];
// переприсвоюємо result попутно додаючи друге і третє значення з масиву
// result = result.concat("*",cities[1],"*", cities[2]);
// оголошуємо і ініціалізуємо результуючий масив
// let resultMas = [result]; 
// document.write(resultMas);

//5
//let isAdult = confirm ("Вам вже є 18");
//if (isAdult)
//{
//    document.write ("ви досягли повноліття");
//}
//else 
//{
//let x = prompt  ("Введіть скільки вам років", "");
//  if (x < 10) 
//  { 
//    document.write("Ви ще надто молоді");
//  }
//  else 
//  {
//       document.write("stop");
//  }
//}
//console.log(x);

//6
//let a = + prompt ("Введіть довжину першої сторони трикутника", ""); //+ для числового значення!!!!!!!!!!!!
//let b = + prompt ("Введіть довжину другої сторони трикутника", "");
//let c = + prompt ("Введіть довжину третьої сторони трикутника", "");


//if ( ( a > 0 ) && ( b > 0 ) && ( c > 0) && ( ( a + b > c ) && ( b + c > a ) && ( a + c > b ) ) ) { //      correct data
    
  //      let p = (a+b+c) *0.5; //пів периметр
    
    //    let s = ((p * (p - a) * (p - b) * (p - c)) ** (0.5)); //площа
      //  document.write(p, "<br>");
        
        //    document.write(s.toFixed(2), "<br>"); // toFixed (кількість знаків після коми)
            
         // } else {
        
           // document.write("'Incorrect data");
        
         // }
//if ((a ** 2 + b ** 2 == c ** 2) || (b ** 2 + c ** 2 == a ** 2) || (a ** 2 + c ** 2 == b ** 2)) {
// document.write("Прямокутний трикутник"); //6 8 10
 // } else {
  //  document.write("Непрямокутний трикутник");
  //}

  //7
let d = new Date();
let h = d.getHours();

if (h > 5 || h <= 11) {
    alert("Добрий ранок");
} else if (h > 11 || h <= 17) {
    alert("Добрий день");
  } 
 else if (h > 17 || h <= 23){
    alert("Добрий вечір");
 }
else
 {
  alert("Доброї ночі");
}

         
            
