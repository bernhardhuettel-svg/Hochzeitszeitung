let currentStep = 1;
const papers = [
    document.getElementById('p1'),
    document.getElementById('p2'),
    document.getElementById('p3'),
    document.getElementById('p4')
];

function nextPage() {
    if (currentStep <= papers.length) {
        const p = papers[currentStep - 1];
        p.classList.add('flipped');
        // Nach dem Umblättern z-index senken, damit die nächste Seite oben liegt
        setTimeout(() => { p.style.zIndex = currentStep; }, 300);
        currentStep++;
    }
}

function prevPage() {
    if (currentStep > 1) {
        currentStep--;
        const p = papers[currentStep - 1];
        p.classList.remove('flipped');
        // Beim Zurückblättern z-index wieder erhöhen
        p.style.zIndex = 10 - currentStep;
    }
}
