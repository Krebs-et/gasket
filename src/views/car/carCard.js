import { carService } from "../../service/carService";
import renderCards from "./cardsContainer";


function carCard(car) {

    async function removeCar(carId) {

        const result = confirm("¿Desea eliminar este auto?")

        const car = await carService.getCar(carId)

        if (result) {

            await carService.removeCar(car);
            renderCards();
        } else { return }

    }

    window.removeCar = removeCar;

    return `<div class="card" style="width: 18rem;" onclick=maintanceHandler.maintanceSelection("${car._id}")  data-bs-target="#maintanceModal" >
                    <img   src="${car.img || "https://placehold.co/200x150"}" class="card-img-top" alt="${car.model}") data-bs-target="#maintanceModal" data-bs-toggle="modal">
                    <div class="card-body" data-bs-toggle="modal" data-bs-target="#maintanceModal">
                        <h5 class="card-title">${car.brand} ${car.model} ${car.year}</h5>
                    </div>
                    <ul  class="list-group list-group-flush" role="button" data-bs-toggle="modal" data-bs-target="#maintanceModal" >
                    
                        <li class="list-group-item">VIN: ${car.vin.trim() ? car.vin.trim() : "Sin vin registrado."}</li>
                        <li class="list-group-item">Último cambio de aceite: ${car.oilChange.toString()}</li>
                        <li class="list-group-item">Última revisión de frenos: ${car.breakCheck}</li>
                    </ul>
                    <div class="card-body">
                        <button type="button" class="btn btn-outline-success fw-bold" data-bs-toggle="modal"
                        data-bs-target="#upsertAuto" onClick="renderForm('edit', '${car._id}')">Editar</button>
                        <button type="button" onClick="removeCar('${car._id}')"  class="btn btn-outline-danger">Eliminar</button>
                    </div>
                </div>`

}

export default carCard;
