console.log("It is working welcome");

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log("Draw");
  },
};

circle.draw();

//Factory Function
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("Factory Function");
    },
  };
}

const circle2 = createCircle(1);
console.log(circle2);

//Constructor Function
function Circle(radius) {
//   console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
const another = new Circle(5);
console.log(another);

class Car {
  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
  }

  drive() {
    console.log(`${this.color} ${this.brand} is driving!`);
  }
}

const car1 = new Car("blue", "BMW");
car1.drive();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const myName = new Person("Misgana", 21);
myName.sayHello();
