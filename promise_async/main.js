const szerviz = new Service();
const dataviewcont = new DataViewController();

szerviz.init().then((array_1) => {
    dataviewcont.renderData(array_1);
});