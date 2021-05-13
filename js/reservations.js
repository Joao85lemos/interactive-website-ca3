$(document).ready(dataTable());

function dataTable() {
    $('#myTable').DataTable({
        "order": [[ 0, "asc" ]]
    });
}

function addReservation() {
    var name = document.getElementById("name-input").value;
    var phone = document.getElementById("tel-input").value;
    var date = document.getElementById("date-input").value;
    var time = document.getElementById("time-input").value;
    
    let content = `
        <tr>
            <th scope="row">${date}</th>
            <td>${time}</td>
            <td>${name}</td>
            <td>${phone}</td>
        </tr>
    `;
    
    document.getElementById("reservations-tbody").innerHTML += content;
}


