class DataViewController{//Létrehoztuk a DataviewController osztályt, aminek egy rpivát div tulajdonsága van(#div)
    #div;
    constructor(){//A konstruktorban
        const div1 = document.createElement('div'); //Létrehoztunk egy div elemet
        div1.textContent = 'Loading...';//megadtuka div textcontentjét
        this.#div = div1;// aprivat tulajdonságunknak értékül adtuk a div elemet
        document.body.appendChild(this.#div);//Így hozzá tudtuk appendelni a bodyhoz
    }
    renderData(array){//Definiáltunk egy renderData függvényt, amelynek bemeneti paramétere egy tömb
        this.#div.innerHTML = '';//töröltük a div tartalmát
        for(const data of array){// a for of ciklusban végigiterálunk a bemeneti tömbön
            const div = document.createElement('div');// minden egyes iterációnál létrehozunk egy újabb div elemet(minden embernek)
            this.#div.appendChild(div);// ezt a div elemet hozzáadjuk a privát tulajdonságunkhoz
            div.textContent = `${data.name} - ${data.age} - ${data.sex}`;// a div textcontentjének megadtuk a ciklusváltozó tulajdonságait kötőjellel elválasztva
        };
    };

    /**
     * 
     * @param {String} errorMessage 
     */
    renderError(errorMessage){//definiáltam egy renderError függvényt
        this.#div.textContent = errorMessage;//a privát tulajdonságunk textcontentjének megadtam a bemeneti paramétert
    }
};