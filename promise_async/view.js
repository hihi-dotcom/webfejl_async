class DataViewController{
    #div;
    constructor(){
        
    }
    renderData(array){
        for(data of array){
            const div = document.createElement('div');
            document.body.appendChild(div);
            div.textContent = `${data.name} - ${data.age} - ${data.sex}`;
        };
    };
};