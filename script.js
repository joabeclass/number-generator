function generateNumber(){
    const min = Math.ceil(document.getElementById('min').value);
    const max = Math.floor(document.getElementById('max').value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(result)) {
        result = 'Valor inválido';
    }

    document.querySelector('#result > span').textContent = result;
};

