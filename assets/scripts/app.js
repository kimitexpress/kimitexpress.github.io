const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

sal();

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 350;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top > offset && top < offset + height)
        {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                document.querySelector(`.nav-link[href*=${id}]`).classList.add('active');
            })
        }
    })
}
