const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const book = document.querySelector("#book");

const papers = [
    document.querySelector("#p1"),
    document.querySelector("#p2"),
    document.querySelector("#p3"),
    document.querySelector("#p4")
];

let currentLocation = 1;
let maxLocation = 5; // 4 Papiere + 1

function goNextPage() {
    if(currentLocation < maxLocation) {
        if(currentLocation === 1) {
            book.classList.add("book-open");
        }
        
        const paper = papers[currentLocation - 1];
        paper.classList.add("flipped");
        paper.style.zIndex = currentLocation; // Stapelt die umgeblätterten Seiten nach unten

        if(currentLocation === 4) {
            book.style.transform = "translateX(100%)";
        }
        
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        if(currentLocation === 2) {
            book.classList.remove("book-open");
            book.style.transform = "translateX(0%)";
        }
        
        const paper = papers[currentLocation - 2];
        paper.classList.remove("flipped");
        paper.style.zIndex = 5 - (currentLocation - 1); // Holt die Seite wieder nach oben

        if(currentLocation === 5) {
            book.classList.add("book-open");
        }
        
        currentLocation--;
    }
}

nextBtn.addEventListener("click", goNextPage);
prevBtn.addEventListener("click", goPrevPage);
