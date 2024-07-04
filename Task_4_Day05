class UberPriceCalculator {
    constructor(pricePerKm) {
        this.pricePerKm = pricePerKm;
    }

    calculateFare(distanceInKm) {
        return this.pricePerKm * distanceInKm;
    }
}


let calculator = new UberPriceCalculator(75); 
let distance = 10; 

let fare = calculator.calculateFare(distance);
console.log(`The fare for a ${distance} km trip is $${fare.toFixed(2)}`);
