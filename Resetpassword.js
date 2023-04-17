function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
    let message = document.getElementById("message");

    if(password.length >= 8 && password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords match";
            message.style.backgroundColor = "green";
            document.getElementById("check3").style.color="green";

        }
        else{
            message.textContent = "Password don't match";
            message.style.backgroundColor = "red";
            document.getElementById("check3").style.color="red";

        }
    }
    else{
        alert("Password can't be empty and should have a minimum length of 8 characters!");
        message.textContent = "";
    }
    
    if(password.match(/[0-9]/i))
       {
        document.getElementById("check4").style.color="green";
       }
    else
       {
        document.getElementById("check4").style.color="red";
       }

       if(password.match(/[^A-Za-z0-9-' ']/i))
       {
        document.getElementById("check1").style.color="green";
       }
       else
       {
       document.getElementById("check1").style.color="red";
       }
       
       if(password.match(/[a-z]/i))
       {
        document.getElementById("check0").style.color="green";
       }
       else
       {
        document.getElementById("check0").style.color="red";
       }

       if(password.match(/[A-Z]/i))
       {
        document.getElementById("check2").style.color="green";
       }
       else
       {
        document.getElementById("check2").style.color="red";
       }

}