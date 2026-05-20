import submitForm from "./submitForm";

function upsertForm(type, car) {

    return `<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${type === "add" ? 'Añadir' : 'Editar'} auto</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form class="modal-body d-flex justify-content-around flex-wrap" id="upsertForm" action="javascript:submitForm();">

                    <div class="mb-3 col-5">
                        <label for="brand" class="form-label">Marca</label>
                        <input  value ="${car ? car.brand : ''}"  type="text" class="form-control" id="brand"
                            placeholder="Ford, Toyota, etc.">
                    </div>

                    <div class="mb-3 col-5">
                        <label for="model" class="form-label">Modelo</label>
                        <input  value="${car ? car.model : ''}" type="text" class="form-control" id="model"
                            placeholder="Mondeo, Yaris, etc.">
                    </div>

                    <div class="mb-3 col-5">
                    <label for="year" class="form-label">Año</label>
                    <select class="form-control col-3" id="year">
                    </select>
                    </div>                

                    <div class="mb-3 col-5">
                       <label for="vin" class="form-label">VIN</label>
                        <input value="${car ? car.vin : ''}" type="text" value="" class="form-control" id="vin"
                            placeholder="1FABEW23OFS445">
                    </div>

                    <div class="mb-3 col-5">
                        <input value="${car ? car._id : ''}" type="hidden" id="docId">
                    </div>

                    <div class="mb-3 col-5">
                        <input value="${car ? car._rev : ''}" type="hidden" id="docRev">
                    </div>

                    <div class="modal-footer col-12">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        </div>`
}

export default upsertForm;