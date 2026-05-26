const gallery = document.getElementById('gallery');

// Start continuous carousel animation
gallery.classList.add('auto-animate');
const images = document.querySelectorAll(".image-wrapper img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("closeBtn");

images.forEach((image) => {

    image.addEventListener("click", () => {

        popup.classList.add("active");

        popupImg.src = image.src;
    });

});

closeBtn.addEventListener("click", () => {

    popup.classList.remove("active");

});


popup.addEventListener("click", (e) => {

    if(e.target !== popupImg){

        popup.classList.remove("active");

    }

});
const btn = document.getElementById("btn1");
btn.addEventListener("mouseenter", () => {

    btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16">
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
    </svg>
    `;

});
btn.addEventListener("mouseleave", () => {

    btn.innerHTML = `
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
    `;

});