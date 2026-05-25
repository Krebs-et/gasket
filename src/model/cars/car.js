export class Car {

    constructor(
        id,
        rev,
        brand,
        model,
        year,
        vin = "Sin VIN registrado.",
        oilChange = "Sin datos registrados.",
        breakCheck = "Sin datos registrados.",
        img
    ) {
    
        if (id) this._id = id;
        if (rev) this._rev = rev;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.oilChange = oilChange;
        this.breakCheck = breakCheck;
        this.type= "car";
        this.img = img;
    }

    static fromJSON(json) {
        const data = json.doc ? json.doc : json;

        return new Car(
            data._id,
            data._rev,
            data.brand,
            data.model,
            data.year,
            data.vin,
            data.oilChange,
            data.breakCheck,
        );
    }

    updateInfo(
        name,
        brand,
        year
    ) {
        this.name = name ?? name;
        this.brand = brand ?? brand;
        this.year = year ?? year;
    }


    changeOil() {
        this.oilChange = new Date().toISOString().substring(0,19);
        console.log("Se ha cambiado el aceite con fecha: " + this.oilChange);
    }


    checkBreaks() {
        this.breakCheck = Date.now();
    }




}
