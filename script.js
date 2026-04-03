const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const bookContainer = document.querySelector(".book-container");

const papers = [
    document.querySelector("#p1"),
    document.querySelector("#p2"),
    document.querySelector("#p3"),
    document.querySelector("#p4")
];

let currentState = 1;
const maxState = 5;

function goNext() {
    if (currentState < maxState) {
        if (currentState === 1) {
            bookContainer.classList.add("open-book");
        }
        
        const paper = papers[currentState - 1];
        paper.classList.add("flipped");
        paper.style.zIndex = currentState; 
        
        if (currentState === 4) {
             bookContainer.style.transform = "translateX(100%)";
        }

        currentState++;
    }
}

function goPrev() {
    if (currentState > 1) {
        if (currentState === 2) {
            bookContainer.classList.remove("open-book");
            bookContainer.style.transform = "translateX(0%)";
        }

        const paper = papers[currentState - 2];
        paper.classList.remove("flipped");
        paper.style.zIndex = 5 - (currentState - 1);

        if (currentState === 5) {
            bookContainer.style.transform = "translateX(50%)";
        }

        currentState--;
    }
}

// Event Listener hinzufügen
nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);
