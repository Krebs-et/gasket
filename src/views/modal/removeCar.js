import { Car } from "../../model/car";
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

export default removeCar;