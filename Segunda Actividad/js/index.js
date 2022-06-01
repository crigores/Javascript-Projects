let $estado = document.getElementById('estado');
let $ciudad = document.getElementById('ciudad');

let estado = ['Amazonas', 'Anzoategui', 'Apure', 'Aragua', 'Barinas', 'Bolivar', 'Carabobo', 'Cojedes', 'Delta Amacuro', 'Distrito Capital', 'Falcon', 'Guarico', 'La Guaira', 'Lara', 'Merida', 'Miranda', 'Monagas', 'Nueva Esparta', 'Portuguesa', 'Sucre', 'Tachira', 'Trujillo', 'Yaracuy', 'Zulia'];

let ciudad = [
  // Amazonas
  'Alto Orinoco', 'Atabapo', 'Atures', 'Autana', 'Manapiare', 'Maroa', 'Rio Negro',
  // Anzoategui
  'Anaco', 'Aragua', 'Diego Bautista Urbaneja', 'Fernando de Peñalver', 'Francisco del Carmen Carvajal', 'Francisco de Miranda', 'Guanta', 'Independencia', 'Jose Gregorio Monagas', 'Juan Antonio Sotillo', 'Juan Manuel Cajigal', 'Libertad', 'Manuel Ezequiel Bruzual', 'Pedro Maria Freites', 'Piritu', 'San Jose de Guanipa', 'San Juan de Capistrano', 'Santa Ana', 'Simon Bolivar', 'Simon Rodriguez', 'Sir Arthur Mc Gregor',
  //Apure
  'San Fernando', 'Achaguas', 'Biruaca', 'Muñoz', 'Paez', 'Pedro Camejo', 'Romulo Gallegos',
  //Aragua
  'Girardot', 'Bolivar', 'Camatagua', 'Francisco Linares Alcantara', 'Jose Angel Lamas', 'Jose Felix Ribas', 'Jose Rafael Revenga', 'Libertador', 'Mario Briceño Iragorry', 'Ocumare', 'San Casimiro', 'San Sebastian', 'Santiago Mariño', 'Santos Michelena', 'Sucre', 'Tovar', 'Urdaneta', 'Zamora',
  //Barinas
  'Barinas', 'Alberto Arvelo Torrealba', 'Andres Eloy Blanco', 'Antonio Jose de Sucre', 'Arismendi', 'Bolivar', 'Cruz Paredes', 'Ezequiel Zamora', 'Obispos', 'Pedraza', 'Rojas', 'Sosa',
  //Bolivar
  'Heres', 'Angostura', 'Caroni', 'Cedeño', 'El Callao', 'Gran Sabana', 'Padre Pedro Chien', 'Piar', 'Roscio', 'Sifontes', 'Sucre',
  //Carabobo
  'Valencia', 'Bejuma', 'Carlos Arvelo', 'Diego Ibarra', 'Guacara', 'Juan Jose Mora', 'Libertador', 'Los Guayos', 'Miranda', 'Montalban', 'Naguanagua', 'Puerto Cabello', 'San Diego', 'San Joaquin',
  //Cojedes
  'Ezequiel Zamora', 'Anzoategui', 'Girardot', 'Lima Blanco', 'Pao de San Juan Bautista', 'Ricaurte', 'Romulo Gallegos', 'Tinaco', 'Tinaquillo',
  //Delta Amacuro
  'Tucupita', 'Antonio Diaz', 'Casacoima', 'Pedernales',
  //Distrito Capital
  'Libertador',
  //Falcon
  'Miranda', 'Acosta', 'Bolivar', 'Buchivacoa', 'Cacique Manaure', 'Carirubana', 'Colina', 'Dabajuro', 'Democracia', 'Falcon', 'Federacion', 'Jacura', 'Los Taques', 'Municipio Mauroa', 'Monseñor Iturriza', 'Palma Sola', 'Petit', 'Piritu', 'San Francisco', 'Silva', 'Sucre', 'Tocopero', 'Union', 'Uramaco', 'Zamora',
  //Guarico
  'Juan German Roscio', 'Camaguan', 'Chaguaramas', 'El Socorro', 'Francisco de Miranda', 'Jose Felix Ribas', 'Tadeo Monagas', 'Julian Mellado', 'Las Mercedes', 'Leonardo Infante', 'Ortiz', 'Pedro Zaraza', 'San Geronimo de Guayabal', 'San Jose de Guaribe', 'Santa Maria de Ipire',
  //La Guaira
  'Vargas',
  //Lara
  'Iribarren', 'Andres Eloy Blanco', 'Crespo', 'Jimenez', 'Moran', 'Palavecino', 'Simon Planas', 'Torres', 'Urdaneta',
  //Merida
  'Libertador', 'Alberto Adriani', 'Andres Bello', 'Antonio Pinto Salinas', 'Aricagua', 'Arzobispo Chacon', 'Campo Elias', 'Caracciolo Parra Olmedo', 'Cardenal Quintero', 'Guaraque', 'Julio Cesar Salas', 'Justo Briceño', 'Miranda', 'Obispo Ramos de Lora', 'Padre Noguera', 'Pueblo Llano', 'Rangel', 'Santos Marquina', 'Sucre', 'Tovar', 'Tulio Febres Cordero', 'Zea',
  //Miranda
  'Guaicaipuro', 'Acevedo', 'Andres Bello', 'Baruta', 'Brion', 'Buroz', 'Carrizal', 'Chacao', 'Cristobal Rojas', 'El Hatillo', 'Independencia', 'Los Salias', 'Paez', 'Paz Castillo', 'Pedro Gual', 'Plaza', 'Simon Bolivar', 'Sucre', 'Tomas Lander', 'Urdaneta', 'Zamora',
  //Monagas
  'Acosta', 'Aguasay', 'Bolivar', 'Caripe', 'Cedeño', 'Ezequiel Zamora', 'Libertador', 'Maturin', 'Piar', 'Punceres', 'Santa Barbara', 'Sotillo', 'Uracoa',
  //Nueva Esparta
  'Antolin del Campo', 'Arismendi', 'Diaz', 'Garcia', 'Gomez', 'Maneiro', 'Marcano', 'Mariño', 'Peninsula de Macanao', 'Tubores', 'Villalba',
  //Portuguesa
  'Agua Blanca', 'Araure', 'Esteller', 'Guanare', 'Guanarito', 'Jose Vicente de Unda', 'Ospino', 'Paez', 'Papelon', 'San Genaro de Boconoito', 'San Rafael de Onoto', 'Santa Rosalia', 'Sucre', 'Turen',
  //Sucre
  'Andres Eloy Blanco', 'Andres Mata', 'Arismendi', 'Benitez', 'Bermudez', 'Bolivar', 'Cajigal', 'Cruz Salmeron Acosta', 'Libertador', 'Mariño', 'Mejia', 'Montes', 'Ribero', 'Sucre', 'Valdez',
  //Tachira
  'Andres Bello', 'Antonio Romulo Acosta', 'Ayacucho', 'Bolivar', 'Cardenas', 'Cordoba', 'Fernandez Feo', 'Francisco de Miranda', 'Garcia de Hevia', 'Guasimos', 'Independencia', 'Jauregui', 'Jose Maria Vargas', 'Junin', 'Libertad', 'Libertador', 'Lobatera', 'Michelena', 'Panamericano', 'Pedro Maria Ureña', 'Rafael Urdaneta', 'Samuel Dario Maldonado', 'San Cristobal', 'San Judas Tadeo', 'Seboruco', 'Simon Rodriguez', 'Sucre', 'Torbes', 'Uribante',
  //Trujillo
  'Andres Bello', ' Bocono', 'Bolivar', 'Candelaria', 'Carache', 'Escuque', 'Jose Felipe Marquez Cañizalez', 'Juan Vicente Campo Elias', 'La Ceiba', 'Miranda', 'Monte Carmelo', 'Motatan', 'Pampam', 'Pampanito', 'Rafael Rangel', 'San Rafael de Carvajal', 'Sucre', 'Trujillo', 'Urdaneta', 'Valera',
  //Yaracuy
  'Aristides Bastidas', 'Bolivar', 'Bruzual', 'Cocorote', 'Independencia', 'Jose Antonio Paez', 'La Trinidad', 'Manuel Monge', 'Nirgua', 'Peña', 'San Felipe', 'Sucre', 'Urachiche', 'Veroes',
  //Zulia
  'Almirante Padilla', 'Baralt', 'Cabimas', 'Catatumbo', 'Colon', 'Francisco Javier Pulgar', 'Guajira', 'Jesus Enrique Lossada', 'Jesus Maria Semprun', 'La Cañada de Urdaneta', 'Lagunillas', 'Machiques de Perija', 'Mara', 'Maracaibo', 'Miranda', 'Rosario de Perija', 'San Francisco', 'Santa Rita', 'Simon Bolivar', 'Sucre', 'Valmore Rodriguez'
];


