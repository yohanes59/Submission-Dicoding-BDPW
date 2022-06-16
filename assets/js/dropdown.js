function myFunction() {
            document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
        }

window.onscroll = function() {scrollFunction()};
let navbar = document.getElementById("navbar");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.top = "0";
    navbar.style.backgroundColor = "#E4CDA7";
    navbar.style.position = "fixed";
  } else {
      navbar.style.top = "-50px";
      navbar.style.backgroundColor = "transparent";
      navbar.style.position = "sticky";
      navbar.style.width = "100%";
  }
}