function validateLogin(){
    var un=document.getElementById("username").value;
    var pwd=document.getElementById("password").value;

    var unError=document.getElementById("unError");
    var pwdError=document.getElementById("pwdError");

    if(un===""){
        unError.textContent="Username cannot be empty";
        // return false;
    }
    else{
        unError.textContent="";
    }
    if(pwd===""){
        pwdError.textContent="Password cannot be empty";
        // return false;
    }
    else{
        pwdError.textContent="";
    }
    if(un==="" || pwd===""){
        return false;
    }
    
    var data=localStorage.getItem("uinfo");
    var creds=JSON.parse(data);

    var isValidCredentials=false; 

    for(var i=0;i<creds.length;i++){
        if(creds[i].username===un && creds[i].password===pwd){
            isValidCredentials=true;
            break; 
        }
    }

    if(isValidCredentials){
        sessionStorage.setItem("userSession","active");
        return true; 
    } else{
        alert("Invalid Credentials! Please try again.");
        return false; 
    }
}