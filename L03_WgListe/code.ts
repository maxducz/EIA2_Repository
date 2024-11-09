// Event zum Hinzufügen einer Aufgabe
document.getElementById("add")?.addEventListener("click", function() {
    const list = document.getElementById("list");

    if (list) {
        // Eingabefelder auslesen
        const title = (document.getElementById("title") as HTMLInputElement).value;
        const who = (document.getElementById("who") as HTMLInputElement).value;
        const when = (document.getElementById("when") as HTMLInputElement).value;
        const comments = (document.getElementById("comments") as HTMLTextAreaElement).value;

        // Prüfen, ob alle Felder ausgefüllt sind
        if (title && who && when) {
            // Neues Aufgabenfeld erstellen
            const task = document.createElement("div");
            task.className = "task";

            // HTML für die neue Aufgabe mit den Eingabewerten
            task.innerHTML = `
                <strong>Aufgabe: ${title}</strong><br>
                Zuweisung: ${who}<br>
                Fällig am: ${when}<br>
                <p>Kommentar: ${comments}</p>
                <button class="delete-btn">Delete Task</button>
            `;

            // Aufgabe zur Liste hinzufügen
            list.appendChild(task);

            // Eingabefelder zurücksetzen
            (document.getElementById("title") as HTMLInputElement).value = "";
            (document.getElementById("who") as HTMLInputElement).value = "";
            (document.getElementById("when") as HTMLInputElement).value = "";
            (document.getElementById("comments") as HTMLTextAreaElement).value = "";

            // Event für den Lösch-Button der neuen Aufgabe
            task.querySelector(".delete-btn")?.addEventListener("click", function() {
                task.remove();
            });
        } else {
            alert("Bitte füllen Sie alle erforderlichen Felder aus.");
        }
    }
});

