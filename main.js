function login(){
    var user, password
     user = document.getElementById("usuario").value;
     password = document.getElementById("contrasenha").value;
    if( user == "DiegoYSandra" && password == "1234"){
        window.location = "bookstore.html";
        localStorage.usuario = user
    }else{
        alert("Datos Incorrectos")
    }
}
