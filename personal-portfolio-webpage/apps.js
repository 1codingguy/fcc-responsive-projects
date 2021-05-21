const navLinks = document.querySelectorAll(".navbar__link");
const navBar = document.querySelector(".navbar");
const navBarHeight = navBar.getBoundingClientRect().height;
// console.log(navBarHeight);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    const position = targetElement.offsetTop - navBarHeight;

    window.scrollTo({ top: position });
  });
});
