let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); 
console.log(y); 
console.log(z);

//task 2

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let { names: [name1, name2, name3, name4], ages: [age1, age2, age3 , age4] } = data;
console.log(name2); 
console.log(age2); 
console.log(name4); 
console.log(age4); 

//task 3

function mul(...rest) {
    let result = 1;
    let count = 0;
     for (let i of rest) {
     if (typeof i == "number") {
                result *= i;
                count +=1;
          }
         }
          if (count > 0) {
     return result;
          }
          else {
            return 0;
          }
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); //0


// task 4
let server = {
    data: 0,
    convertToString: function (callback) {
       callback(( () =>{
          return this.data + "";
       }));
    }
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return ((callback) => {
          this.result = callback();
       });
    }
 };
 client.calc(123);
 console.log(client.result); 
 console.log(typeof client.result); 

 // task 5
 
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];


function mapBuilder(keys, values) {
   let map = new Map();
    for (let index of keys) {
       map.set(index, values[index-1])
        }
    return map;
}
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"