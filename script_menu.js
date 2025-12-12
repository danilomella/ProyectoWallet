$(document).ready(function() {
    var saldoActual = localStorage.getItem("saldo") || 0;
    $("#saldo").text("$" + saldoActual);

    function redireccionar(selector, url, nombrePantalla) {
        $(selector).click(function(e) {
            e.preventDefault();
            $("#mensaje-redirect").text("Redirigiendo a " + nombrePantalla + "...").fadeIn();
            setTimeout(function() {
                window.location.href = url;
            }, 1000); 
        });
    }

    redireccionar("#btn-deposit", "deposit.html", "Depositar");
    redireccionar("#btn-send", "sendmoney.html", "Enviar Dinero");
    redireccionar("#btn-transactions", "transactions.html", "Últimos Movimientos");
});