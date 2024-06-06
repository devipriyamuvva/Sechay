function validate(){    
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var conpassword=document.getElementById("conpassword").value;
    const pwdRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).{8,}$/;

    if(password==""){
        pwdError1.textContent="Password cannot be empty";
    }
    else{
        pwdError1.textContent="";
    }

    if(conpassword==""){
        pwdError2.textContent="Password cannot be empty";
    }
    else{
        pwdError2.textContent="";
    }

    if(username==""){
        unError.textContent="Username cannot be empty";
    }
    else{
        unError.textContent="";
    }

    if(username=="" || password=="" || conpassword==""){
        return false;
    }

    var users = JSON.parse(localStorage.getItem("uinfo"));

    if(!pwdRegex.test(password)){
        pwdError1.innerHTML="Password must contain at least 1 digit,<br> 1 lowercase letter,1 uppercase letter,<br>1 special character <br> length must be 8 characters";
        return false;
    }
    else{
        pwdError1.textContent="";
    }
    
    if (password != conpassword) {
        pwdError1.textContent = "Passwords do not match";
        pwdError2.textContent = "Passwords do not match";
        return false;
    }
    else {
        pwdError1.textContent = "";
        pwdError2.textContent = "";
    }

    var exists = false;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            exists = true;
            users[i].password = password;
            localStorage.setItem("uinfo", JSON.stringify(users));
            break;
        }
    }
    
    if (exists == false) {
        unError.textContent = "Username doesnot exist";
        return false;
    }
    else {
        unError.textContent = "";
        return true;
    }
}
