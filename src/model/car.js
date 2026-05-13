export class Car  {

    constructor(
        id,
        brand,
        model,
        year,
        vin = "Sin VIN registrado."
    ) {

        this._id = id,
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.oilChange = "Sin datos registrados.";
        this.breakCheck = "Sin datos registrados.";
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
        this.oilChange = Date.now();
    }


    checkBreaks() {
        this.breakCheck = Date.now();
    }


    




}
