import { Car } from "../../../model/car";
import { carService } from "../../../service/carService";
import upsertForm from "./upsertForm";

async function renderForm(type, carId) {

    let car;

    const formContent = document.getElementById("upsertAuto");

    if (carId) {
        car = await carService.getCar(carId);
        const carYear = car.year;
        formContent.innerHTML = upsertForm(type, car);
    } else {
        formContent.innerHTML = upsertForm(type);
    }

    const today = new Date();
    const select = document.getElementById("year");

    for (let i = 1990; i <= today.getFullYear(); i++) {

        const isSelected = (car && car.year == i) ? 'selected' : '';

        select.insertAdjacentHTML('beforeend',
            `<option  ${isSelected} value="${i}">${i}</option>`);
    }
}

window.renderForm = renderForm;

export default renderForm;
