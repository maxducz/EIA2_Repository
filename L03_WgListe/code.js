"use strict";
// Event zum Hinzufügen einer Aufgabe
// Funktion zum Laden der Startdaten aus einer JSON-Datei
document.getElementById("add")?.addEventListener("click", function () {
    const list = document.getElementById("list");
    if (list) {
        // Eingabefelder auslesen
        const title = document.getElementById("title").value;
        const who = document.getElementById("who").value;
        const when = document.getElementById("when").value;
        const comments = document.getElementById("comments").value;
        // Prüfen, ob alle Felder ausgefüllt sind
        if (title && who && when) {
            // Neues Aufgabenfeld erstellen
            const task = document.createElement("div");
            task.className = "task";
            // HTML für die neue Aufgabe mit den Eingabewerten
            task.innerHTML =
                Aufgabe;
            $;
            {
                title;
            }
            /strong><br>;
            Zuweisung: $;
            {
                who;
            }
            Fällig;
            am: $;
            {
                when;
            }
            Kommentar;
            $;
            {
                comments;
            }
            /p>
                < button;
            class {
            }
            "delete-btn" > Delete;
            Task < /button>;
            // Aufgabe zur Liste hinzufügen
            list.appendChild(task);
            // Eingabefelder zurücksetzen
            document.getElementById("title").value = "";
            document.getElementById("who").value = "";
            document.getElementById("when").value = "";
            document.getElementById("comments").value = "";
            // Event für den Lösch-Button der neuen Aufgabe
            task.querySelector(".delete-btn")?.addEventListener("click", function () {
                task.remove();
            });
        }
        else {
            alert("Bitte füllen Sie alle erforderlichen Felder aus.");
        }
    }
});
//# sourceMappingURL=code.js.map