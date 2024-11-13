const boxes = document.querySelectorAll('.pageTransition__link');

boxes.forEach(box => {
    const container = box.querySelector('.pageTransition__container');
    box.addEventListener('mouseover', () => {
        box.classList.add('hovered');
        if (container) {
            container.classList.add('hovered');
        }
    });

    // box.addEventListener('mouseout', () => {
    //     box.classList.remove('hovered');
    //     if (container) {
    //         container.classList.remove('hovered');
    //     }
    // });
});