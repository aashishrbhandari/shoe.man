/*** Image Slider [For Desktop] */

let isDown = false;
let startX;
let scrollLeft;

document.querySelectorAll('.p-flow').forEach(slider => {
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
})


document.querySelectorAll('.p-flow').forEach(slider => {
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
})

document.querySelectorAll('.p-flow').forEach(slider => {
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
})

document.querySelectorAll('.p-flow').forEach(slider => {
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
    });
})

/*** Image Slider [For Desktop] ENDS */