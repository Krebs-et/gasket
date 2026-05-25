import { Car } from "../../../model/cars/car"
import { carService } from "../../../service/carService";
import renderCards from "../../car/cardsContainer";
import validateFields from "./validateForm";

async function submitForm(type) {

    const fields = [
        document.getElementById("brand"),
        document.getElementById("model"),
    ]

    if (!validateFields(fields)) {
        alert("Revise los campos marcados.")
        return
    }


    if (!confirm("¿Desea guardar los cambios?")) { return }

    let data = {
        "id": document.getElementById("docId")?.value,
        "rev": document.getElementById("docRev")?.value,
        "brand": document.getElementById("brand").value,
        "model": document.getElementById("model").value,
        "VIN": document.getElementById("vin").value,
        "year": document.getElementById("year").value,
        "img": document.getElementById("img").value
    }


    console.log(data.img);

    if (data.id && data.rev) {

        let car = Car.fromJSON(await carService.getCar(data.id));
        car.brand = data.brand;
        car.model = data.model;
        car.year = data.year;
        car.vin = data.VIN;
        car.img = data.img;
        await carService.update(car);

    } else {
        const car = new Car(
            null,
            null,
            data.brand,
            data.model,
            data.year,
            data.VIN,
            data.img
        )

        await carService.insert(car);

    }

    const modalElement = document.getElementById("upsertAuto");
    const modalInstance =  bootstrap.Modal.getInstance(modalElement);

    modalInstance.hide();

    renderCards();

}

window.submitForm = submitForm;

export default submitForm;
