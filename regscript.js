
function validateRegistration(){
    var name=document.getElementById("name").value;
    var un=document.getElementById("username").value;
    var pwd1=document.getElementById("password").value;
    var phone=document.getElementById("phone").value;
    var pwd2=document.getElementById("confirm").value;
    var nameError=document.getElementById("nameError");
    var pwdError=document.getElementById("pwdError");
    var conpwdError=document.getElementById("conpwdError");
    var phoneError=document.getElementById("phoneError");
    var usernameError=document.getElementById("usernameError");
    
    // var userData = localStorage.getItem("uinfo") ? JSON.parse(localStorage.getItem("uinfo")) : [];  
    
    const pwdRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(un===""){
        usernameError.textContent="Value cannot be empty";
        // return false;
    }
    else{
        usernameError.textContent="";
    }
    if(pwd1===""){
        pwdError.textContent="Value cannot be empty";
        // return false;
    }
    else{
        pwdError.textContent="";
    }
    if(pwd2===""){
        conpwdError.textContent="Value cannot be empty";
        // return false;
    }
    else{
        conpwdError.textContent="";
    }
    if(phone===""){
        phoneError.textContent="Value cannot be empty";
        // return false;
    }
    else{
        phoneError.textContent="";
    }
    if(name===""){
        nameError.textContent="Value cannot be empty";
        // return false;
    }
    else{
        nameError.textContent="";
    }
    if (
        un === "" ||
        pwd1 === "" ||
        pwd2 === "" ||
        phone === "" ||
        name === ""
    ) {
        return false; // Prevent form submission
    }
    else{
        if(!pwdRegex.test(pwd1)){
            pwdError.innerHTML="Password must contain at least 1 digit,<br> 1 lowercase letter,1 uppercase letter,<br>1 special character <br> length must be 8 characters";
            return false;
        }
        else{
            pwdError.textContent="";
        }
        if(pwd1!=pwd2){
            pwdError.textContent="Passwords do not match";
            conpwdError.textContent="Passwords do not match";
            return false;
        }
        else{
            pwdError.textContent="";
            conpwdError.textContent="";
        }
        if(phone.length!=10){
            phoneError.textContent="Invalid phone number";
            return false;
        }
        else{
            phoneError.textContent="";
        }
    }

    var userData;
    if(localStorage.getItem("uinfo")){
        userData=JSON.parse(localStorage.getItem("uinfo"));
        for(var i=0;i<userData.length;i++){
            if(userData[i].username===un){
                alert("Username already exists");
                return false;
            }
        }
    }
    else{
        userData=[];
    }

    userData.push({
        username:un,
        password:pwd1,
        name:name
    });
    
    var usersData=JSON.stringify(userData);

    localStorage.setItem("uinfo",usersData);

    alert("Registration Successful !");
    return true;
}
