class Table{
    #manager;
    /**
     * 
     * @param {Manager} manager 
     */
    constructor(manager){
        this.#manager = manager;
        const div1 = document.createElement('div');
        document.body.appendChild(div1);
        this.#manager.settingAddCallback((data) => {
            for(const person of data){
                const newdiv = document.createElement('div');
                newdiv.textContent = `${person.name} - (${person.age}) - rendelkezik egy ${person.car.color} színű ${person.car.type} autóval`;
                div1.appendChild(newdiv);
            }
        });
        
    };
};