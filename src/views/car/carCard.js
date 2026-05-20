import { carService } from "../../service/carService";


async function removeCar(carId) {

    const result = confirm("¿Desea eliminar este auto?")

    const car = await carService.getCar(carId)

    if (result) {

        await carService.removeCar(car);
        location.reload();
    }

}

window.removeCar = removeCar;


function carCard(car) {

    return `<div class="card" style="width: 18rem;">
                    <img src="${car.img || "https://placehold.co/200x150"}" class="card-img-top" alt="${car.model}">
                    <div class="card-body">
                        <h5 class="card-title">${car.brand} ${car.model} ${car.year}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                    
                        <li class="list-group-item">VIN: ${car.vin.trim() ? car.vin.trim() : "Sin vin registrado."}</li>
                        <li class="list-group-item">Último cambio de aceite: ${car.oilChange}</li>
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
