
class Car {

    constructor(brand, model, year, km) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.km = km;
    }

    print() {
        var response = `The car is a ${this.brand} ${this.model}, is from ${this.year} and has ${this.km}Km`
        console.log(response)
    }
}

var my_car = new Car("Fiat", "Panda", 2004, 150000)
my_car.print()
