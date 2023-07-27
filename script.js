
const operationPara = document.querySelector('.operationPara')
const button = document.querySelector('.button');
const whiteBoxShadowDiv = document.querySelector('.whiteBoxShadowDiv');
let value = false

button.addEventListener('click', (event) => {
    if (value === false) {
        operationPara.style.display = 'none'
        button.textContent = 'Show More'
        value = true;
        whiteBoxShadowDiv.style.boxShadow = '0 -20px 15px whitesmoke';
    }else if (value === true) {
        operationPara.style.display = 'initial'
        button.textContent = 'Show Less';
        value = false;
        whiteBoxShadowDiv.style.boxShadow = '0 0 0'
    }
})