export class Maintance {

    constructor (
        car,
        service
    ) {

        this.car = car;
        this.service = service;
        this.date = Date.now().toString();

    }
    
}