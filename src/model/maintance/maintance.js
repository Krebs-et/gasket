export class Maintance {

    constructor (
        car,
        service,
        type
    ) {

        this.car = car;
        this.service = service;
        this.date = Date.now().toString();
        this.type = 'maintance'
    }
    
}