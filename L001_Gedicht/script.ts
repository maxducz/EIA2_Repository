console.log("Expecto Patronum");
namespace RandomGedicht {
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "Die Karte des Rumtreibers", "Dementoren"]
    console.log({ subjekte: subjects, praedikate: verbs, objekte: objects })


    let poem: string = "";
    for (let i = subjects.length; i > 0; i--) {
        poem = getVers(subjects, verbs, objects);
        console.log(poem)
    }


    function getVers(_subjects: string[], _verbs: string[], _objects: string[]): string {
        let vers: string = ""
        let randomsubjects: number = Math.floor(Math.random() * _subjects.length);
        let randomverb: number = Math.floor(Math.random() * _verbs.length)
        let randomobject: number = Math.floor(Math.random() * _objects.length);
        vers += subjects.splice(randomsubjects, 1)[0] + " "
        vers += verbs.splice(randomverb, 1)[0] + " "
        vers += objects.splice(randomobject, 1)[0] + " "




        return vers



    }
}