function mostrar(arreglo, lugar) {
  let elementos = '<option selected disables>--Seleccione--</option>';

  for (let i = 0; i < arreglo.length; i++) {
    elementos += '<option value="' + arreglo[i] + '">' + arreglo[i] + '</option>';

  }
  lugar.innerHTML = elementos;
}

mostrar(estado, $estado);

$estado.addEventListener('change', function () {
  let valor = $estado.value;

  switch (valor) {
    case 'Amazonas':
      let amazonas = ciudad.slice(0, 7);
      mostrar(amazonas, $ciudad);
      break;
    case 'Anzoategui':
      let anzoategui = ciudad.slice(7, 28);
      mostrar(anzoategui, $ciudad);
      break;
    case 'Apure':
      let apure = ciudad.slice(28, 35);
      mostrar(apure, $ciudad);
      break;
    case 'Aragua':
      let aragua = ciudad.slice(35, 53);
      mostrar(aragua, $ciudad);
      break;
    case 'Barinas':
      let barinas = ciudad.slice(53, 65);
      mostrar(barinas, $ciudad);
      break;
    case 'Bolivar':
      let bolivar = ciudad.slice(65, 76);
      mostrar(bolivar, $ciudad);
      break;
    case 'Carabobo':
      let carabobo = ciudad.slice(76, 90);
      mostrar(carabobo, $ciudad);
      break;
    case 'Cojedes':
      let cojedes = ciudad.slice(90, 99);
      mostrar(cojedes, $ciudad);
      break;
    case 'Delta Amacuro':
      let deltaamacuro = ciudad.slice(99, 103);
      mostrar(deltaamacuro, $ciudad);
      break;
    case 'Distrito Capital':
      let caracas = ciudad.slice(103, 104);
      mostrar(caracas, $ciudad);
      break;
    case 'Falcon':
      let falcon = ciudad.slice(104, 129);
      mostrar(falcon, $ciudad);
      break;
    case 'Guarico':
      let guarico = ciudad.slice(129, 144);
      mostrar(guarico, $ciudad);
      break;
    case 'La Guaira':
      let guaira = ciudad.slice(144, 145);
      mostrar(guaira, $ciudad);
      break;
    case 'Lara':
      let lara = ciudad.slice(145, 154);
      mostrar(lara, $ciudad);
      break;
    case 'Merida':
      let merida = ciudad.slice(154, 176);
      mostrar(merida, $ciudad);
      break;
    case 'Miranda':
      let miranda = ciudad.slice(176, 197);
      mostrar(miranda, $ciudad);
      break;
    case 'Monagas':
      let monagas = ciudad.slice(197, 210);
      mostrar(monagas, $ciudad);
      break;
    case 'Nueva Esparta':
      let nesparta = ciudad.slice(210, 221);
      mostrar(nesparta, $ciudad);
      break;
    case 'Portuguesa':
      let portuguesa = ciudad.slice(221, 235);
      mostrar(portuguesa, $ciudad);
      break;
    case 'Sucre':
      let sucre = ciudad.slice(235, 250);
      mostrar(sucre, $ciudad);
      break;
    case 'Tachira':
      let tachira = ciudad.slice(250, 279);
      mostrar(tachira, $ciudad);
      break;
    case 'Trujillo':
      let trujillo = ciudad.slice(279, 299);
      mostrar(trujillo, $ciudad);
      break;
    case 'Yaracuy':
      let yaracuy = ciudad.slice(299, 313);
      mostrar(yaracuy, $ciudad);
      break;
    case 'Zulia':
      let zulia = ciudad.slice(313, 334);
      mostrar(zulia, $ciudad);
      break;
  }

})

