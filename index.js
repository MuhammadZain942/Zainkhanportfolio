


// animation



// loader

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

// text-changer main-content
const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Software Engineer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "WordPress Developer";
    }, 8000); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 12000);






// skills section

'use strict';

function progressBarAndCountNumber() {
    const progress = document.querySelectorAll('.progress');
    let count = 0;
    // You must put the maximum number in the MAX variable.
    let MAX = 80;

    let run = setInterval(() => {
        count++;
        progress.forEach(element => {
            if (count <= element.dataset.progress) {
                element.parentElement.style.background = `conic-gradient(#4070F4 ${count}%, #212428 0)`;
                element.firstElementChild.textContent = `${count}%`;
            };
            if (count == MAX) {
                clearInterval(run);
            };
        });
    }, 20);
}

progressBarAndCountNumber();






