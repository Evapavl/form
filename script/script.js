let button = document.getElementById('button');

button.addEventListener('click', () => {
    let input = document.getElementById('input');
    let text = document.getElementById('text');
    let p = document.createElement('p');
    let parags = [];

    if (input.value.length > 0) {
        parags.push(p)
    }

    for (let parag of parags) {
        parag.innerHTML = input.value;

        if (input.value.length > 3) {
            parag.style.color = 'green';
        }
        let redParag = /\W+/.test(input.value);
        if (redParag) {
            parag.style.color = 'red';
        }
        text.appendChild(parag)
    }
    input.value = "";
})


