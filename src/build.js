const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

// …

registerServiceWorker();


const dataVehiculos = 
{
    "categoria": [
      {
        "key": "camioneta-suv",
        "value": "Camioneta SUV"
      },
      {
        "key": "sedan",
        "value": "Sedán"
      },
      {
        "key": "hatchback",
        "value": "Hatchback"
      }
    ],
    "marca": [
      {
        "key": "toyota",
        "value": "Toyota",        
        "categoria": [
          "camioneta-suv",
          "sedan",
          "hatchback"
        ]
      },
      {
        "key": "nissan",
        "value": "Nissan",
        "categoria": [
          "camioneta-suv",
          "sedan"
        ]
      }
    ],
    "modelo": [
      {
        "key": "yaris-hb",
        "value": "Yaris Hatchback",
        "marca": "toyota",
        "categoria": "hatchback"
      },
      {
        "key": "agya",
        "value": "Agya",
        "marca": "toyota",
        "categoria": "sedan"
      },
      {
        "key": "x-trail",
        "value": "X-Trail",
        "marca": "nissan",
        "categoria": "camioneta-suv"
      }
    ]
  };

  
/**
 * Codigo para manejar los Select, principal de busqueda de Vehiculo
 */  
window.onload = async function () {
    const categoriaHtml = document.getElementById("categoria");
    const marcaHtml = document.getElementById("marca");
    const modeloHtml = document.getElementById("modelo");

    fillDropDownOptions(dataVehiculos.categoria, categoriaHtml);
    fillDropDownOptions(dataVehiculos.marca, marcaHtml);
    fillDropDownOptions(dataVehiculos.modelo, modeloHtml);

/**
 * Fragmento de codigo select Categoria
 */    
    categoriaHtml.addEventListener('change', async (event) => {
        const selectedCategoria = categoriaHtml.value;

        if (selectedCategoria === "") {
            clearDropDownOptions(marcaHtml, "Marca");
            clearDropDownOptions(modeloHtml, "Modelo");
            fillDropDownOptions(dataVehiculos.marca, marcaHtml);
            fillDropDownOptions(dataVehiculos.modelo, modeloHtml);
        } else {            
            clearDropDownOptions(marcaHtml, "Marca");
            clearDropDownOptions(modeloHtml, "Modelo");
            const filteredMarcas = dataVehiculos.marca.filter(marca => marca.categoria.includes(selectedCategoria));
            for (const { key, value } of filteredMarcas) {
                marcaHtml.options[marcaHtml.options.length] = new Option(value, key);
            }
        }
    });
/**
 * Fragmento de codigo select Marca
 */    
    marcaHtml.addEventListener('change', async (event) => {
        const selectedMarca = marcaHtml.value;
        const selectedCategoria = categoriaHtml.value;
        let filteredMarcas = "";

        if (selectedMarca === "") {
            clearDropDownOptions(modeloHtml, "Modelo");            
            fillDropDownOptions(dataVehiculos.modelo, modeloHtml);
        } else {            
            clearDropDownOptions(modeloHtml, "Modelo");
            if (selectedCategoria === "") {                
                filteredMarcas = dataVehiculos.modelo.filter(modelo => modelo.marca.includes(selectedMarca));
            } else {                
                filteredMarcas = dataVehiculos.modelo.filter(
                    modelo => modelo.marca.includes(selectedMarca) && modelo.categoria.includes(selectedCategoria));
            }            
            for (const { key, value } of filteredMarcas) {
                modeloHtml.options[modeloHtml.options.length] = new Option(value, key);
            }
        }
    });
};

function fillDropDownOptions(optionsData, dropDownElement) {
    optionsData.forEach(({ key, value }) => {
        dropDownElement.options[dropDownElement.options.length] = new Option(value, key);
    });
}

function clearDropDownOptions(dropDownElement, name) {
    dropDownElement.innerHTML = '<option value="" selected>'+ name +'</option>';
}
