const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let elem = entry.target;
            elem.classList.add('is-visible');
            observer.unobserve(elem);
        }
    });
});

const allElems = document.querySelectorAll('.scroll-animation');
allElems.forEach((elem) => observer.observe(elem));