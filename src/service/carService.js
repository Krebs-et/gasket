import { carInterface } from "../infrastructure/carInterface";

export const carService =  {

    upsertCar: async (car) => {
        return await carInterface.createCar(car);
    },

    getCar: async (id) =>{
        return await carInterface.getCar(id);
    }

    



}