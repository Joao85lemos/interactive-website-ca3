fetch('https://randomuser.me/api/?results=5').then(response => response.json()).then(function (data) {

    let userData = data.results;

    userData.forEach(obj => {
        let content = `
            <div class="profile_card col-sm">
                <div class="card" style="width: 18rem;">
                <img src="${obj.picture.large}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-text">Name: ${obj.name.first} ${obj.name.last}</h5>
                    <p class="card-text">Phone number: ${obj.cell}</p>
                    <p class="card-text">DOB: ${obj.dob.date}</p>
                    <p class="card-text">Age: ${obj.dob.age}</p>
                    <p class="card-text">Email ID: ${obj.email}</p>
                    <p class="card-text">City: ${obj.location.city}</p>
                    <p class="card-text">Country: ${obj.location.country}</p>
                    <p class="card-text">PostCode: ${obj.location.postcode}</p>
                </div>
                </div>
            </div>
        `;
        document.getElementById("profile_card").innerHTML += content;
    });
});
