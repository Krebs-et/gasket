import { Car } from "../../../model/cars/car";
import { carService } from "../../../service/carService";
import { maintanceService } from "../../../service/maintanceService";

import { Maintance } from "../../../model/maintance/maintance";

import OilModal from "./OilForm";
import MaintanceSelection from "./MaintanceSelection";
import OilForm from "./OilForm";
import renderCards from "../../car/cardsContainer";

import validateFields from "../UpsertForm/validateForm";



export const maintanceHandler = {

    // Carga inicial del HTML 

    loadModal: () => {

        const container = document.getElementById("maintanceModal");
        const formHTML = MaintanceSelection();
        container.innerHTML = formHTML;

    },

    // Manejo de instancia

    loadInstance: async (carId) => {

        maintanceHandler.instance = await carService.getCar(carId)
        maintanceHandler.carInstance = Car.fromJSON(maintanceHandler.instance);
        return maintanceHandler.carInstance;

    },

    clearInstance: () => {
        maintanceHandler.carInstance = undefined;
        maintanceHandler.instance = undefined;
    },

    // Se lanza al hacer click en la card

    maintanceSelection: async (carId) => {

        try {

            const container = document.getElementById("maintanceModal");
            await maintanceHandler.loadInstance(carId)
            const car = maintanceHandler.carInstance;
            const formHTML = MaintanceSelection(car);
            container.innerHTML = formHTML;

        } catch (error) {
            console.error("Error al cargar el modal: " + error)
        }

    },

    // Envía el formulario con los datos del servicio

    doOilChange: async () => {

        const fields = document.querySelectorAll(".oilField");
        let data = [];

        if (!validateFields(fields)) {
            alert("Revise los campos marcados.")
            return
        }

        fields.forEach(field => {
            data.push(field?.value)
        });

        data.push("oilChange");
        
        const maintance = new Maintance(data);

        maintanceService.insert(maintance);

        console.log(data);


        if (confirm("¿Registrar el cambio de aceite?")) {

            maintanceHandler.carInstance.changeOil();
            await carService.update(maintanceHandler.carInstance);
            const modal = document.getElementById("maintanceModal");
            const modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
            maintanceHandler.clearInstance();
            await renderCards();

        }
    },

    // Reemplaza el modal por el formulario correspondiente

    oilForm: (instance) => {


        const activeModal = document.getElementById("maintanceModal");
        activeModal.innerHTML = OilForm(maintanceHandler.carInstance);

    }


}