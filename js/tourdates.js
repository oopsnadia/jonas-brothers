// FUNCIÓN QUE GENERA/CREA LA LISTA DE FECHAS EN EL DOM
//EN LA PÁGINA "TOURDATES.HTML"

const fechasDelTour = document.querySelector(".tourdates__tbody");

function renderTourDates() {
    fechas.forEach((fecha) => {
    fechasDelTour.innerHTML += `
                    <tr>
                        <td>${fecha.date}</td>
                        <td>${fecha.location}</td>
                        <td class="table__button"><button type="button" class="btn btn-warning"><a href="tickets.html">BUY
                                TICKETS</button><a></td>
                    </tr>`
    });
};

renderTourDates();