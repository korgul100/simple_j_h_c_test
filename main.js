const container = document.querySelector('.container');
const sizeEl = document.querySelector('.size');
var size = sizeEl.value;
const red = document.querySelector('.redAmount');
const green = document.querySelector('.greenAmount');
const blue  = document.querySelector('.blueAmount');
const resetBtn = document.querySelector('.btn');

console.log("red = " + red.value);

var draw = false;

function populate(size) {
    container.style.setProperty('--size', size);
    for (var i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.addEventListener('mouseover', function() {
            if (!draw) return;
            div.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
        });
        div.addEventListener('mousedown', function() {
            div.style.backgroundColor = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
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