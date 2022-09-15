const slides = document.querySelector('.slides'),
    slidesList = [slide1, slide2, slide3, slide4].map(mappedSlide => mappedSlide()),
    slidesTitleMsg = ['Capa', 'Definição de Implicação Mútua', 'Metonímia', 'Sinédoque'],
    back = document.querySelector('.back'),
    forward = document.querySelector('.forward'),
    activeSlide = document.querySelector('.active_slide');
var slidesCount = 0;

slidesList.forEach(mappedSlide => mappedSlide.classList.add('slide'));

generateSlide(slidesCount);

window.generateSlide = generateSlide;

back.onclick = generatePrev;

forward.onclick = generateNext;

function generateSlide(n) {
    slides.dataset.active_slide = n;
    activeSlide.innerHTML = `<span>Slide ${n + 1}/${slidesList.length}</span>-<strong>${slidesTitleMsg[n]}</strong>`;

    if (slidesCount == 0) back.classList.add('hidden');
    if (slidesCount == slidesList.length - 1) forward.classList.add('hidden');

    const alreadyGenerated = !![...slides.children].filter(child => child.id === slidesList[n].id).length;

    if (!alreadyGenerated) slides.appendChild(slidesList[n]);

    return slidesList[n];
};

function generatePrev() {
    slidesCount--;
    slidesCount = Math.max(0, slidesCount);
    const generate = generateSlide(slidesCount), prevSlide = slidesList[slidesCount + 1];

    prevSlide.classList.add('hide-right');
    generate.classList.forEach(className => className.includes('hide') && generate.classList.remove(className));

    if (slidesCount == 0) back.classList.add('hidden');
    if (slidesCount < slidesList.length - 1) forward.classList.remove('hidden');
};

function generateNext() {
    slidesCount++;
    slidesCount = Math.min(slidesList.length - 1, slidesCount);
    const generate = generateSlide(slidesCount), prevSlide = slidesList[slidesCount - 1];

    prevSlide.classList.add('hide-left');
    generate.classList.forEach(className => className.includes('hide') && generate.classList.remove(className));

    if (slidesCount == slidesList.length - 1) forward.classList.add('hidden');
    if (slidesCount > 0) back.classList.remove('hidden');
};

function slide1() {
    const slide = document.createElement('div');

    slide.id = 'slide-1';

    const title = createTitle('Implicação Mútua');
    const groupMembers = createFooter('Membros do grupo: ', ['Aline', 'Andressa', 'Giovanna', 'Kellen', 'Lívia', 'Patrick', 'Pedro H']);
    const bgImg = createImgBackground('/imgs/talking.png');

    slide.append(title, groupMembers, bgImg);

    animateTitle(title);

    return slide;
};

function slide2() {
    const slide = document.createElement('div');

    slide.id = 'slide-2';
    
    const title = createTitle('Definição de Implicação Mútua'),
        description = createTxt(
            'São figuras de linguagem por meio das quais transportamos o nome de uma coisa pra outra em vista de uma relação de interdependência entre as duas coisas.',
            {top: '55%', left: '50%', transform: 'translate(-50%, -50%)', 'width': '75vw', 'font-size': '1.25em'}
        );

    slide.append(title, description);

    animateTitle(title);

    return slide;
};

function slide3() {
    const slide = document.createElement('div');

    slide.id = 'slide-3';

    const metonimiaTitle = createTitle('Definição de Metonímia'),
        metonimiaDesc = createTxt(
            'Associação entre dois termos que são tão próximos que um acaba sugerindo o outro, como a utilização do autor no lugar da sua obra, efeito pela causa, parte pelo todo, marca pelo produto, etc...',
            {top: '35%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw'}
        );

    slide.append(metonimiaTitle, metonimiaDesc);

    animateTitle(metonimiaTitle);

    const metonimiaExTitle = createTitle(
        'Exemplos de Metonímia',
        {top: '55%'}
    ),  metonimiaExDesc = createTxt(
            `Miojo (macarrão instantâneo)<br>
            Danone (iogurte)<br>
            Bombril (esponja de aço)`,
            {top: '75%', left: '50%', transform: 'translate(-50%, -50%)'}
        );

    slide.append(metonimiaExTitle, metonimiaExDesc);

    animateTitle(metonimiaExTitle);

    return slide;
};

function slide4() {
    const slide = document.createElement('div');

    slide.id = 'slide-4';

    const sinedoqueTitle = createTitle('Definição de Sinédoque'),
        sinedoqueDesc = createTxt(
            'Sinédoque consiste em uma figura de linguagem que é conhecida principalmente por fazer a substituição de um termo por outro, o que acarreta uma diminuição ou ampliação do sentido desse termo utilizado.<br>Essa redução ou ampliação ocorre devido à relação que o termo substituído e o termo substituto estabelecem.',
            {top: '35%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw'}
        );

    slide.append(sinedoqueTitle, sinedoqueDesc);

    animateTitle(sinedoqueTitle);

    const sinedoqueExTitle = createTitle(
        'Exemplos de Sinédoque',
        {top: '45%'}
    ),  sinedoqueExDesc = createTxt(
            `"Ao cair da tarde, o bronze soa triste"<br>
            • diz-se "bronze" como referência ao "sino"<br>
            <br>
            O maior fazendeiro de Goiás possui mais de 50 mil cabeças de gado.<br>
            cabeças de gado faz-se como referência aos bois.<br>
            <br>
            O Brasil jogou bem nas olimpíadas. <br>
            • o Brasil como referência ao time brasileiro`,
            {top: '75%', left: '50%', transform: 'translate(-50%, -50%)', width: '75vw'}
        );

    slide.append(sinedoqueExTitle, sinedoqueExDesc);

    animateTitle(sinedoqueExTitle);

    return slide;
};

function createTxt(txt, attr) {
    const txtDiv = document.createElement('div');

    txtDiv.classList.add('txt-content');

    txtDiv.innerHTML = txt;

    for (let att in attr) txtDiv.style[att] = attr[att];

    return txtDiv;
};

function createImgBackground(src) {
    const divImg = document.createElement('div'),
        img = document.createElement('img');

    divImg.classList.add('img-background');

    divImg.append(img);

    img.src = src;

    return divImg;
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

    const lastDiv = arrDivs.splice(arrDivs.length - 1, 1)[0],
        lastHTML = lastDiv.innerHTML;

    arrDivs[arrDivs.length - 1].innerHTML = arrDivs[arrDivs.length - 1].innerHTML.slice(0, arrDivs[arrDivs.length - 1].innerHTML.length - 1);

    lastDiv.innerHTML = lastHTML.slice(0, lastHTML.length - 1) + '.';

    footerMain.innerHTML = `${beforeSpan.outerHTML + arrDivs.map(div => div.outerHTML).join('') + acrescent.outerHTML + lastDiv.outerHTML}`;

    return footerMain;
};

function createTitle(txt, attr) {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = txt;

    for (let att in attr) title.style[att] = attr[att];

    return title;
};

function animateTitle(title) {
    var spans = title.innerText.split('');
    
    spans = spans.map((str, ind) => `<span class="span-title${str === ' ' ? ' span-space' : ''}" style="--delay: ${ind * (1 / spans.length)}">${str}</span>`).join('');

    title.innerHTML = spans;
};
