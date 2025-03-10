document.addEventListener('DOMContentLoaded', function () {
    const btnOpenMenu = document.getElementById('btn-open-menu');
    const btnCloseMenu = document.getElementById('btn-close-menu');
    const sideMenu = document.getElementById('side-menu');

    btnOpenMenu.addEventListener('click', function () {
        sideMenu.classList.add('active');
        btnOpenMenu.style.display = 'none';
        btnCloseMenu.style.display = 'block';
    });

    btnCloseMenu.addEventListener('click', function () {
        sideMenu.classList.remove('active');
        btnOpenMenu.style.display = 'block';
        btnCloseMenu.style.display = 'none';
    });
});