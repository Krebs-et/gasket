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

    loadCars: async () => {

        let cars = [];      

        try {
        
        const docs = await carInterface.getAllDocs();
        const rows = docs.rows;
        
        rows.forEach(row => {

            if (row.doc.type === 'car') {
                cars.push(row.doc);
            }

        });

        } catch (err) {
            console.log("Error al inicializar." + err);
        }
    
        return cars;

    },

    removeCar: (car) => {
        try {
            return carInterface.removeDoc(car);
        } catch (error) {
            console.error("Error al eliminar el auto: " + error);
        }
    }

}