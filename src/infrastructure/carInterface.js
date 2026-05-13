import { db } from "./db";

export const carInterface = {

    save: async (doc) => {
        try {
            return await db.put(doc);
        } catch (err) {
            console.log("Error al crear el vehículo" + err);
            throw err;
        }
    },

    getCar: async (id) => {
        try {
            return await db.get(id);
        } catch (err) {
            console.log("Error al recuperar el objeto: " + err);
        }
    },

    getInfo: async () => {
        try {
            const response = await db.info()
            console.log(response);
        }
        catch (err) {
            console.log("Error al recuperar la información de la base de datos." + err);
        }

    }


}
