fetch("/api/health")
    .then(r => r.json())
    .then(data => {

        document.getElementById("status").innerHTML =
            `Server läuft seit ${Math.round(data.uptime)} Sekunden`;

    });