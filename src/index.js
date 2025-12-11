import './styles.css'
import {buildHomePage} from './builder.js'
document.body.classList.add('hidden');
window.addEventListener('load', () => {
    console.log('Window loaded');
    buildHomePage();
});
console.log("hello wall");

