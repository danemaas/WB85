const navMenu = document.getElementById('nav_menu'),
        navToggle = document.getElementById('nav_toggle'),
        navClose = document.getElementById('nav_close');

// this line will validate if the menu icon was clicked.
if(navToggle) {
    // if menu icon is click.. this line will add the show_menu class to the class list of nav_menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu');
    })
}

// this line will validate if the close icon was clicked.
if(navClose) {
    // if close icon is click.. this line will remove the show_menu class to the class list of nav_menu
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu');
    })
}