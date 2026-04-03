let currentPage = 1;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function nextPage() {
    if (currentPage <= totalPages) {
        const page = document.getElementById(`p${currentPage}`);
        page.classList.add('flipped');
        
        // Z-Index Management
        page.style.zIndex = currentPage;
        
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        const page = document.getElementById(`p${currentPage}`);
        page.classList.remove('flipped');
        
        // Den Z-Index beim Zurückblättern wieder erhöhen
        page.style.zIndex = 10 - currentPage;
    }
}
