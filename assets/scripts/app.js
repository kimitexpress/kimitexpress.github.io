const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

// activiating the animation library
sal();

// highlighting the navbar menu links when scrolling over sections
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 350;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if(section.classList.contains(contacts))
        {
            scrollAnimations.enable();
        }

        if(top > offset && top < offset + height)
        {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                document.querySelector(`.nav-link[href*=${id}]`).classList.add('active');
            })
        }
    })
}


// for closing the navbar after cliking its links
$('.navbar-collapse a').click(function() {
  $(".navbar-collapse").collapse('hide');
});