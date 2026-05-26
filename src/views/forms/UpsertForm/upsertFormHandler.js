import { Car } from "../../../model/cars/car"
import { carService } from "../../../service/carService"
import renderCards from "../../tabs/car/cardsContainer"
import validateFields from "../validateFields"
import UpsertForm from "./UpsertForm"
export const upsertFormHandler = {

    loadInstance: async (carId) => {

        upsertFormHandler.carInstance = await carService.getCar(carId);
        return upsertFormHandler.carInstance;
    },

    renderForm: async (carId) => {

        let formType;
        let car;

        try {
            if (carId) {
                car = await upsertFormHandler.loadInstance(carId);
                formType = "edit";
            } else {
                formType = "insert";
            }

            const modalForm = document.getElementById("upsertModal");
            const formHTML = UpsertForm(formType, upsertFormHandler.carInstance);
            modalForm.innerHTML = formHTML;


            const today = new Date();
            const select = document.getElementById("year");

            for (let i = 1990; i <= today.getFullYear(); i++) {

                const isSelected = (car && car.year == i) ? 'selected' : '';

                select.insertAdjacentHTML('beforeend',
                    `<option  ${isSelected} value="${i}">${i}</option>`);
            }

        } catch (error) {
            console.error("Error al renderizar el formulario " + error);
        }
    },

    submitForm: async () => {

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

        const modalElement = document.getElementById("upsertModal");
        const modalInstance = bootstrap.Modal.getInstance(modalElement);

        modalInstance.hide();

        renderCards();

    }



}

