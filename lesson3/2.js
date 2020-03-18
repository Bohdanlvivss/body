//1.1
let arrey = [2, 3, 4, 5];
let res = 1;
for (let i=0; i < arrey.length; i++) {
    res = res * arrey[i];}
    console.log(res);

//1,2

let arrey = [2, 3, 4, 5];
let res = 1;
let i = 0;
while (i<arrey.length){
    res =res*arrey[i]; i++;
}
console.log(res);

//2 

for (let i=0; i<=15; i++) {
    if (i%2 ==0) {
        console.log (i+ "is odd");
    }else {
        console.log (i+ "is even");
    }
}

//3
function randArrey(k) {
    let arr = [];
       for ( let i = 0; i < k; i++ ) 
            arr.push( Math.floor( Math.random() * 500 ));
        
  
     console.log(arr);
     
    }
    randArrey(5);
    
// 3.1????
function randArrey(k) {
    let arr = [], min = 0, max = 500;
       for ( min; min < 5; min++ ) 
            arr.push( Math.floor( Math.random() * max ));
        
     console.log(arr);}
    randArrey(k);
    
    //4+
    let a = parseInt(prompt("enter a number", ""));
    let b = parseInt(prompt("enter a number", " "));
    
    raiseToDegree(a, b);
    function raiseToDegree (a, b){ 
        let result = a**b;
        console.log(result);
}


//5
findMin(12, 14, 4, -4, 0.2);
function findMin(...arguments) {
    console.log(Math.min(...arguments));
        }

//6
function findUnique(arr){
    let uniq = true;
       for ( let i = 0; i<arr.length; i++) {
           let x = arr[i];
           for (let n = i + 1; n<arr.length; n++) {
              if (x == arr[n]) 
              {
                   uniq = false;
              }
           }
    }
    console.log(uniq);
}
findUnique ([1, 2, 3, 5, 3]);
findUnique([1, 2, 3, 5, 11]);
findUnique ([1, -2.2, 3, 5, -2.2]);


//7
function lastElem(arr, x) {
    if(x != null)   //------ return arr[arr.length - 1];
    {  
      let newArray = [];
      for (let index = arr.length; index > 0; index--) {    // поки є елементи --
        if(x > 0) //return
        {
          if(newArray.length == 0)
          {
            newArray.push(arr[index - 1])
          }
             else
          {
            newArray.unshift(arr[index - 1]) // + елемент 
          }
          x--; // ксть елементів зменшуєм
        }
      }
      return newArray;
    }
    else
    {
      return arr[arr.length - 1]; // повертаємо останній елемент з початкового масиву
    }
}
  console.log(lastElem([3, 4, 10, -5]));
  console.log(lastElem([3, 4, 10, -5],2));
  console.log(lastElem([3, 4, 10, -5],8));
  
  //8
function firstUpperLetter(){
   let inputString = "i love java script";
   let outputString = [];
   arr = inputString.split(" ");
   for (let i = 0; i<arr.length; i++){
       outputString[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
   }
   return outputString.join(" ");
}
firstUpperLetter();
