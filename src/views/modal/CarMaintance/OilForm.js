
function OilForm(carInstance) {

    return `<div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Cambio de aceite</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <form class="modal-body">

            <div class="row my-3">
                <div class="col">
                    <label for="viscocidad" class="form-label">Viscocidad</label>
                    <input type="text" class="form-control oilField" placeholder="5w20" aria-label="viscocidad">
                </div>
                <div class="col">
                    <label for="marca" class="form-label">Marca del Aceite</label>
                    <input type="text" id="marca" class="form-control oilField" placeholder="STP, Valvoline, etc." aria-label="marca">
                </div>
            </div>

            <div class="row my-3">
                <div class="col">
                    <label for="filtro" class="form-label">Número de filtro</label>
                    <input id="filtro" type="text" class="form-control oilField" placeholder="Número de parte" aria-label="filtro">
                </div>
                
            </div>
            
            <div class="mb-3">
                    <label for="notas" class="form-label">Notas</label>
                    <textarea class="form-control" id="notas" rows="3" placeholder="Describa brevemente los detalles durante el servicio."></textarea>
            </div>
            
        </form>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onclick=maintanceHandler.maintanceSelection("${carInstance._id}")>Volver</button>
            <button type="button" class="btn btn-primary" onclick=maintanceHandler.doOilChange()>Guardar</button>
        </div>
    </div>
</div>`

}




export default OilForm;