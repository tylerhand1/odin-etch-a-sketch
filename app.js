const container = document.querySelector('.container');

let mouseDown = false;
document.body.onmouseup = () => (mouseDown = false)
document.body.onmousedown = () => (mouseDown = true)

let setActive = true; /* toggle between black and white */

function setupGrid(size) {

    let gridItems = document.querySelectorAll('.grid-item');

    if(gridItems !== null) {
        clear();
    }
    
    const r = document.querySelector(':root');
    r.style.setProperty('--size', `${(1 / size) * 100}%`)

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            let col = document.createElement('div');
            col.setAttribute('class', 'grid-item');
            container.appendChild(col);
        }
    }

    gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(gridItem => gridItem.addEventListener('mousedown', changeColor));
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', changeColor));
}

function changeColor(e) {
    if(e.type === 'mouseover' && !mouseDown) {
        return;
    }
    
    if(setActive) {
        e.target.classList.add('active');
    } else {
        e.target.classList.remove('active');
    }
}

function changeSize() {
    let size = 0;
    do {
        size = Number.parseInt(prompt("Enter a size between 1 and 100"));
        console.log(size)
    } while((size <= 0 || size > 100) && size !== null);
    setupGrid(size);
}

function clear() {
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => gridItem.classList.remove('active'));
}

const colorBtn = document.querySelector('#color-btn');
colorBtn.addEventListener('click', () => {
    setActive = true;
});

const eraseBtn = document.querySelector('#erase-btn');
eraseBtn.addEventListener('click', () => {
    setActive = false;
});

const sizeBtn = document.querySelector('#size-btn');
sizeBtn.addEventListener('click', changeSize);

const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clear);

setupGrid(16);