const countValue = document.querySelector('#counter');

const increment = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // update the value
    value = value + 1;
    // set the value onto UI
    countValue.innerText = value;
};

// parseInt is use to convert string into int

const decrement = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // update the value
    value = value - 1;
    // set the value onto UI
    countValue.innerText = value;
};