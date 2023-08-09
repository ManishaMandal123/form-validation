function validateForm() {
    // Get form inputs
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;
    let passwordConfirmation = document.forms["myForm"]["passwordConfirmation"].value;

    // Validate name
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    // Validate email
    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else {
        let atpos = email.indexOf("@");
        let dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos +2 || dotpos +2 >= email.length) {
            alert("Not a valid e-mail address");
            return false;
        }
    }

    // Validate password

   
        // Check if password is at least 8 characters long
        if (password.length < 8) {
          return "Password must be at least 8 characters long";
        }
      
        // Check if password contains at least one uppercase letter
        if (!password.match(/[A-Z]/)) {
          return "Password must contain at least one uppercase letter";
        }
      
        // Check if password contains at least one lowercase letter
        if (!password.match(/[a-z]/)) {
          return "Password must contain at least one lowercase letter";
        }
      
        // Check if password contains at least one digit
        if (!password.match(/[0-9]/)) {
          return "Password must contain at least one digit";
        }
      
        // Check if password contains at least one special character
        if (!password.match(/[^A-Za-z0-9]/)) {
          return "Password must contain at least one special character";
        }

       

        // Validate password confirmation
        if (password !== passwordConfirmation) {
            alert("Password and password confirmation do not match");
            return false;
          }
    
      

    // If all validations pass
    return true;
}