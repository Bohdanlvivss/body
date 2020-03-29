function testThrow(exception){
    try { throw exception;
    }
    catch { console.log("Catch:" + exception);
    }
  }
  testThrow(5);
  testThrow("Test");
  testThrow(new Error("An error happened"));

  //2
  let width = parseFloat(prompt("Введіть висоту прямокутника: "));
  let height = parseFloat(prompt("Введіть ширину прямокутника: "));
  
  function calcRectangleArea(width,height){
    if (isNaN(width) || isNaN(height)){
      throw new Error("Значення є не числовими");
    } else if (width <= 0 || height <= 0) {
      throw new Error("Введенні значення є від'ємними")
    }
    return width * height;
  }
  try{
    let result = calcRectangleArea(width, height);
    console.log(result);
  } catch(error){
      console.log(error);
    }

    //3
    let age = prompt("Enter your age:");
  
  function checkAge(age){
    if (age == " "){
      throw new Error("The field is empty! Please enter your age.");
    } else if (isNaN(age)) {
      throw new Error("not number value");
    } else if (age < 14) {
      throw new Error("You age is < 14.");
    }
    return ("watch video");
  }
  
  try{
    let result = checkAge(age);
    alert(result);
  } catch(error){
    alert(error.message)
  }
    //4
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  class MonthException{
    constructor(message){
      this.message = message;
      this.name = 'MonthException';
    }
    getMessage(){
      return (this.name + " " + this.message);
    }
  }
  let errMessage = new MonthException("Incorrect month number")
    function showMonthName(month) {
     try {
       if (month > months.length){
         throw  Error();
       } 
     }
      catch (error) {
       console.log(errMessage.getMessage());
        }
        return months [month-1];
     };
  console.log(showMonthName(5));
  console.log(showMonthName(14));
  //5
  function showUser(id) {
    let userId = {};
    try{
      if(id < 0){
        throw Error("Id must not be negative: ");
    }
      userId["id"] = id
      return userId;
      }
    catch(err){
      console.log(err + id);
    }
  }  
  function showUsers(ids){
    let arrIds = []
    for(let i = 0;i < ids.length; i++){
      let result = showUser(ids[i]);
        if (result){
          //arrIds.push(result);
          arrIds.push(JSON.stringify(result));
          }
      }

  console.log(arrIds);
    }
  
  showUsers([7,-12,44,22])
