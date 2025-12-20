import cover from './assets/coverimg.jpg';
import logo from './assets/logo-small.png';

export function buildHomePage(){
    const content = document.querySelector('#content');

    const headContainer = document.querySelector('#head-container');
    const logoContainer = document.querySelector('#logo-container');
    const logoImg = document.createElement('img');
    logoImg.src = logo;
    document.querySelector('header').style.backgroundColor = 'white';
    const name = document.createElement('p');
    name.textContent = 'Zehno\'s Ramen';
    name.style.color = 'black';
    logoContainer.append(logoImg);
    headContainer.append(logoContainer, name);

    const header = document.querySelector("header");
    const buttons = header.querySelectorAll('button');
    buttons.forEach(button => button.classList.add('hvr-grow'));
    buttons.forEach(button => button.classList.add('hvr-bubble-bottom'));
    buttons.forEach(button => button.classList.add('hvr-underline-from-center'));
    const container = document.createElement('div');

    const imageContainer = document.createElement('div');
        imageContainer.id = 'imgCont';

    const image = document.createElement('img');
    image.src = cover;
    image.classList.add('hidden');
    const imgText = document.createElement('div');
    imgText.id = 'imgText';
/*
    const mainHeading = document.createElement('h3')
        mainHeading.textContent = 'Welcome to';
    const name = document.createElement('h1')
        name.textContent = "Zehno's Restaurant";
    const secondaryHeading = document.createElement('h3')
        secondaryHeading.textContent = 'Modern, beautiful, delicious.'

    imgText.append(mainHeading, name, secondaryHeading)



 */

    imageContainer.append(image);
    container.append(imageContainer);
    content.append(container);


    if (image.complete){
   // image.classList.remove('hidden');
        image.classList.add('fade-in');
        logoImg.classList.add('tracking-in');
        name.classList.add('tracking-in');
    } else {
        image.addEventListener('load', () => {
         //   image.classList.remove('hidden');
        setTimeout(() => image.classList.add('fade-in'), 500);
        });
        logoImg.classList.add('tracking-in');
        name.classList.add('tracking-in');
    }

    document.body.classList.add('reveal');
    document.body.classList.remove('hidden');
}
