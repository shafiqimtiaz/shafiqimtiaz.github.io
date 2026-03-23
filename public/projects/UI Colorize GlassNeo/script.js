const buttonClick = document.querySelector('#btn-click');
const buttonSwitch = document.querySelectorAll('#btn-switch');
const heading = document.querySelector('h1');

buttonClick.addEventListener('click', () => {
    const colorArr = randomColorArray();
    const reducer = (accumulator, colorArr) => accumulator + colorArr;
    const colorSum = colorArr.reduce(reducer, 0);

    const newColor = `rgb(${colorArr[0]},${colorArr[1]},${colorArr[2]})`;
    document.body.style.backgroundColor = newColor;
    heading.innerText = newColor;

    if (colorSum < 250) {
        heading.style.color = 'white';
        buttonClick.style.color = 'white';
        for (btn of buttonSwitch) {
            btn.style.color = 'white';
        }
    } else {
        heading.style.color = 'black';
        buttonClick.style.color = 'black';
        for (btn of buttonSwitch) {
            btn.style.color = 'black';
        }
    }
})

const randomColorArray = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}

const buttonGlass = document.querySelector('.button-glass');
const buttonNeo = document.querySelector('.button-neo');
const pagestyle = document.querySelector('#pagestyle');

buttonGlass.addEventListener('click', () => {
    pagestyle.setAttribute('id', 'pagestyle');
    pagestyle.setAttribute('href', 'style_glass.css');
})

buttonNeo.addEventListener('click', () => {
    pagestyle.setAttribute('id', 'pagestyle');
    pagestyle.setAttribute('href', 'style_neo.css');
})