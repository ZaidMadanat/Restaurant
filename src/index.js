import { createHome } from "./home";
import './style.css';
import { createMenu } from "./menu";
import { createAbout } from "./about";

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