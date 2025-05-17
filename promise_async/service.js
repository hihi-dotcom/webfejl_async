//Definiáltunk egy Service osztályt, amelynek van egy privát tulajdonsága(#data) 

class Service{
    #data;
    constructor(){// Az osztály konstruktorában a privát tulajdonságnak értékül adjuk a people tömböt(random_people.js fájlból érjük el)
        this.#data = people;
    }
    init(){//definiáltunk egy init publikus függvényt, amely visszatér egy újabb Promise-al
        return new Promise((resolve) => {//Az új promise konstruktorának callback paraméterében, csak egy resolve függvény van paraméterként
            setTimeout(() => {//meghívtuk a setTimeout függvényt, a Promise konstruktorának callbackjében
                resolve(this.#data);//és a setTimeout callbackjében meghívtuk a Promise resolve függvényét, amelynek paraméterül adtuk a privát tulajdonságunkat
            }, 3000);//megadtuk még  a setTimeout második paraméterét is, ami a késleltetési időt adja meg
        })
    };

    initInvalid(){//létrehoztam egy initInvalid publikus függvényt
        //hasonló a törzs, mint a korábbi init függvényben, csak most a rejectet csináljuk meg szintén setTimeouttal
        return new Promise((reject) => {
            setTimeout(() => {
                reject('Sajnos nem sikerült az adatok betöltése.')
            }, 3000);
        }); 
    };

    realInit(num){//definiáltam a realInit függvényt, amelynek bemeneti paramétere van 
        //és egy promissal tér vissza, amelynek a callbackjében eggy if elsehez kötjük a bemeneti paraméterrel a resolve és reject függvényeket + setTimeout
        return new Promise((resolve, reject) => {
            if(num < 2){
                setTimeout(() => {
                    resolve(this.#data);
                }, 4000);
            }
            else{
                setTimeout(() => {
                    reject('Nem tudtuk betölteni az adatokat');
                }, 4000);
            }
        });
    };
}