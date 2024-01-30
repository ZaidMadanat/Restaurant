import MICHIMG from './assets/MichelinTwoStar.png'
export function createHome() { 
    
    //Creating the elements  
    const content = document.getElementById('content'); 
    const home = document.createElement('div');
    home.classList.add('home');
    const title = document.createElement('h1');
    const subTitle = document.createElement('h2'); 
    const michelin = document.createElement('img'); 
    const reserve = document.createElement('a'); 
    michelin.classList.add('michelin-star'); 

    //Adding text, imgs to the elements 
    title.textContent = "The Arabian Nights"; 
    subTitle.textContent = "Where Every Flavor Tells a Tale";
    michelin.src = MICHIMG;
    reserve.textContent = "Reserve";
    reserve.target = "_blank"; 
    reserve.href ="https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    //Appending the elements to home
    content.appendChild(home); 
    home.appendChild(title);
    home.appendChild(subTitle);
    home.appendChild(michelin);
    home.appendChild(reserve);
};
