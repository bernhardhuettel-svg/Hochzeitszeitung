const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const book = document.querySelector("#book");
const papers = document.querySelectorAll(".paper");

let currentState = 1;
const maxState = papers.length + 1;

function updateZIndex() {
    papers.forEach((p, index) => {
        if (index + 1 < currentState) {
            p.style.zIndex = index + 1;
        } else {
            p.style.zIndex = papers.length + 1 - index;
        }
    });
}

function goNext() {
    if (currentState < maxState) {
        if (currentState === 1) {
            book.classList.add("open-book");
        }
        
        const paper = papers[currentState - 1];
        paper.classList.add("flipped");
        
        currentState++;
        updateZIndex();
        
        if (currentState === maxState) {
            book.style.transform = "translateX(100%)";
        }
    }
}

function goPrev() {
    if (currentState > 1) {
        if (currentState === 2) {
            book.classList.remove("open-book");
            book.style.transform = "translateX(0%)";
        }
        
        const paper = papers[currentState - 2];
        paper.classList.remove("flipped");
        
        currentState--;
        updateZIndex();

        if (currentState < maxState && currentState > 1) {
            book.style.transform = "translateX(50%)";
        }
    }
}

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

updateZIndex(); // Initialer Aufruf
