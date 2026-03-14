import cover from './assets/coverimg.jpg';
import logo from './assets/logo-small.png';
import menu from './menu.json';
import ramen1 from './assets/ramen1.jpg';
import ramen2 from './assets/ramen2.jpg';
import ramen3 from './assets/ramen3.jpg';
import ramen4 from './assets/ramen4.jpg';
import ramen5 from './assets/ramen5.jpg';
import ramen6 from './assets/ramen6.jpg';

function createElement(el, id = null, classes = [], text = null, src = null) {
    const element = document.createElement(el);
    if (id) element.id = id;
    if (classes.length > 0) element.classList.add(...classes);
    if (text) element.textContent = text;
    if (el === 'img' && src) element.src = src;
    return element;
}

function clearMain(){
    const main = document.querySelector('#content');
    main.innerHTML = '';
}

export function buildHeader(){
    const headContainer = document.querySelector('#head-container');
    const logoContainer = document.querySelector('#logo-container');
    const header = document.querySelector("header");
    const buttons = header.querySelectorAll('button');
    const buttonClasses = ['hvr-grow', 'hvr-bubble-bottom', 'hvr-underline-from-center'];

    const logoImg = createElement('img', null, [], null, logo );
    const name = createElement('h2', null, [], "Zehno's Ramen");
    name.style.color = 'black';

    buttonClasses.forEach((buttonClass) => buttons.forEach(button => button.classList.add(buttonClass)));
    buttons.forEach(button => button.addEventListener('click', (e) => handleNav(e)));
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
        image.classList.remove('hidden');
    } else {
        image.addEventListener('load', () => {

            setTimeout(() => {
                image.classList.remove('hidden')
            }, 500);
        });
    }
    console.log('cover built');
}

function buildHomeSectionA(content){
    const section = createElement('section', 's1');
    const heading = createElement('h2', null, [], 'Come For The Food, Stay For The Atmosphere');
    const grid = createElement('div', 'image-grid', ['grid']);
    const imgFiles = [ramen1, ramen2, ramen3, ramen4, ramen5, ramen6];
    const images = [];
    for (let i = 0; i < imgFiles.length; i++){

        const div = createElement('div', null, [`ramen${i}`]);
        const img = createElement('img', null, [], null, imgFiles[i]);
        div.append(img);
        images.push(div);
    }
    images.forEach((img) => grid.append(img));
    section.append(heading, grid);
    content.append(section);
}

export function buildHomePage(){
    const content = document.querySelector('#content');
    buildHomeCover(content);
    buildHomeSectionA(content);
    document.body.classList.add('reveal');
    console.log('home page built');
}

function buildCompanyInfo(){
    const section = createElement('section', 'company-info-section');
    const grid = createElement('div', 'company-info', ['grid']);
    const hoursContainer = createElement('div', 'hours');
    const hoursHeading = createElement('h3', null, [], 'Hours');
    const hoursArr = ['MONDAY: 11AM - 10PM', 'TUESDAY: CLOSED', 'WEDNESDAY - THURSDAY: 11AM-10PM', 'FRIDAY - SATURDAY: 11AM-1AM', 'SUNDAY: CLOSED' ]
    const hoursDiv = createElement('div');
    for (let i = 0; i < hoursArr.length; i++){
        const p = createElement('p', null, [], hoursArr[i]);
        hoursDiv.append(p);
    }
    hoursContainer.append(hoursHeading, hoursDiv);

    const addressContainer = createElement('div', 'location');
    const addressHeading = createElement('h3', null, [], 'Location');

    addressContainer.append(addressHeading);
    grid.append(hoursContainer, addressContainer);
    section.append(grid);
    return section;
}

function buildMenu(){
    console.log(menu.menu)
    const content = document.querySelector('#content');
    const items = menu.menu;
    const section = createElement('section', 'menu-section');
    const sectionHeading = createElement('h2', null, [], 'Our Menu');
    const grid = createElement('div', 'menu', ['grid']);
    items.forEach(i => {
    const item = createElement('div', null, ['item']);
    const imgContainer = createElement('figure', null, ['menu-img']);
    const itemHead = createElement('div', null, ['item-head']);
    const img = createElement('img', null, [], null, i.img);
    const name = createElement('h3', null, [], i.name);
    const price = createElement('p', null, ['price'], `$${i.price}`);
    const desc = createElement('p', null, ['description'], i.description);
    imgContainer.append(img);
    itemHead.append(name, price);
    item.append(imgContainer, itemHead, desc);
    grid.append(item);
    });
    section.append(sectionHeading, grid);
    content.append(section);

}

function handleNav(e){
    e.preventDefault();
    const target = e.target;
    clearMain();
    switch(target.textContent){
        case 'Menu': buildMenu(); break;
        case 'Home': buildHomePage(); break;
        case 'About': console.log('about'); break;
        case 'Contact Us': console.log('contact'); break;
    }
}