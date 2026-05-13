import { carService } from "./src/service/carService";

async function init() {

    try {
        let car = await carService.getCar("car001");
        console.log(car.model);
    } catch (err) {
        console.log("Erro al inicializar.");
    }
    
}

init();