function verifyPassword() {  
  var password = document.getElementById("inputPassword").value;  
  var message = "";

  if(password === "") {  
     message += "Fill the password please!" + "<br>";  
  }  

  if(password.length < 8) {  
     message += "The password length must be at least 8 characters" + "<br>";  
  }  

  if(!hasLowerCase(password)) {  
      message += "The password must have at least one lowercase letter" + "<br>";
  }
  
  if(!hasUpperCase(password)) {  
      message += "The password must have at least one uppercase letter" + "<br>";
  } 
  
  if(!hasSpecialCharacters(password)) {  
      message += "The password must have at least one special character" + "<br>";
  }
  
  if (message === "") {
        message += "The password is strong!";
  }
  
  let content = `<div class="alert alert-secondary alert-dismissible fade show" role="alert">
                    <strong>${message}</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
    
   document.getElementById("password-validation").innerHTML += content;
}

function hasLowerCase(str) {
    return (/[a-z]/.test(str));
}

function hasUpperCase(str) {
    return (/[A-Z]/.test(str));
}

function hasSpecialCharacters(str) {
    return (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str));
}