var arrCompany = [];

function guardado() {
  const name = document.querySelector('#name').value;
  const estado = document.querySelector('#estado').value;
  const ciudad = document.querySelector('#ciudad').value;
  const address = document.querySelector('#address').value;
  const quantity = document.querySelector('#quantity').value;
  const latittude = document.querySelector('#latitud').value;
  const longitud = document.querySelector('#longitud').value;

  if (name.trim() == "") {
    alert("Por favor Introduzca un nombre");
  }
  else if (estado == "") {
    alert("Debe Seleccionar algun Estado");
  }
  else if (ciudad == "") {
    alert("Debe Seleccionar alguna Ciudad");
  }
  else if (isNaN(quantity) == true) {
    alert("No es un numero");
  }
  else {
    const registro = {
      "name": name,
      "estado": estado,
      "ciudad": ciudad,
      "address": (address.trim() == '') ? null : address,
      "quantity": quantity,
      "coord": {
        lat: latittude,
        long: longitud
      }
    }
    arrCompany.push(registro);

    mostrarDatos();

    document.querySelector('#name').value = "";
    document.querySelector('#estado').value = "";
    document.querySelector('#ciudad').value = "";
    document.querySelector('#address').value = "";
    document.querySelector('#quantity').value = "";
    document.querySelector('#latitud').value = "";
    document.querySelector('#longitud').value = "";

    localStorage.setItem("info", JSON.stringify(arrCompany));
    initMap();
  }
}

