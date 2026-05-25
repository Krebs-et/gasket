export class OilChange {
    constructor(
        oilViscosity,
        oilBrand,
        oilFilterPartNumber,
        serviceNotes

    ) {
        
        this.date = Date.now().toString();
        this.oilViscosity = oilViscosity;
        this.oilBrand = oilBrand;
        this.oilFilterPartNumber = oilFilterPartNumber;
        this.serviceNotes = serviceNotes;
        this.type = "oilChange";
        

    }
}