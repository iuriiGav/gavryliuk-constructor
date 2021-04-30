export const animateHamburgerBtnArrowAndRing = (openNav=false) => {
    const btn = document.querySelectorAll(`[data-js-trigger="btn-hamburger-arrow-and-ring"]`).item(0);
    const body = document.getElementsByTagName("body").item(0);
    if(btn !== undefined && btn !== null) {
        btn.addEventListener('click', () => {
            body.classList.toggle('btn-arrow-and-ring--active');
            if(openNav !== false) {
                body.classList.toggle(openNav);
            }
        })

    }
}


