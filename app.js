const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//SELECTORS

const btn = document.querySelector('.btn');
const body = document.querySelector("body");
const color = document.querySelector('.color');

//LISETNERS

btn.addEventListener('click', clicked);

//FUNCTIONS

function clicked() {

    // console.log(body);
    let i = (Math.floor(Math.random() * 4))
    body.style.backgroundColor = colors[i];
    color.innerHTML = colors[i];
}
