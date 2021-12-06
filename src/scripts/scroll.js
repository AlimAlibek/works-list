

// ----------------------------------------------------
// main title animation
const mainTitle = document.querySelector(".title_main-title");
const mainSubTitle = document.querySelector(".sub-title_main-sub-title");
const moveTitles = (move) => {
    if (move > window.innerHeight) return;

    mainTitle.style.cssText = `transform: translate(0, ${move/1.2}px);`
    mainSubTitle.style.cssText = `transform: translate(0, ${move/1.3}px);`
}


// -------------------------------------------------------
// elements animation

const elInSigth = (elements, className) => {
    const addClass = (el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * (0.7)) {
            el.classList.add(`${className}`);
        }
    }

    if (!elements.length) {
        addClass(elements);
    
    } else {
        elements.forEach(elem => {
            addClass(elem);
        })
    }

}

const titles = document.querySelectorAll(".title_simple");
const subTitles = document.querySelectorAll(".sub-title_simple");
const containerElements = document.querySelectorAll(".container__element");
const descriptions = document.querySelectorAll('.description');



export default () =>{
    window.addEventListener("scroll", () => {
        moveTitles(window.scrollY);
        elInSigth(titles, "title_simple_in-sight");
        elInSigth(subTitles, "sub-title_simple_in-sight");
        elInSigth(containerElements, "container__element_in-sight");
        elInSigth(descriptions, "description_in-sight");
    })
}        

