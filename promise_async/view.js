class DataViewController{
    #div;
    constructor(){
        const div1 = document.createElement('div');
        div1.textContent = 'Loading...';
        this.#div = div1;
        document.body.appendChild(this.#div);
    }
    renderData(array){
        this.#div.innerHTML = '';
        for(const data of array){
            const div = document.createElement('div');
            this.#div.appendChild(div);
            div.textContent = `${data.name} - ${data.age} - ${data.sex}`;
        };
    };
};