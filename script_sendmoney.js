$(document).ready(function() {
    var contactos = [
        { nombre: "Goku", cbu: "12345678" },
        { nombre: "Vegeta", cbu: "87654321" },
        { nombre: "Krillin", cbu: "11223344" }
    ];

    function renderContactos() {
        $("#contactList").empty();
        contactos.forEach(function(c) {
            $("#contactList").append(`
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-nombre="${c.nombre}">
                    <span>${c.nombre} <small class="text-muted ms-2">(${c.cbu})</small></span>
                    <i class="bi bi-chevron-right"></i>
                </li>
            `);
        });
    }
    renderContactos();
    $("#searchContact").on("keyup", function() {
        var query = $(this).val().toLowerCase();
        $("#suggestions").empty();

        if (query.length > 0) {
            var filtrados = contactos.filter(c => c.nombre.toLowerCase().includes(query));
            if(filtrados.length > 0) {
                filtrados.forEach(c => {
                    $("#suggestions").append(`<button class="list-group-item list-group-item-action suggestion-item">${c.nombre}</button>`);
                });
                $("#suggestions").show();
            } else { $("#suggestions").hide(); }
        } else { $("#suggestions").hide(); }

        $("#contactList li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(query) > -1)
        });
    });

    $(document).on("click", ".suggestion-item", function() {
        $("#searchContact").val($(this).text());
        $("#suggestions").hide();
        $("#searchContact").trigger("keyup");
    });

    $("#contactList").on("click", "li", function() {
        $("#contactList li").removeClass("active");
        $(this).addClass("active");
        $("#selectedContactName").text($(this).data("nombre"));
        $("#sendSection").slideDown();
        $("#sendSuccessMsg").hide();
    });

    $("#btnSendMoney").click(function() {
        var monto = parseInt($("#amountToSend").val());
        var saldo = parseInt(localStorage.getItem("saldo")) || 0;

        if(monto > 0 && monto <= saldo) {
            var nuevoSaldo = saldo - monto;
            localStorage.setItem("saldo", nuevoSaldo);
            
            $("#sendSection").slideUp();
            $("#sendSuccessMsg").text("¡Transferencia de $" + monto + " exitosa! Nuevo saldo: $" + nuevoSaldo).fadeIn();
            $("#amountToSend").val("");
        } else if (monto > saldo) {
            alert("Saldo insuficiente.");
        } else {
            alert("Monto inválido.");
        }
    });

    $("#btnToggleAdd").click(function() { $("#newContactForm").toggle(); });
    $("#btnCancelAdd").click(function() { $("#newContactForm").hide(); });
    $("#btnSaveContact").click(function() {
        var nom = $("#newContactName").val();
        var cbu = $("#newContactCBU").val();
        if(nom && cbu) {
            contactos.push({nombre: nom, cbu: cbu});
            renderContactos();
            $("#newContactForm").hide();
            $("#newContactName").val("");
            $("#newContactCBU").val("");
        }
    });
});