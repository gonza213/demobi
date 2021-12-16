// Tabla Inicio
$(".tr-inicio").hover(
  function () {
    var id = $(this).attr("idForm");
    $(this).append(
      $(
        `<span class='tr'>... <a href='pages/inicio/cotizador-auto.html&id=${id}' title='Cotizador-automotor' class='btn btn-primary btn-sm float-right'><i class='fas fa-info-circle p-1 text-center'></i></a></span>`
      )
    );
  },
  function () {
    $(this).find("span").last().remove();
  }
);

$(".tr-asegurados").hover(
  function () {
    var id = $(this).attr("idForm");
    $(this).append(
      $(
        //html
        `<span class='tr-2'>... 
  
            <a href='pages/inicio/cotizador-auto.html&id=${id}' title='consultor' class='btn btn-primary w-25 btn-sm float-right mr-1'><i class='fas fa-info-circle p-1'></i></a>
          
            <button class="btn btn-primary btn-sm  float-right mr-1 w-25" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton1" aria-expanded="false">
            <i class="fas fa-file-pdf p-1"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <button class="dropdown-item" type="button">Mapa</button>
                <button class="dropdown-item" type="button">Ficha</button>
            </div>
  
            <button class="btn btn-primary btn-sm  float-right mr-1 w-25" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton2" aria-expanded="false">
            <i class="fas fa-table p-1"></i>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <button class="dropdown-item" type="button">Pólizas</button>
                <button class="dropdown-item" type="button">Operaciones</button>
                <button class="dropdown-item" type="button">Cobranzas</button>
                <button class="dropdown-item" type="button">Siniestros</button>
            </div>

          
      
            </span>`
      )
    );
  },
  function () {
    $(this).find("span").last().remove();
  }
);

// Tablas Control
$(".tr-pendiente").hover(
  function () {
    var id = $(this).attr("idForm");
    // $(this).append($(`<span class='tr'>... <a href='pages/inicio/pendientes-de-emision-operaciones.html&id=${id}' title='Cotizador-automotor' class='btn btn-primary btn-sm'><i class='fas fa-info-circle p-1'></i></a></span>`));
    $(this).append(
      $(
        `<span class='tr'>... <a href='pendientes-de-emision-operaciones.html' title='Pendientes' class='btn btn-primary btn-sm float-right mr-3'><i class='fas fa-info-circle p-1'></i></a></span>`
      )
    );
  },
  function () {
    $(this).find("span").last().remove();
  }
);
