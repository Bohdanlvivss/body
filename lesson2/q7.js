//let d = new Date();
//let h = d.getHours();

//if (h > 5 && h <= 11) {
//    alert("Добрий ранок");
//} else if  (h > 11 && h <= 17) {
//    alert("Добрий день");
   
//} else if (h > 17 && h <= 23){
//    alert("Добрий вечір");
 
//} else {
 
//  alert("Доброї ночі");
//}
//7.2
let date = new Date();
let x = date.getHours();

switch (true) {
     case (x > 5 && x <= 11):
        alert("Добрий ранок");
        break;
     case (x > 11 && x <= 17): 
        alert("Добрий день");
        break;
     case (x > 17 && x <= 23)
        :
       alert("Добрий вечір");
       break;
     case (x>23 && x<=5):
     
      alert("Доброї ночі");
    }
