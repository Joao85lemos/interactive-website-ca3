fetch('https://randomuser.me/api/?results=5').then(response => response.json()).then(function (data) {

    let userData = data.results;

    userData.forEach(obj => {
        let content = `
                    <div class="card" style="width: 18rem;">
                      <img src="${obj.picture.large}" class="card-img-top" alt="customer card image">
                      <div class="card-body">
                        <h5 class="card-title">${obj.name.first} ${obj.name.last}</h5>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Phone number: ${obj.cell}</li>
                        <li class="list-group-item">DOB: ${obj.dob.date}</li>
                        <li class="list-group-item">Age: ${obj.dob.age}</li>
                        <li class="list-group-item">Email ID: ${obj.email}</li>
                        <li class="list-group-item">City: ${obj.location.city}</li>
                        <li class="list-group-item">Country: ${obj.location.country}</li>
                        <li class="list-group-item">PostCode: ${obj.location.postcode}</li>
                      </ul>
                    </div>
                    `;
        document.getElementById("customer-card").innerHTML += content;
    });
});