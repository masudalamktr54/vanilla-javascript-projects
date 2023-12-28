document.addEventListener('DOMContentLoaded', function () {

    let hamburger = document.querySelector('.hamburger');
    let sidebar = document.querySelector('.sidebar');
    let cross = document.querySelector(".cross")

    hamburger.addEventListener('click', function () {
        if (sidebar.style.left == '-250px') {
            sidebar.style.left = '0';
        } 
        else {
            sidebar.style.left = '-250px';
        }
    })

    cross.addEventListener('click', function () {
        if (sidebar.style.left == '-250px') {
            sidebar.style.left = '0';
        } 
        else {
            sidebar.style.left = '-250px';
        }
    })
});