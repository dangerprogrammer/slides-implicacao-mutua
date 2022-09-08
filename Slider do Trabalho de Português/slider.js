const slides = document.querySelector('.slides'),
    slidesList = [slide1()];
var slidesCount = 0;

generateSlide(0);

function generateSlide(n) {
    slides.appendChild(slidesList[n]);
};

function slide1() {
    const slide = document.createElement('div');
    const title = createTitle('Metonímia');

    slide.append(title);

    animateTitle(title);

    return slide;
};

function createTitle(txt) {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = txt;
    return title;
};

function animateTitle(title) {
    var spans = title.innerText.split('');
    title.style = `--total: ${spans.length}`;
    
    spans = spans.map((str, ind) => `<span class="span-title" style="--delay: ${ind * .08}">${str}</span>`).join('');

    title.innerHTML = spans;
};