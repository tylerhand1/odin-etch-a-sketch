const container = document.querySelector('.container');

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        let col = document.createElement('div');
        col.setAttribute('class', 'grid-item');
        container.appendChild(col);
    }
}

const gridItems = document.querySelectorAll('.grid-item');