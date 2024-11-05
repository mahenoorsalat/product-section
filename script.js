const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const image = document.querySelector("img");


function resetDots() {
    dot1.classList.remove("colour");
    dot2.classList.remove("colour");
    dot3.classList.remove("colour");
}

dot1.addEventListener("click", function () {
    resetDots();
    image.src = "images/img1.jpg"; 
    dot1.classList.add("colour"); 
});


dot2.addEventListener("click", function () {
    resetDots();
    image.src = "images/img2.jpg"; 
    image.style.maxWidth = "20%"; 
    dot2.classList.add("colour"); 
});


dot3.addEventListener("click", function () {
    resetDots(); 
    image.src = "images/img3.jpg";
    dot3.classList.add("colour");
});
