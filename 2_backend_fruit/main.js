const form = document.getElementById('fruitpost');

form.addEventListener('submit',  (e) => {
    e.preventDefault();
    const input1 = document.getElementById("name2");
    const input2 = document.getElementById("price2");

    const name = input1.value;
    const price = input2.value;

    const gyumolcs = {
        name: name,
        price: price,
    };

    fetch('http://127.0.0.1:63013/fruits', {
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(gyumolcs),
    })
    .then((response) => {
        const res_json = response.json();

    });


});