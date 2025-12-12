$(document).ready(function() {
 
    if (!localStorage.getItem("saldo")) {
        localStorage.setItem("saldo", 1830000);
    }

    $("#loginForm").submit(function(e) {
        e.preventDefault();
        
        var email = $("#email").val();
        var password = $("#password").val();
        
    
        var email_correcto = "prueba@gmail.com";
        var password_correcto = "123";

        $("#alert-container").empty();

        if (email === email_correcto && password === password_correcto) {
            window.location.href = "menu.html";
        } else {
            var alerta = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error:</strong> Credenciales incorrectas.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
            $("#alert-container").append(alerta);
        }
    });
});