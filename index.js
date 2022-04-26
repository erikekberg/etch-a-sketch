const container = document.querySelector(".container");

function turnBlack(e) {
    e.target.classList.add("painted");
}

function generateGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < n; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.style.height = `${800 / n}px`;
            square.style.width = `${800 / n}px`;
            square.addEventListener("mouseover", turnBlack);
            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

generateGrid(16);


const btn = document.querySelector("button");

function reset() {
    container.textContent = "";

    let side = 0;

    do {
        side = prompt("How many squares per side?");
    } while (side < 2 || side > 100);

    generateGrid(side);
}

btn.addEventListener("click", reset);