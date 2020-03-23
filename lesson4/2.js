let mentor = { 
        course: "JS fundamental", 
        duration: 3,
        direction: "web-development" 
    };

    function propsCount(currentObject) {
  return keys(currentObject).length;
}

propsCount(mentor);
//2
let obj = {
    firstName: "Bohdan", 
    lastName: "Benko",
    sex: "Male",
    age: 38,
    national: "Ukraine",
    }
    let props = [];
    let values =[];

    function showProps(obj) {
        for (let key in obj) {
        props.push(key);
        values.push(obj[key]);      
        };
    console.log(props);
    console.log(values);
    }
    showProps(obj);

//3
class Worker {
    constructor(fullName,dayRate,workingDays){
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
    }
    showSalary(){
      let salary = this.dayRate * this.workingDays;
      console.log(this.fullName+ " " + "salary:" + " " + salary);
    }
  
      _showExp = 1.2;
  
    showSalaryWithExperience(){
      let showSalExp = this.dayRate * this.workingDays * this._showExp;
      console.log(this.fullName + "salary:" + showSalExp);
    }
    get showExp(){
      return this._showExp;
    }
      set showExp(value){
      this._showExp = value;
    }
  }
  
  let worker1 = new Worker("John Johnson", 20, 23);
  let worker2 = new Worker("Tom Tomson", 48, 22);
  //worker1=worker2; Відповідь для 2Worker
  let worker3 = new Worker("Andy Ander", 29, 23);
  //worker1=worker3; Відповідь для 3Worker 
  console.log(worker1.fullName);
  worker1.showSalary();
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  worker1.showExp = 1.5;
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();

//4
class Person {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
     showFullName(){      
       return this.name + " " + this.surname;
     } 
    }
        class Student extends Person {
            constructor(name, surname, year){
                super(name, surname,);
                this.year = year;
                }
            showFullName(midleName){
                this.midleName = midleName;
                return this.name + " " + this.surname + " "+ this.midleName;
                 }
            showCourse(){
                let date = new Date();
                let currentYear = date.getFullYear();
                let currentCourse = currentYear - this.year;
                return currentCourse;
            }
        };
        let stud1 = new Student("Petro", "Petrenko", 2015);
   console.log(stud1.showFullName("Petrovych")); 
   console.log("Current course: " + stud1.showCourse());
