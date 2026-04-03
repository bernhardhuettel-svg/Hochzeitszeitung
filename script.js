let currentPage = 1;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function nextPage() {
    if (currentPage <= totalPages) {
        const page = document.getElementById(`p${currentPage}`);
        page.classList.add('flipped');
        
        // Nach der Animation Z-Index fixieren
        setTimeout(() => {
            page.style.zIndex = currentPage;
        }, 500);
        
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        const page = document.getElementById(`p${currentPage}`);
        page.classList.remove('flipped');
        
        // Beim Zurückblättern den Z-Index sofort wieder anheben
        page.style.zIndex = 10 - currentPage;
    }
}
