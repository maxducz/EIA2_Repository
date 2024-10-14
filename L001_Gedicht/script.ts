console.log("Expecto Patronum");
namespace RandomGedicht {
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "Die Karte des Rumtreibers", "Dementoren"]
    console.log({subjekte, praedikate, objekte})
    for (let i = subjekte.length; i>= 1; i--) {
        let Ergebniss: string = getVerse([], [], [])
        console.log(Ergebniss, i)
    }
    function getVerse(_subjekte: string[], _praedikate: string[], _objekte: string[]): string {
        return "alohomora"
    }
}