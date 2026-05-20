import { carInterface } from "../../infrastructure/carInterface";
import { Car } from "../../model/car"
import { carService } from "../../service/carService";
import renderCards from "../car/cardsContainer";

async function submitForm(type) {

    let data = {
        "id": document.getElementById("docId")?.value,
        "rev": document.getElementById("docRev")?.value,
        "brand": document.getElementById("brand").value,
        "model": document.getElementById("model").value,
        "VIN": document.getElementById("vin").value,
        "year": document.getElementById("year").value
    }

    console.log(data.id);

    if (data.id && data.rev) {

        let car = Car.fromJSON(await carService.getCar(data.id));
        car.brand = data.brand;
        car.model = data.model;
        car.year = data.year;
        car.vin = data.VIN;
        await carService.update(car);

    } else {
        const car = new Car(
            null,
            null,
            data.brand,
            data.model,
            data.year,
        )
        await carService.insert(car);

    }

    location.reload();

}

window.submitForm = submitForm;

export default submitForm;
