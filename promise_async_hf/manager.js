/**
 * @callback
 * @param {people[]} data
 * @returns {void}
 */
class Manager{
    
    #addCallback;
    #data;
    constructor(){
        this.#data = people;
        this.#addCallback = () => {};
    }
    settingAddCallback(callback){
        this.#addCallback = callback;
        this.#addCallback(this.#data);
        
    };
}