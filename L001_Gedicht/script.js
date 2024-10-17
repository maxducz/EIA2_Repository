"use strict";
console.log("Expecto Patronum");
var RandomGedicht;
(function (RandomGedicht) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "Die Karte des Rumtreibers", "Dementoren"];
    console.log({ subjekte: subjects, praedikate: verbs, objekte: objects });
    let poem = "";
    for (let i = subjects.length; i > 0; i--) {
        poem = getVers(subjects, verbs, objects);
        console.log(poem);
    }
    function getVers(_subjects, _verbs, _objects) {
        let vers = "";
        let randomsubjects = Math.floor(Math.random() * _subjects.length);
        let randomverb = Math.floor(Math.random() * _verbs.length);
        let randomobject = Math.floor(Math.random() * _objects.length);
        vers += subjects.splice(randomsubjects, 1)[0] + " ";
        vers += verbs.splice(randomverb, 1)[0] + " ";
        vers += objects.splice(randomobject, 1)[0] + " ";
        return vers;
    }
})(RandomGedicht || (RandomGedicht = {}));
//# sourceMappingURL=script.js.map