/**
 * @callback
 * @param {people[]} data
 * @returns {void}
 */
class Manager{
    
    #addCallback;
   
    constructor(){
        
        this.#addCallback = () => {};
    }
    settingAddCallback(callback){
        this.#addCallback = callback;
    };

    add(tomb){
        this.#addCallback(tomb);
    }
}