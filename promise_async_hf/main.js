const menedzser = new Manager();
const tabla = new Table(menedzser);
const szerviz = new Service();
const betolto = new Loader(szerviz, menedzser);