// ****** NOTA PARA EL PROFE OBED SANTOS: ***** 
// PROFE, AQUÍ SE ENCUENTRA LA FUNCIÓN QUE HACE "DESPLEGAR" UNA LISTA DE CANCIONES EN LA PÁGINA DE DISCOGRAPHY
// ESTO LO IMPLEMENTÉ A ÚLTIMO MOMENTO CUANDO ME DI CUENTA QUE TENÍA QUE HACER USO DE INFORMACIÓN ESTÁTICA EN FORMATO JSON
// NO SUPE CÓMO METER TODO DENTRO DE UN FOR, DE FORMA TAL QUE EN CADA ITERACIÓN PUDIERA CAMBIAR LA RUTA DEL JSON
// ME DISCULPO POR LA REPETICIÓN DE CÓDIGO

const table__tbody = document.getElementById("table__tbody1");
const table__tbodyDos = document.getElementById("table__tbody2");
const table__tbodyTres = document.getElementById("table__tbody3");
const table__tbodyCuatro = document.getElementById("table__tbody4");
const table__tbodyCinco = document.getElementById("table__tbody5");

const botonParaVerTracklist = document.getElementById("btn__tracklist1");
botonParaVerTracklist.addEventListener("click", traerListaDeCanciones);

const botonParaVerTracklistDos = document.getElementById("btn__tracklist2");
botonParaVerTracklistDos.addEventListener("click", traerListaDeCanciones2);

const botonParaVerTracklistTres = document.getElementById("btn__tracklist3");
botonParaVerTracklistTres.addEventListener("click", traerListaDeCanciones3);

const botonParaVerTracklistCuatro = document.getElementById("btn__tracklist4");
botonParaVerTracklistCuatro.addEventListener("click", traerListaDeCanciones4);

const botonParaVerTracklistCinco = document.getElementById("btn__tracklist5");
botonParaVerTracklistCinco.addEventListener("click", traerListaDeCanciones5);



/***  FUNCION PARA TRAER LA TRACKLIST DEL PRIMER BOTÓN - ALBUM 1  ***/

function traerListaDeCanciones() {
    fetch('../data/album1.json')
        .then(res => res.json())
        .then(datos => {
            tabla(datos)
        })

    //Toggle
    if (table__tbody.style.display === "none") {
        table__tbody.style.display = "";
    } else {
        table__tbody.style.display = "none";
    }
}


function tabla(datos) {
    table__tbody.innerHTML = `
            <thead>
             <tr>
                <th  scope="col">Track</th>
                <th class="table__tracklist--song" scope="col">Song</th>
                <th class="table__tracklist--duration" scope="col">Duration</th>
             </tr>
           </thead>`

    for (let valor of datos) {

        table__tbody.innerHTML += `
                <tr>
                    <th scope="row">${ valor.id }</th>
                    <td class="song">${ valor.song }</td>
                    <td class="duration">${ valor.duration }</td>
                </tr>`
    }
}

////////////////////////////////////////////////////////////////////////

/***  FUNCION PARA TRAER LA TRACKLIST DEL SEGUNDO BOTÓN - ALBUM 2  ***/

function traerListaDeCanciones2() {
    fetch('../data/album2.json')
        .then(res => res.json())
        .then(datos => {
            tablaDos(datos)
        })

    //Toggle
    if (table__tbodyDos.style.display === "none") {
        table__tbodyDos.style.display = "";
    } else {
        table__tbodyDos.style.display = "none";
    }
}

function tablaDos(datos) {
    table__tbodyDos.innerHTML = `
            <thead>
             <tr>
                <th  scope="col">Track</th>
                <th class="table__tracklist--song" scope="col">Song</th>
                <th class="table__tracklist--duration" scope="col">Duration</th>
             </tr>
           </thead>`

    for (let valor of datos) {
        table__tbodyDos.innerHTML += `
                <tr>
                    <th scope="row">${ valor.id }</th>
                    <td class="song">${ valor.song }</td>
                    <td class="duration">${ valor.duration }</td>
                </tr>`
    }
}


////////////////////////////////////////////////////////////////////////

/***  FUNCION PARA TRAER LA TRACKLIST DEL TERCER BOTÓN - ALBUM 3  ***/

function traerListaDeCanciones3() {
    fetch('../data/album3.json')
        .then(res => res.json())
        .then(datos => {
            tablaTres(datos)
        })

    //Toggle
    if (table__tbodyTres.style.display === "none") {
        table__tbodyTres.style.display = "";
    } else {
        table__tbodyTres.style.display = "none";
    }
}


function tablaTres(datos) {
    table__tbodyTres.innerHTML = `
            <thead>
             <tr>
                <th  scope="col">Track</th>
                <th class="table__tracklist--song" scope="col">Song</th>
                <th class="table__tracklist--duration" scope="col">Duration</th>
             </tr>
           </thead>`

    for (let valor of datos) {
        table__tbodyTres.innerHTML += `
                <tr>
                    <th scope="row">${ valor.id }</th>
                    <td class="song">${ valor.song }</td>
                    <td class="duration">${ valor.duration }</td>
                </tr>`
    }
}

////////////////////////////////////////////////////////////////////////

/***  FUNCION PARA TRAER LA TRACKLIST DEL CUARTO BOTÓN - ALBUM 4  ***/

function traerListaDeCanciones4() {
    fetch('../data/album4.json')
        .then(res => res.json())
        .then(datos => {
            tablaCuatro(datos)
        })

    //Toggle
    if (table__tbodyCuatro.style.display === "none") {
        table__tbodyCuatro.style.display = "";
    } else {
        table__tbodyCuatro.style.display = "none";
    }
}


function tablaCuatro(datos) {
    table__tbodyCuatro.innerHTML = `
            <thead>
             <tr>
                <th  scope="col">Track</th>
                <th class="table__tracklist--song" scope="col">Song</th>
                <th class="table__tracklist--duration" scope="col">Duration</th>
             </tr>
           </thead>`

    for (let valor of datos) {
        table__tbodyCuatro.innerHTML += `
                <tr>
                    <th scope="row">${ valor.id }</th>
                    <td class="song">${ valor.song }</td>
                    <td class="duration">${ valor.duration }</td>
                </tr>`
    }
}

////////////////////////////////////////////////////////////////////////

/***  FUNCION PARA TRAER LA TRACKLIST DEL QUINTO BOTÓN - ALBUM 5  ***/

function traerListaDeCanciones5() {
    fetch('../data/album5.json')
        .then(res => res.json())
        .then(datos => {
            tablaCinco(datos)
        })

    //Toggle
    if (table__tbodyCinco.style.display === "none") {
        table__tbodyCinco.style.display = "";
    } else {
        table__tbodyCinco.style.display = "none";
    }
}


function tablaCinco(datos) {
    table__tbodyCinco.innerHTML = `
            <thead>
             <tr>
                <th  scope="col">Track</th>
                <th class="table__tracklist--song" scope="col">Song</th>
                <th class="table__tracklist--duration" scope="col">Duration</th>
             </tr>
           </thead>`

    for (let valor of datos) {
        table__tbodyCinco.innerHTML += `
                <tr>
                    <th scope="row">${ valor.id }</th>
                    <td class="song">${ valor.song }</td>
                    <td class="duration">${ valor.duration }</td>
                </tr>`
    }
}