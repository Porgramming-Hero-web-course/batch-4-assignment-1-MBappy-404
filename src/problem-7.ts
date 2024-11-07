{
//



    class Car {
        
        constructor(public make: string, public model: string, public year: number) { }

        getYear():number{
            const today =  new Date().getFullYear();
            const carAge = today- this.year
            return carAge;
        }
    }
    
   
    const myCar= new Car("Honda", "Civic", 2018)
    myCar.getYear() 
    
console.log(myCar.getYear());







//

}