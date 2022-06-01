const API = "https://pokeapi.co/api/v2";

var arrPkmn = [];
var offset = 0;
var output = '';

function getInit() {
    //? PAGE STARTER 
    offset += 20;
    output = '';
    
    document.getElementById("verMas").style.display = 'block';
    
    document.getElementById("data-pokmn").style.display = 'none';
    document.getElementById("habilidades").style.display = 'none';
    document.getElementById("movimientos").style.display = 'none';
    document.getElementById("imagenes").style.display = 'none';
    document.getElementById("volver").style.display = 'none';

    

    axios.get(`${API}/pokemon?limit=20`)
        .then(function (response) {
            // handle success
            arrPkmn = response.data.results;

            for (var pokemon of arrPkmn) {
                output += `
                <div class="col col-sm-6 col-md-3 mb-4 animate__animated animate__fadeInUp" >
                    <div class="card">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <span>#${pokemon.url.split('/')[6]}</span>
                            <h5 class="card-title capitalize">${pokemon.name}</h5>
                            <button class="btn btn-success" onclick="getById(${pokemon.url.split('/')[6]})"> Detalles </button>
                        </div>
                    </div>
                </div>
                `
            }

            document.getElementById("lista").innerHTML = output;

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}


function verMas() {
    axios.get(`${API}/pokemon?limit=20&offset=${offset}`)
        .then(function (response) {
            // handle success

            var arrPkmn = response.data.results;

            output = '';

            for (var pokemon of arrPkmn) {
                output += `
                <div class="col col-sm-6 col-md-3 mb-4 animate__animated animate__fadeInUp" >
                    <div class="card">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png" class="card-img-top" alt="">
                        <div class="card-body">
                            <span>#${pokemon.url.split('/')[6]}</span>
                            <h5 class="card-title">${pokemon.name}</h5>
                            <button class="btn btn-success" onclick="getById(${pokemon.url.split('/')[6]})"> Detalles </button>
                        </div>
                    </div>
                </div>
                `
            }

            document.getElementById("lista").innerHTML = output;

            // var newDiv = document.createElement("div");
            // var newContent = document.createTextNode(output);
            // newDiv.appendChild(newContent);

            // var currentDiv = document.getElementById("verMas");
            // document.body.insertBefore(newDiv, currentDiv);

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    offset += 20;
}

function getById(id) {
    output = "";
    
    
    document.getElementById("data-pokmn").style.display = 'block';
    document.getElementById("habilidades").style.display = 'block';
    document.getElementById("movimientos").style.display = 'block';
    document.getElementById("imagenes").style.display = 'block';
    document.getElementById("volver").style.display = 'block';

    document.getElementById("verMas").style.display = 'none';
    document.getElementById("lista").innerHTML = output;



    axios.get(`${API}/pokemon/${id}`)
        .then(function (response) {
            //! handle success
            arrPkmn = response.data;


            //* VERIFICAR CUANTOS TIPOS TIENE
            numTipos = arrPkmn.types.length;

            //* CONVERTIR DE LIBRAS A KILOS
            var peso = 0.45359237 * arrPkmn.weight;
            var altura = 0.1 * arrPkmn.height;
            altura = altura.toFixed(2);
            var abilities_size = arrPkmn.abilities.length;
            var moves_size = arrPkmn.moves.length;
            
            
            console.log(arrPkmn);

            let i = 0;
            output += `
                <div class="col">
                    <div class="text-center d-flex justify-content-center" id="title">
                        <h3 class="capitalize">${arrPkmn.name}</h3>
                        <span>#${id}</span>
                    </div>
        
                    <div class="d-flex">
                        <div id="imagen">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="pokemon-name">
                        </div>
        
                        <div class="content">
                            <div>
                                <label for=""> Tipos: </label>
                                `;
                                while (i < numTipos) {
                                    output += `
                                    <span>${arrPkmn.types[i].type.name}</span>
                                    `
                                    i++;
                                    }
                                output += `
                                
                            </div>
        
                            <div>
                                <div>
                                    <label for=""> Peso: <span> ${peso}kg </span></label>
                                </div>
                                <div>
                                    <label for=""> Altura: <span> ${altura}m </span></label>
                                </div>
        
                                <div>
                                    <label for=""> Sexo: </label>
                                    <span> Femenino </span>
                                    <span> Masculino </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.getElementById("data-pokmn").innerHTML = output;
            
            output = "";
            i = 0;

            // MOSTRAR HABILIDADES
            output+= `
            <div class="col col-md-6 col-sm-12">
                <h3>Tabla de Habilidades</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Habilidades</th>
                        </tr>
                    </thead>
                    <tbody>
                    `;

                    while(i < abilities_size){
                        output+=`
                        <tr>
                            <td> ${(i+1)} </td>
                            <td>${arrPkmn.abilities[i].ability.name}</td>
                        </tr>
                        `
                        i++;
                    }
                    output+=`
                    </tbody>
                </table>
            </div>
            `;
            document.getElementById("habilidades").innerHTML = output;

            output = "";
            i = 0;
            // Listar todos los movimientos
            output+= `
            <div class="col col-md-6 col-sm-12">
                <h3> Tabla de Movimientos </h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Movimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                    `;

                    while(i < moves_size){
                        output+=`
                        <tr>
                            <td> ${(i+1)} </td>
                            <td>${arrPkmn.moves[i].move.name}</td>
                        </tr>
                        `
                        i++;
                    }
                    output+=`
                    </tbody>
                </table>
            </div>
            `;
            document.getElementById("movimientos").innerHTML = output;

            output = "";
            i = 0;
            // Listar todos los movimientos
            output+= `
            <div class="d-flex justify-content-center text-center">
                <div class="col col-sm-3">
                    Femenino
                    <img src="${arrPkmn.sprites.front_default}" alt="" width="100%">
                </div>
                <div class="col col-sm-3">
                    Masculino
                    <img src="${arrPkmn.sprites.front_default}" alt="" width="100%">
                </div>
                <div class="col col-sm-3">
                    Shiny
                    <img src="${arrPkmn.sprites.front_shiny}" alt="" width="100%">
                </div>
            </div>
            `;
            document.getElementById("imagenes").innerHTML = output;


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}


function buscarPkmn() {

    var pokemon = document.querySelector('#busqueda').value;

    axios.get(`${API}/pokemon/${pokemon}`)
        .then(function (response) {
            // handle success
            getById(response.data.id);
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}