namespace L04_Cocktailbar {

    interface Item {
        name: string;
        price: number;
    }

    interface Data {
        [category: string]: Item[];
    }

    let Data: Data {
        Drink: [
            {name: "Mojito", price: 25.00},

        ],
        
        Extras: [
            {name: "Ice", price: 0.50},

        ],

        COntainer: [
            {name: "Slim", price: 3.50},
        ]
    }
}