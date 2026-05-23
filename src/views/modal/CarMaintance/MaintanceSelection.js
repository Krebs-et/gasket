import { carService } from "../../../service/carService";
import renderCards from "../../car/cardsContainer"

function MaintanceSelection(carInstance) {

    const car = carInstance;
    const title = carInstance ? car.brand + " " + car.model + " " + car.year : '';


    return `<div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body" >
                    <h2 class="fs-5">Servicio preventivo</h2>
                    <p>
                    <button class="btn btn-outline-primary" onClick=maintanceHandler.oilForm()>Cambio de aceite</button>
                    <button class="btn btn-outline-primary" onClick=maintanceHandler.doOilChange()>Servicio completo</button>
                    </p>
                    <hr>
                    <h2 class="fs-5">Servicio correctivo</h2>
                    <p>
                    <button class="btn btn-outline-primary">Motor</button>
                    <button class="btn btn-outline-primary">Suspensión</button>
                    <button class="btn btn-outline-primary">Transmisión</button>
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" onclick=maintanceHandler.clearInstance()>Cancelar</button>    
                </div>
            </div>
            </div>`


}

export default MaintanceSelection;