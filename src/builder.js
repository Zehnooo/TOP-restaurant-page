import cover from './assets/coverimg.jpg';
import logo from './assets/logo-small.png';

function createElement(el, id = null, classes = [], text = null, src = null) {
    const element = document.createElement(el);
    if (id) element.id = id;
    if (classes.length > 0) element.classList.add(...classes);
    if (text) element.textContent = text;
    if (el === 'img' && src) element.src = src;
    return element;
}
function buildHeader(){
    const headContainer = document.querySelector('#head-container');
    const logoContainer = document.querySelector('#logo-container');
    const header = document.querySelector("header");
    const buttons = header.querySelectorAll('button');
    const buttonClasses = ['hvr-grow', 'hvr-bubble-bottom', 'hvr-underline-from-center','tracking-in'];

    const logoImg = createElement('img', null, ['tracking-in'], null, logo );
    const name = createElement('h2', null, ['tracking-in'], 'Zehno\'s Ramen');
    name.style.color = 'black';

    buttonClasses.forEach((buttonClass) => buttons.forEach(button => button.classList.add(buttonClass)));

    logoContainer.append(logoImg);
    headContainer.append(logoContainer, name);
    console.log('header built');
}
function buildHomeCover(content){
    const container = createElement('div', 'cover', []);
    const imageContainer = createElement('div', 'img-container');
    const image = createElement('img', null, ['hidden'], null, cover);
    imageContainer.append(image);
    container.append(imageContainer);
    content.append(container);
    if (image.complete){
        image.classList.add('fade-in');
        image.classList.remove('hidden');
    } else {
        image.addEventListener('load', () => {
            setTimeout(() => image.classList.add('fade-in'), 500);
        });
        image.classList.remove('hidden');
    }
    console.log('cover built');
}

function buildHomeSectionA(content){
    const section = createElement('section', 's1');
    const heading = createElement('h2', null, ['section-heading'], 'Welcome to Zehno\'s Ramen');
    const divider = createElement('hr');
    const grid = createElement('div', null, ['grid']);
    const hoursContainer = createElement('div', 'hours');
    const hoursHeading = createElement('h3', null, [], 'Hours');
    const hoursArr = ['MONDAY: 11AM - 10PM', 'TUESDAY: CLOSED', 'WEDNESDAY - THURSDAY: 11AM-10PM', 'FRIDAY - SATURDAY: 11AM-1AM', 'SUNDAY: CLOSED' ]
    const hoursDiv = createElement('div');
    for (let i = 0; i < hoursArr.length; i++){
        const p = createElement('p', null, [], hoursArr[i]);
        hoursDiv.append(p);
    }
    hoursContainer.append(hoursHeading, hoursDiv);
    const addressContainer = createElement('div', 'address');
    const addressHeading = createElement('h3', null, [], 'Address');
    addressContainer.append(addressHeading);
    grid.append(hoursContainer, addressContainer);
    section.append(heading, divider, grid);
    content.append(section);
    console.log('section A built');
}
export function buildHomePage(){
    const content = document.querySelector('#content');
    buildHeader();
    buildHomeCover(content);
    buildHomeSectionA(content);
    document.body.classList.add('reveal');
    document.body.classList.remove('hidden');
    console.log('home page built');
}
