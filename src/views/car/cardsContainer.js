import { carService } from "../../service/carService"
import carCard from "./carCard"
import { Car } from "../../model/cars/car";
import { maintanceHandler } from "../modal/CarMaintance/maintanceModalHandler";

export async function renderCards() {

    console.log(maintanceHandler.intance);

    const container = document.getElementById("carCardsContainer");

    if (!container) {
        console.error("No se encontról el elemento #carCardsContainer")
    }

    try {
        const docs = await carService.loadCars();
        const cars = [...docs.rows];

        if (cars.length === 0) {
            container.innerHTML = `<p class="text-muted">No hay autos registrados.</p>`;
            return;
        }


        const cardsHTML = cars.map(car => carCard(
            Car.fromJSON(car)
        )).join("");

        

        container.innerHTML = cardsHTML;

    } catch (error) {
        console.error("Error al cargar los autos en el contenedor:", error);
        container.innerHTML = `<p class="text-danger">Error al cargar los datos.</p>`;
    }
}

export default renderCards