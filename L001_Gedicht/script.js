"use strict";
console.log("Expecto Patronum");
var RandomGedicht;
(function (RandomGedicht) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "Die Karte des Rumtreibers", "Dementoren"];
    console.log({ subjekte, praedikate, objekte });
    for (let i = subjekte.length; i >= 1; i--) {
        let Ergebniss = getVerse([], [], []);
        console.log(Ergebniss, i);
    }
    function getVerse(_subjekte, _praedikate, _objekte) {
        return "alohomora";
    }
})(RandomGedicht || (RandomGedicht = {}));
//# sourceMappingURL=script.js.map