// select first two boxes
const box = document.getElementById("box");
const box2 = document.getElementById("box2");

function changeColor() {
    box.style.backgroundColor = 'blue';
}

function getText() {
    box.textContent = 'max';
}

function toggleMenu() {
    box2.classList.toggle("hidden");
}

// toggle both boxes (box + box2)
function toggleTwo() {
    box.classList.toggle("hidden");
    box2.classList.toggle("hidden");
}

// toggle ALL boxes with class "caixa"
function toggleBoxes() {
    const boxes = document.querySelectorAll(".caixa");
    boxes.forEach(b => {
        b.classList.toggle("hidden");
    });
}