function mostrarDatos() {
  var mostrado = '';
  for (var i in arrCompany) {
    mostrado += `
    <tr>
        <td>${arrCompany[i].name}</td>
        <td>${arrCompany[i].estado}</td>
        <td>${arrCompany[i].ciudad}</td>
        <td>${arrCompany[i].quantity}</td>
        <td><button id="Editar"class="btn btn-primary"  onclick="Editar(${i})">Modificar</button></td>
    </tr>
    `;
  }
  document.getElementById("tbody").innerHTML = mostrado;
}

function Editar(i) {
  var x = '';
  x = `
  <div class="row">
      <div class="col-md-2">
            <button id="Actualizar"class="bttn" onclick="Actualizar(${i})">Actualizar</button>
      </div>
      <div class="col-md-2">
            <button id="Nuevo"  class="bttn" onclick="Nuevo()">Nuevo</button>
      </div>
  </div>
  `;

  document.querySelector('#name').value = arrCompany[i].name;
  document.querySelector('#estado').value = arrCompany[i].estado;
  document.querySelector('#ciudad').value = arrCompany[i].ciudad;
  document.querySelector('#address').value = arrCompany[i].address;
  document.querySelector('#quantity').value = arrCompany[i].quantity;
  document.querySelector('#latitud').value = arrCompany[i].coord.lat;
  document.querySelector('#longitud').value = arrCompany[i].coord.long;
  document.getElementById("botones").innerHTML = x
  const crd = JSON.stringify(arrCompany[i].coord)

  initMap(crd)
}

