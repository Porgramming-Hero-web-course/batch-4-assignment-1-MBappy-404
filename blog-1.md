# Blog-1: The Significance of Union and Intersection Types in TypeScript


In TypeScript, union types and intersection types help us work with different types of data more easily. They make code safer and allow us to use one function or object for different things.

## Union Types (`|`)
Union types let us use more than one type for a variable or function. For example, if we say number | string, this means the value can be either a number or a string. This is helpful if we don’t know the exact type of data.

### Example
 
function formatValue(value: number | string) {
    if (typeof value === "number") {
        return value.toFixed(2); // If number, show it as a decimal
    } else {
        return value.toUpperCase(); // If string, make it uppercase
    }
}
 
 Here, formatValue works with both numbers and strings. This makes it easier because we don’t need two separate functions.


## Intersection Types (`&`)
Intersection types combine two types into one. This means the object will have all the properties from both types. For example, Person & Employee means the object must have both the name and employeeId properties.

### Example

type Person = { name: string };
type EmployeeId = { employeeId: number };

function welcomeEmployee(employ: Person & Employee)Id {
    console.log(`Welcome ${emp.name}, your ID is ${emp.employeeId}`);
}

In this example, employ must have both name and employeeId properties. This makes sure it has everything it needs from both Person and Employee.