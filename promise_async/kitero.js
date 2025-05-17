/**
 * 
 * @param {Number} szam 
 * @returns {Promise}
 */
function buyApple1(szam){//egy bemeneti paraméter
    if(szam < 5){//ha a bemeneti paraméter kisebb mint 5
        return Promise.resolve(`Van ${szam} alma`);// a Promise.resolval térünk vissza
    }
    else{
       return Promise.reject(`Nincs ${szam} almánk `);//Ha nem kisebb mint 5, akkor a Promise.reject-tel térünk vissza
    }
}

const applePromise = buyApple1(2);//meghívtuk a buyApple1 függvényt, ami egy Promise-t ad vissza és elraktuk egy változóba

//console.log(applePromise);
applePromise.then((value) => {// a Promise feloldásához a then függvényének meghívása kell, és a callback függv. paraméterét kilogoltuk a konzolba
    //Így vissza kaptuk a függvény feltételeinek megfelelő stringet
    console.log(value);
});
//console.log(applePromise);
//Azért kell feloldani a Promise-t, mert alapból a függvényünk egy Promise típusú objektummal tér vissza, amelynek egy tulajdonsága lesz a string, amit a feloldással kapunk meg

const applePromise2 = buyApple1(6);//Meghívtuk ismét a buyApple1 függvényt, de most 6-ot adtunk meg bemeneti paraméternek, előre tudva, hogy az else ágba fussunk bele
/**
 * A catchnek egy paramétere van egy callback, amiben belül megadjuk, hogy ami le fog futni amikor a Promise rejected állapotba kerül
 */
applePromise2.catch((error) => {//Az előbbi függvényhívást eltároltuk egy változóban, és meghívtuk a catch függvényt, hiszen a változóban egy Promise típusú objektum van. A catch függvénnyel kizárólag, a hibát oldjuk fel, tehát a rejectben található stringet fogjuk megkapni. 
    console.log(error);
});
//console.log(applePromise2);


const applePromise3 = buyApple1(4);//Ismét meghívtuk a legelső függvényt
applePromise3.then(value => {console.log(value);})//De mivel most 4-el hívtuk meg a függvényt, így csak a then függvény fog lefutni és a value paraméterünk pedig a buyApple1 függvényünkben található string lesz(if ág) és ezt kiírjuk a konzolra
.catch(error => {console.log(error);})

//Definiálunk egy újabb függvényt, amely dettó egy Promiset ad vissza, de egy másik syntaxxal oldjuk meg
//Ismét egy bemeneti paramétert várunk el, ami egy szám
/**
 * 
 * @param {Number} szam2 
 * @returns {Promise}
 */
function buyApple2(szam2){
    return new Promise((resolve, reject) => {//It egy Promise objektummal térünk vissza(buyApple2 függvény), a Promise konstruktorának egy executor callback a paramétere, amelynek két paramétere van, az egyik a resolve és a másik a reject, amelyek természetesen függvények.
        if(szam2 < 5){
            resolve(`Van ${szam2} alma`);//most az igaz ágban a callback első paraméterét hívjuk meg egy szöveggel, ami a resolve függvény
        }
        else{// a hamis ágban a callback második paraméterét hívjuk meg egy szöveggel, ami  a reject függvény
            reject(`Nincs ${szam2} almánk `);
        }
    })
}

//Promise feloldása
const applePromise4 = buyApple2(2);//meghívtuk a buyApple2 függvényt, ami egy Promise-t ad vissza és elraktuk egy változóba
applePromise4.then(value => {console.log(value);})//feoldottuk a Promiseunkat, és a then függvény fog lefutni, mert a bemeneti paraméterünk 2, ami kisebb mint 5(igaz ág)
.catch(error => {console.log(error);})

function buyApple3(szam3){//Definiáltunk egy újabb függvényt, amelynek a törzse szinte ugyanaz, mint a buyapple2 függvény, visszatérünk egy újabb Promisseal
    return new Promise((resolve, reject) => {//Ismételten hasonló syntaxxal írtuk meg a Promiseunkat, 
        if(szam3 < 5){//Most az if elseben még meghívtuk a setTimeOut függvényt, aminek két paramétere van, az egyik egy callback a másik pedig egy szám, amely a késletetés idejét adja meg
            //A callbackben(nincs paraméter) meghívtuk a resolve függvényét a Promiseunknak, a szöveggel
            setTimeout(() => {
                resolve(`Van ${szam3} alma`);
            }, 1000)
           
        }
        else{
            setTimeout(() => {//ismételten az történt, mint az igaz ágban, csak most a reject függvényét hívtuk meg a Promiseunknak a szöveggel, és természetesen a setTimeout mésodik paraméterét is megadtuk
                reject(`Nincs ${szam3} almánk `);
            }, 1000)
            
        }
    })
}

//Meghívtuk a buyApple3 függvényt,3-mal és elraktuk egy változóba
const applePromise5 = buyApple3(3);
applePromise5.then(value => {console.log(value);})//Feldolttuk a Promiseunkat, és a then függvény fog lefutni, mert a bemeneti paraméterünk 3, ami kisebb mint 5(igaz ágba futottunk bele)
.catch(error => {console.log(error);})