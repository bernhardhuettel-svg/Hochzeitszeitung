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
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                papers[0].classList.add("flipped");
                papers[0].style.zIndex = 1;
                break;
            case 2:
                papers[1].classList.add("flipped");
                papers[1].style.zIndex = 2;
                break;
            case 3:
                papers[2].classList.add("flipped");
                papers[2].style.zIndex = 3;
                break;
            case 4:
                papers[3].classList.add("flipped");
                papers[3].style.zIndex = 4;
                closeBook(false);
                break;
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                papers[0].classList.remove("flipped");
                papers[0].style.zIndex = 4;
                break;
            case 3:
                papers[1].classList.remove("flipped");
                papers[1].style.zIndex = 3;
                break;
            case 4:
                papers[2].classList.remove("flipped");
                papers[2].style.zIndex = 2;
                break;
            case 5:
                openBook();
                papers[3].classList.remove("flipped");
                papers[3].style.zIndex = 1;
                break;
        }
        currentLocation--;
    }
}

nextBtn.addEventListener("click", goNextPage);
prevBtn.addEventListener("click", goPrevPage);
