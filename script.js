const countEl = document.querySelector('#count');
const imgEl = document.querySelector('#cookie');
const resetEl = document.querySelector('#reset');

let count = 0;

counts(true);

imgEl.addEventListener('click', () => {
    count++;

    counts();

    imgEl.classList.remove('bounce');

    setTimeout(() => {
        imgEl.classList.add('bounce');
    }, 0);
});

resetEl.addEventListener('click', () => {
    count = 0;

    counts();
});

function counts(start = null) {
    if (start && parseInt(localStorage.getItem(('counts')))) {
        count = parseInt(localStorage.getItem(('counts')));
    }

    localStorage.setItem('counts', count);

    countEl.textContent = count;

    changeImages();
}

function changeImages() {
    if (count >= 0 && count < 30) {
        imgEl.src = 'images/Cookie.png';
    } else if (count >= 30 && count < 100) {
        imgEl.src = 'images/Cookie2.png';
    } else if (count >= 100) {
        imgEl.src = 'images/Cookie3.png';
    }
}