{


    function getProperty<T, K extends keyof T>(person: T, name: K): T[K] {
        return person[name];
    }

    const person = {
        name: "Alice",
        age: 38
    }

    console.log(getProperty(person,"name"));












}