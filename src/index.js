import { createHome } from "./home";
import './style.css';
createHome();
const content = document.getElementById('content');
const navigation = document.querySelectorAll('button');
navigation.forEach((button) => { 
    button.addEventListener('click', () => { 
        if(button.className === 'Home') { 
            clearData();
            createHome();
        }
        /*  
        if(button.className === 'Menu') { 
            createMenu();
        }
        if(button.className ==== 'About') { 
            createAbout();
        }
        */
    })
}); 
function clearData() { 
    while(content.firstChild) { 
        content.removeChild(content.firstChild);
    }
}