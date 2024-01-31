import { createHome } from "./home";
import './style.css';
import { createMenu } from "./menu";
import { createAbout } from "./about";
import mapMarker from './assets/map-marker.svg';
import gitlogo from './assets/github-mark-white.png';

let mapsrc = document.querySelector('.location a img');
mapsrc.src = mapMarker; 

let gitsrc = document.querySelector('#footer .name .gitlogo'); 
gitsrc = gitlogo; 

createHome();
const content = document.getElementById('content');
const navigation = document.querySelectorAll('button');
navigation.forEach((button) => { 
    button.addEventListener('click', () => { 
        if(button.className === 'Home') { 
            clearData();
            createHome();
        } 
        if(button.className === 'Menu') { 
            clearData();
            createMenu();
        }
        
        if(button.className === 'About') { 
            clearData();
            createAbout();
        }
    })
}); 
function clearData() { 
    while(content.firstChild) { 
        content.removeChild(content.firstChild);
    }
}