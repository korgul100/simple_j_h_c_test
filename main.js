const container = document.querySelector('.container');
const sizeEl = document.querySelector('.size');
var size = sizeEl.value;
const color = document.querySelector('.color');
const resetBtn = document.querySelector('.btn');

var draw = false;

function populate(size) {
    container.style.setProperty('--size', size);
    for (var i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseover', function() {
            if (!draw) return;
            div.style.backgroundColor = color.value;
        });
        div.addEventListener('mousedown', function() {
            div.style.backgroundColor = color.value;
        });
        container.appendChild(div);
    }
}

populate(size);

function reset() {
    container.innerHTML = '';
    populate(size);
}

window.addEventListener('mousedown', function() {
    draw = true;
});

window.addEventListener('mouseup', function() {
    draw = false;
});

resetBtn.addEventListener('click', reset);

sizeEl.addEventListener('keyup', function(){
    size = sizeEl.value;
    reset();
});

sizeEl.addEventListener('change', function(){
    size = sizeEl.value;
    reset();
});