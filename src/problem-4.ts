{



    type Circle = {
        shape: "circle",
        radius: number
    }

    type Rectangle = {
        shape: "rectangle",
        width: number,
        height: number
    }

    type Shape = Circle | Rectangle

    function calculateShapeArea(shape: Shape): number {

        if (shape.shape === "circle") {
            const area = Math.PI * shape.radius * shape.radius
            return area
        } else if (shape.shape === "rectangle") {
            const area = shape.width * shape.height
            return area;
        } else {
            return 0
        }

    }

    const circle: Shape = {
        shape: "circle",
        radius: 5
    }

    const rectangle: Shape = {
        shape: "rectangle",
        width: 4,
        height: 6
    }

    console.log(calculateShapeArea(circle));



}