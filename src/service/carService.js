import { carInterface } from "../model/cars/carInterface";

export const carService = {

    update: (car) => {
        return carInterface.put(car);
    },

    insert: (car) => {
        return carInterface.post(car);
    },

    getCar: (id) => {
        return carInterface.getDoc(id);
    },

    loadCars: () => {

        try {
            return carInterface.getAllDocs();


        } catch (err) {
            console.log("Error al inicializar." + err);
        }

    },

    removeCar: (car) => {
        try {
            return carInterface.removeDoc(car);
        } catch (error) {
            console.error("Error al eliminar el auto: " + error);
        }
    }

}