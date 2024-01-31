export function createAbout() { 
    const content = document.getElementById('content'); 
    const about = document.createElement('div'); 
    about.classList.add('about'); 
    content.appendChild(about);
    
    const origins = document.createElement('h2'); 
    origins.textContent = "Our Origins"; 
    const originsText = document.createElement('p'); 
    originsText.textContent = "All our staff are from the Levant region and can speak fluent Arabic and English, they have all brought their life experiences and family recipes together to create the arabic atmosphere that we all love. The head chef is from Palestinian and Jordanian roots and has lived and travelled all across the middle east to perfect his recipes, our head of staff worked for the only michellin restaurant in the arabic region for over ten years before deciding to join us in creating a 'once in a lifetime arabian night eperience'.";
    const background = document.createElement('h2');
    const backgroundText = document.createElement('p');
    background.textContent = "How We Ended Up In Dorne";
    backgroundText.textContent = "It took us years to find the perfect spot to open, and Dorne has all the spices in the world and the most exotic buildings were we could create the arabian nights feel. You have to wait a while before you can book tickets to Westeros, but when you can, please join us in Dorne and try our award winning food."
    const future = document.createElement('h2');
    const futureText = document.createElement('p');
    future.textContent = "The Future"; 
    futureText.textContent = "We recently acquired our second michellin star, so we are trying to retain it by keeping our menu the same for the near future. Although we have a seasonal tasting menu which you can ask your server about, this seasonal tasting menu is for our team to test out future dishes, we will usually go through a rigorous process of selecting which items from our seasonal tasting menu end up on our a la carte menu. We are also planning on opening up a new restaurant in the Arrakis region on Dune, opening date will be announced soon!"
    origins.appendChild(originsText);
    background.appendChild(backgroundText); 
    future.appendChild(futureText);
    about.appendChild(origins);
    about.appendChild(background);
    about.appendChild(future);
}
