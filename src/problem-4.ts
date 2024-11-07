{
    //



    interface BaseShape {
        shape: string; 
    }

    interface Circle extends BaseShape {
        shape: "circle";
        radius: number;
    }

    interface Rectangle extends BaseShape {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle

    function calculateShapeArea(shape: Shape): number {

        if (shape.shape === "circle") {
            const ShapeArea = Math.PI * shape.radius * shape.radius
            return ShapeArea
        } else if (shape.shape === "rectangle") {
            const ShapeArea = shape.width * shape.height
            return ShapeArea;
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






    //
}