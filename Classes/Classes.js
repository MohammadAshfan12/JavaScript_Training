//car class
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
      return "I have a " + this.carname;
  }
}
mycar = new Car("Ford");
console.log(mycar.present())


//Rectangle class
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    pr(){
        console.log(this.height * this.width)
    }
  };
  let a = new Rectangle(10, 10);
  console.log(a.pr());
  
