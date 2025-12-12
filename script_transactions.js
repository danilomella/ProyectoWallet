$(document).ready(function() {
    const listaTransacciones = [
        { tipo: "compra", descripcion: "Compra en línea", monto: 50.00, fecha: "10/10/2025" },
        { tipo: "deposito", descripcion: "Depósito cajero", monto: 100.00, fecha: "11/10/2025" },
        { tipo: "transferencia", descripcion: "Transferencia enviada", monto: 75.00, fecha: "12/10/2025" },
        { tipo: "compra", descripcion: "Supermercado", monto: 5550.00, fecha: "13/10/2025" },
        { tipo: "deposito", descripcion: "Depósito ventanilla", monto: 10500.00, fecha: "14/10/2025" },
        { tipo: "transferencia", descripcion: "Pago de arriendo", monto: 7575.00, fecha: "15/10/2025" }
    ];

    function mostrarUltimosMovimientos(filtro) {
        $("#transactionsList").empty();

        listaTransacciones.forEach(t => {
            if (filtro === "todos" || t.tipo === filtro) {
                let colorBadge = "bg-secondary";
                if(t.tipo === "deposito") colorBadge = "bg-success";
                if(t.tipo === "compra") colorBadge = "bg-danger";
                if(t.tipo === "transferencia") colorBadge = "bg-primary";

                let item = `
                    <li class="list-group-item d-flex justify-content-between align-items-center py-3">
                        <div>
                            <h6 class="mb-0">${t.descripcion}</h6>
                            <small class="text-muted">${t.fecha}</small>
                        </div>
                        <span class="badge ${colorBadge} rounded-pill">$${t.monto}</span>
                    </li>`;
                
                $("#transactionsList").append(item);
            }
        });
    }

    mostrarUltimosMovimientos("todos");

    $("#filterType").change(function() {
        mostrarUltimosMovimientos($(this).val());
    });
});