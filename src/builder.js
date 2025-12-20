import cover from './assets/coverimg.jpg';
import logo from './assets/logo-small.jpg';

export function buildHomePage(){
    const content = document.querySelector('#content');

    const logoContainer = document.querySelector('#logo-container');
    const logoImg = document.createElement('img');
    logoImg.src = logo;
    logoContainer.append(logoImg);

    const container = document.createElement('div');

    const imageContainer = document.createElement('div');
        imageContainer.id = 'imgCont';

    const image = document.createElement('img');
        image.src = cover;

    const imgText = document.createElement('div');
    imgText.id = 'imgText';

    const mainHeading = document.createElement('h3')
        mainHeading.textContent = 'Welcome to';
    const name = document.createElement('h1')
        name.textContent = "Zehno's Restaurant";
    const secondaryHeading = document.createElement('h3')
        secondaryHeading.textContent = 'Modern, beautiful, delicious.'

    imgText.append(mainHeading, name, secondaryHeading)

    imageContainer.append(imgText, image);
    container.append(imageContainer);
    content.append(container);

    if (image.complete){
        document.body.classList.add('reveal');
    } else {
        image.addEventListener('load', () => {
            document.body.classList.add('reveal');
        });
    }

}