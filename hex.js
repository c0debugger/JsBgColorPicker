
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//SELECTORS

const btn = document.querySelector('.btn');
const body = document.querySelector("body");
const color = document.querySelector('.color');

//LISETNERS
btn.addEventListener('click', clicked);

//FUNCTIONS

function clicked() {

    // console.log(body);
    let colors = ['#'];

    for (let index = 0; index < 6; index++) {

        let i = (Math.floor(Math.random() * hex.length))
        colors.push(hex[i])

    }

    // console.log(colors)
    let joinedColors = colors.join('');
    // console.log(joinedColors);


    body.style.backgroundColor = joinedColors;
    color.innerHTML = joinedColors;

}