function Actualizar(i) {
  const name = document.querySelector('#name').value;
  const estado = document.querySelector('#estado').value;
  const ciudad = document.querySelector('#ciudad').value;
  const address = document.querySelector('#address').value;
  const quantity = document.querySelector('#quantity').value;
  const latittude = document.querySelector('#latitud').value;
  const longitud = document.querySelector('#longitud').value;

  if (name.trim() == "") {
    alert("Por favor Introduzca un nombre");
  }
  else if (estado == "") {
    alert("Debe Seleccionar algun Estado");
  }
  else if (ciudad == "") {
    alert("Debe Seleccionar alguna Ciudad");
  }
  else if (isNaN(quantity) == true) {
    alert("No es un numero");
  }
  else {


    arrCompany[i] = {
      "name": name,
      "estado": estado,
      "ciudad": ciudad,
      "address": (address.trim() == '') ? null : address,
      "quantity": quantity,
      "coord": {
        lat: latittude,
        long: longitud
      }
    }


    mostrarDatos();


    document.querySelector('#name').value = "";
    document.querySelector('#estado').value = "";
    document.querySelector('#ciudad').value = "";
    document.querySelector('#address').value = "";
    document.querySelector('#quantity').value = "";
    document.querySelector('#latitud').value = "";
    document.querySelector('#longitud').value = "";


    var y = '';

    y = `
  <button id="agregar"  class="bttn" onclick="guardado()">Agregar</button>
  
  `;
    document.getElementById("botones").innerHTML = y;
  }
}


function Nuevo() {
  document.querySelector('#name').value = "";
  document.querySelector('#estado').value = "";
  document.querySelector('#ciudad').value = "";
  document.querySelector('#address').value = "";
  document.querySelector('#quantity').value = "";
  document.querySelector('#latitud').value = "";
  document.querySelector('#longitud').value = "";


  var nuevo = '';
  nuevo = `

    <div class="row">
        <div class="col-md-2">
          <button id="agregar"  class="bttn" onclick="guardado()">Agregar</button>
        </div>
    </div>
    `;

  document.getElementById("botones").innerHTML = nuevo;
  initMap();
}



let map;

function initMap(coorde) {

  if (coorde == null) {
    var latitud = 10.700785286147847;
    var longitud = -71.62563356518555;

    coordenadas = {
      lat: latitud,
      lng: longitud

    }
    generarMapa(coordenadas);
  } else {

    var c = JSON.parse(coorde)
    var latitud = c.lat;
    var longitud = c.long;

    coordenadas = {
      lat: latitud,
      lng: longitud

    }
    generarMapa(coordenadas);
  }


}

function generarMapa(coordenadas) {
  var mapa = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: new google.maps.LatLng(coordenadas.lat, coordenadas.lng)
  });

  marcador = new google.maps.Marker({
    map: mapa,
    draggable: true,
    position: new google.maps.LatLng(coordenadas.lat, coordenadas.lng)
  });
  marcador.addListener('dragend', function (event) {
    document.getElementById("latitud").value = this.getPosition().lat();
    document.getElementById("longitud").value = this.getPosition().lng();
  });
}




var opt = {
  "Light": {
    "backgroundColor": '#fff',
    "color": '#272727'
  },
  "Dark": {
    "backgroundColor": '#272727',
    "color": '#fff'
  }
}

function Light() {
  localStorage.setItem("mode", "Light");
  mode();
}

function Dark() {
  localStorage.setItem("mode", "Dark");
  mode();
}

function mode() {
  const mode = localStorage.getItem("mode");

  var body = document.getElementById("body")
  body.style.backgroundColor = opt[mode].backgroundColor;
  


  var texto = document.getElementById("body");
  texto.style.color = opt[mode].color;
}



