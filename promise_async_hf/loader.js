class Loader{
    /**
     * 
     * @param {Service} szerviz 
     * @param {Manager} manager 
     */
    constructor(szerviz, manager){

        const gomb1 = document.createElement('button');
        gomb1.onclick = szerviz.create();
    };
};