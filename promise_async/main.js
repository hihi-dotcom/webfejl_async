const szerviz = new Service();//Példányosítottuk a Service osztályt
const dataviewcont = new DataViewController();// Példányosítottuk a DataViewController osztályt

szerviz.init().then((array_1) => {//Mivel a Service osztályunk init függvénye egy promisesal tér vissza, így megtudjuk hívni a then függvényét, amelynek callback paraméterében megkapjuk a resolvenak korábban átadott tömböt
    dataviewcont.renderData(array_1);//majd a then callbackben meghívjuk a DataViewController osztály példányának a renderdata függvényét a paraméter callback paraméterében kapott tömbbel
})
/** szerviz.initInvalid().catch(() => {
    dataviewcont.renderError('Nem tudjuk betölteni a táblázatot')//ha a promise a hamis ágba fut bele(rejected lesz), akkor meghívjuk a megadott szöveggel a renderError függvényt
});*/
szerviz.realInit(1).then((value) => {//meghívtuk a realInit függvényt(jó értékkel), ami egy Promise-t ad vissza, és a Promise then függvényének callbackjében megkapjuk a resolve függvény paraméterét
    dataviewcont.renderData(value)//majd a resolve paraméterével meghívjuk a DataViewController osztály példányának renderdata függvényét
});
szerviz.realInit(3).catch((error) => {//meghívtuk a realInitet megint, csak most hibás adattal,hogy a catch ágba fussunk bele a Promiseunkkal most(tehát a hibát oldjuk fel) és a catch callbackjének paraméterével meghívjuk a renderError függvényünket(kicseréljük a textContentet a privát div tulajdonságunkban a viewban)
    dataviewcont.renderError(error)});