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
    const name = createElement('p', null, ['tracking-in'], 'Zehno\'s Ramen');
    name.style.color = 'black';

    buttonClasses.forEach((buttonClass) => buttons.forEach(button => button.classList.add(buttonClass)));

    logoContainer.append(logoImg);
    headContainer.append(logoContainer, name);
}
function buildCover(){
    const content = document.querySelector('#content');
    const container = createElement('div', 'cover', [], null, null);
    const imageContainer = createElement('div', 'img-container', [], null, null);
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
}
export function buildHomePage(){
    buildHeader();
    buildCover();
    document.body.classList.add('reveal');
    document.body.classList.remove('hidden');
}
