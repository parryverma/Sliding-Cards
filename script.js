let img = document.querySelectorAll(".box")

img.addEventListener ("click" , addClassOnClick());

function addClassOnClick() {
    img.classList.add('active'); // Add the 'highlight' class
}