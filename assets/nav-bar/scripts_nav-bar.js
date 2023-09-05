// File: login_page.html
//     Author: Lisi Cao
//     Date: August 31, 2023
//     Description: click button "login", turn to page login.
//     Contact: lisi.cao@johnabbottcollege.net
//     Copyright: 2023

// Wait for DOM content to load before executing script


document.addEventListener('DOMContentLoaded', function() {
    // get parameters
    var loginLink = document.querySelector('.login-link');
    var loginBtn = document.querySelector('.login-btn');
    var loginModal = document.querySelector('.login-modal');
    var closeBtn = document.querySelector('.close-btn');
    var offcanvas = document.querySelector('.offcanvas');
    var hamburger = document.querySelector('.hamburger-icon');

    loginLink.addEventListener('click', showLoginModal);
    loginBtn.addEventListener('click', showLoginModal);
    // click to open page
    function showLoginModal() {
        loginModal.style.display = 'block';
    }



    
    // click to close page
    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

       // Toggle offcanvas
       hamburger.addEventListener('click', function() {
        offcanvas.classList.toggle('active');
    });

    // Close offcanvas when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!offcanvas.contains(event.target) && !hamburger.contains(event.target)) {
            offcanvas.classList.remove('active');
        }
    });
});

// click input bar to active label
function activateLabel(element) {
    const parent = element.parentElement;
    parent.classList.add("focused");
}
// deactive label
function deactivateLabel(element) {
    const parent = element.parentElement;
    if (!element.value) {
        parent.classList.remove("focused");
    }
}