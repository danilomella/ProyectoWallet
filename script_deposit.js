$(document).ready(function() {
    var saldo = parseInt(localStorage.getItem("saldo")) || 0;
    $("#current-balance").text("$" + saldo);

    $("#depositForm").submit(function(e) {
        e.preventDefault();
        
        var monto = parseInt($("#depositAmount").val());

        if(monto > 0) {
            var nuevoSaldo = saldo + monto;
            localStorage.setItem("saldo", nuevoSaldo);

            $("#deposit-legend").text("Se depositarán: $" + monto).show();

            var successAlert = `
                <div class="alert alert-success mt-3" role="alert">
                    ¡Éxito! Nuevo saldo: $${nuevoSaldo}
                </div>`;
            $("#alert-container").html(successAlert);

            setTimeout(function() {
                window.location.href = "menu.html";
            }, 2000);
        }
    });
});