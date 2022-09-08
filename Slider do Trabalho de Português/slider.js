const slides = document.querySelector('.slides'),
    slidesList = [slide1()];
var slidesCount = 0;

generateSlide(0);

function generateSlide(n) {
    slides.appendChild(slidesList[n]);
};

function slide1() {
    const slide = document.createElement('div');
    const title = createTitle('Metonímia e Sinédoque');
    const groupMembers = createFooter('Membros do grupo: ', ['Aline', 'Andressa', 'Giovanna', 'Kellen', 'Lívia', 'Patrick', 'Pedro H']);

    slide.append(title, groupMembers);

    animateTitle(title);

    return slide;
};

function createFooter(beforeMsg, arrItems) {
    const footerMain = document.createElement('div');
    const arrDivs = [];
    const beforeSpan = document.createElement('span');
    beforeSpan.innerHTML = beforeMsg;
    const acrescent = document.createElement('span');
    acrescent.innerHTML = 'e';

    footerMain.classList.add('footer-main');

    arrItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-footer');
        itemDiv.innerHTML = `${item},`;

        arrDivs.push(itemDiv);
    });

    const lastDiv = arrDivs.splice(arrDivs.length - 1, 1)[0];

    arrDivs[arrDivs.length - 1].innerHTML = arrDivs[arrDivs.length - 1].innerHTML.slice(0, arrDivs[arrDivs.length - 1].innerHTML.length - 1);

    lastDiv.innerHTML = lastDiv.innerHTML.slice(0, lastDiv.innerHTML.length - 1) + '.';

    console.log(lastDiv);

    footerMain.innerHTML = `${beforeSpan.outerHTML + arrDivs.map(div => div.outerHTML).join('') + acrescent.outerHTML + lastDiv.outerHTML}`;

    return footerMain;
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
    
    spans = spans.map((str, ind) => `<span class="span-title${str === ' ' ? ' span-space' : ''}" style="--delay: ${ind * .08}">${str}</span>`).join('');

    title.innerHTML = spans;
};