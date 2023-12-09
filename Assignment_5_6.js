class Car {
    constructor(brand, model, year, color, price, gas) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
      this.gas = gas;
    }
  
    honk() {
      console.log("Tuut tuut");
      console.log(`Brand: ${this.brand}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Color: ${this.color}`);
      console.log(`Price: $${this.price}`);
      console.log("--------");
    }
  
    race(turns) {
      for (let i = 1; i <= turns; i++) {
        console.log(`Turn ${i}`);
        const gasConsumption = this.calculateGasConsumption();
        this.gas -= gasConsumption;
        console.log(`${this.brand} ${this.model} - Gas remaining: ${this.gas} liters`);
        console.log("--------");
      }
    }
  
    calculateGasConsumption() {
      let gasConsumption = 5;
  
      if (this.year === new Date().getFullYear()) {
        gasConsumption += 0;
      } else {
        const yearsOld = new Date().getFullYear() - this.year;
        gasConsumption += yearsOld;
      }
  
      return gasConsumption;
    }
  }
  
  const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
  const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
  const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
  const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
  const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
  const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);
  
  car1.honk();
  car2.honk();
  car3.honk();
  car4.honk();
  car5.honk();
  car6.honk();
  
  console.log("Race Begins!");
  car1.race(7);
  car2.race(7);
  car3.race(7);
  car4.race(7);
  car5.race(7);
  car6.race(7);
  