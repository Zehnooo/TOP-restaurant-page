import './styles.css'
import {buildHomePage, buildHeader} from './builder.js'
document.body.classList.add('hidden');
window.addEventListener('load', () => {
    console.log('Window loaded');
    buildHeader();
    buildHomePage();
});


