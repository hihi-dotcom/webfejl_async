class Service{
    #data;
    constructor(){
        this.#data = people;
    }
    init(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.#data);
            }, 3000);
        })
    }
}