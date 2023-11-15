const dataVehiculos = {
    "carroceria": [
        { "key": "camioneta-suv", "value": "Camioneta SUV" },
        { "key": "sedan", "value": "Sedán" }
    ],
    "marca": [
        { "key": "toyota", "value": "Toyota", "carroceria": ["camioneta-suv", "sedan"] },
        { "key": "nissan", "value": "Nissan", "carroceria": ["camioneta-suv", "sedan"] }
    ],
    "modelo": [
        { "key": "x-trail", "value": "X-Trail", "marca": ["nissan"], "carroceria": ["camioneta-suv"] }
    ]
};

window.onload = async function () {
    const categoriaHtml = document.getElementById("categoria");
    const marcaHtml = document.getElementById("marca");
    const modeloHtml = document.getElementById("modelo");

    fillDropDownOptions(dataVehiculos.carroceria, categoriaHtml);
    fillDropDownOptions(dataVehiculos.marca, marcaHtml);
    fillDropDownOptions(dataVehiculos.modelo, modeloHtml);
};

function fillDropDownOptions(optionsData, dropDownElement) {
    optionsData.forEach(option => {
        dropDownElement.options[dropDownElement.options.length] = new Option(option.value, option.key);
    });
}





/*window.onload = async function () {
  var categoriaHtml = document.getElementById("categoria");
  var marcaHtml = document.getElementById("marca");
  categoriaHtml.innerHTML = '<option value="" selected>Categoría</option>';
  var modeloHtml = document.getElementById("modelo");
  for (var x in selectVehiculo.carroceria) {
    console.log("Carroceria " + selectVehiculo.carroceria[x].key);
    categoriaHtml.options[categoriaHtml.options.length] = new Option(selectVehiculo.carroceria[x].value, selectVehiculo.carroceria[x].key);
  }

  categoriaHtml.onchange = function () {
    console.log("Carrocerias " + categoriaHtml.value);
    marcaHtml.innerHTML = '<option value="" selected>Marca</option>';
    for (var x in selectVehiculo.marca) {
      console.log("Carroceriass " + selectVehiculo.marca[x].carroceria);
      if (selectVehiculo.marca[x].carroceria.includes(categoriaHtml.value)) {
        console.log("Marca " + selectVehiculo.marca[x].key);
        marcaHtml.options[marcaHtml.options.length] = new Option(selectVehiculo.marca[x].value, selectVehiculo.marca[x].key);
      }
    }
  }

  marcaHtml.onchange = function () {
    modeloHtml.innerHTML = '<option value="" selected>Modelo</option>';
    for (var x in selectVehiculo.modelo) {
      if (selectVehiculo.modelo[x].marca.includes(marcaHtml.value) && selectVehiculo.modelo[x].carroceria.includes(categoriaHtml.value)) {
        modeloHtml.options[modeloHtml.options.length] = new Option(selectVehiculo.modelo[x].value, selectVehiculo.modelo[x].key);
      }
    }
  }
};*/