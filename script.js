const mnutoggle = document.querySelector(".menu");
const options = document.querySelector('.mnuoptions');

function toggleMenu() {
    if (options.style.display === 'block') {
        options.style.display = 'none';
        mnutoggle.style.display = 'block';
    } else {
        options.style.display = 'block';
        mnutoggle.style.display = 'none';
    }
}
