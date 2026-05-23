import { maintanceInterface } from "../model/maintance/maintanceInterface";

export const maintanceService = {

    update: (maintance) => {
        return maintanceInterface.put(maintance);
    },

    insert: (maintance) => {
        return maintanceInterface.post(maintance);
    },

    getMaintance: (id) => {
        return maintanceInterface.getDoc(id);
    },

    loadServices: () => {

        try {
            return maintanceInterface.getAllDocs();


        } catch (err) {
            console.log("Error al inicializar." + err);
        }

    },

    removeMaintance: (maintance) => {
        try {
            return maintanceInterface.removeDoc(maintance);
        } catch (error) {
            console.error("Error al eliminar el mantenimiento: " + error);
        }
    }

}