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
