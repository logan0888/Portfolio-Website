
document.addEventListener("DOMContentLoaded", function() {


    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const sideNav = document.querySelector(".side-nav");

    console.log('Hamburger Button:', hamburgerBtn);
    console.log('Side Navigation:', sideNav);

        hamburgerBtn.addEventListener('click', () => {

            console.log('Hamburger button clicked');

            sideNav.classList.toggle('open');
            hamburgerBtn.classList.toggle('active');
        });
    });