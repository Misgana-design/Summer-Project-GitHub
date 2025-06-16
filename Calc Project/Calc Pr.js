console.log("It is working welcome")

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function () {
        console.log("Draw")
    }
}

circle.draw();

//Factory Function
function createCircle(radius) {
    return {
        radius: radius,
        draw: function () {
            console.log("Factory Function");
        }
    }
}

const circle2 = createCircle(1);
console.log(circle2)

//Constructor Function
function Circle(radius) {
    console.log("this", this)
    this.radius = radius;
    this.draw = function () {
        console.log("Draw");
    };
}
const another = new Circle(5);
console.log(another);



