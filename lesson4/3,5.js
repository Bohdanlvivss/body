class Worker {
  #experience = 1.2;
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

let salaryArr = [worker1, worker2, worker3];
    let sortSalary = salaryArr.sort(function(a,b)  {
        return a.showSalaryWorker()- b.showSalaryWorker();
    })
    console.log(sortSalary);
    for (let i = 0; i < sortSalary.length; i++) {
        console.log(sortSalary[i].fullName + ":" + sortSalary[i].showSalaryWorker());
        
    }
///////////////5
class GeometricFigure {

  getArea(){
    return 0;
  }
  toString(){
    return Object.getPrototypeOf(this.constructor).name + " "
    + Object.getPrototypeOf(this).constructor.name;
   
  }
  
}


class Triangle extends GeometricFigure{
    constructor(sideT,heightT){
      super();
      this.sideT = sideT;
      this.heightT = heightT;
    }
    getArea(){
      return (this.sideT * this.heightT) / 2;
    }
    toString(){
      console.log(super.toString() + "area: " + this.getArea());
    }
}

  
class Square extends GeometricFigure{
    constructor(sideSquare){
      super();
      this.sideSquare = sideSquare;
    }
    getArea(){
      return this.sideSquare ** 2;
    }
    toString(){
      console.log( super.toString() + "area: " + this.getArea());
    }
}
   
class Circle extends GeometricFigure{
    constructor(radius){
      super();
      this.radius = radius;
    }
    getArea(){
      return Math.PI * this.radius**2;
    }
    toString(){
      console.log( super.toString() + "area: " + this.getArea());
    }
  }

  
    function handleFigures(figures){
      let sum = [];
      for (let i = 0;i < figures.length;i++){
        if (figures[i] instanceof GeometricFigure){
        sum.push(figures[i].getArea());
        }
      }
      let total = sum.reduce( function (element, amount){
        return element + amount});
        figures.toString();
        console.log(total);
       
    }


const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
