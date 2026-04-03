let currentPage = 1;
const pages = document.querySelectorAll('.page');

function nextPage() {
    if (currentPage <= pages.length) {
        const page = document.getElementById(`p${currentPage}`);
        page.classList.add('flipped');
        page.style.zIndex = currentPage;
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        const page = document.getElementById(`p${currentPage}`);
        page.classList.remove('flipped');
        page.style.zIndex = 10 - currentPage;
    }
}
