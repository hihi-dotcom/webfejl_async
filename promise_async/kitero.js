function buyApple1(szam){
    if(szam < 5){
        return Promise.resolve(`Van ${szam} alma`);
    }
    else{
       return Promise.reject(`Nincs ${szam} almánk `);
    }
}

const applePromise = buyApple1(2);
//console.log(applePromise);
applePromise.then((value) => {
    console.log(value);
});
//console.log(applePromise);

const applePromise2 = buyApple1(6);
applePromise2.catch((error) => {
    console.log(error);
});
//console.log(applePromise2);


const applePromise3 = buyApple1(4);
applePromise3.then(value => {console.log(value);})
.catch(error => {console.log(error);})

//Promise létrehozása
function buyApple2(szam2){
    return new Promise((resolve, reject) => {
        if(szam2 < 5){
            resolve(`Van ${szam2} alma`);
        }
        else{
            reject(`Nincs ${szam2} almánk `);
        }
    })
}

//Promise feloldása
const applePromise4 = buyApple2(2);
applePromise4.then(value => {console.log(value);})
.catch(error => {console.log(error);})

function buyApple3(szam3){
    return new Promise((resolve, reject) => {
        if(szam3 < 5){
            setTimeout(() => {
                resolve(`Van ${szam3} alma`);
            }, 1000)
           
        }
        else{
            setTimeout(() => {
                reject(`Nincs ${szam3} almánk `);
            }, 1000)
            
        }
    })
}
const applePromise5 = buyApple3(3);
applePromise5.then(value => {console.log(value);})
.catch(error => {console.log(error);})