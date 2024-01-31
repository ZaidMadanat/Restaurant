export function createMenu() { 
    const content = document.getElementById('content'); 
    const menu = document.createElement('div'); 
    menu.classList.add('menu'); 
    const appetizers = document.createElement('h2'); 
    appetizers.classList.add('appetizers'); 
    content.appendChild(menu);

    // Splitting the menu to categories and then appending them
    const coldAppetizers = document.createElement('h3'); 
    const hotAppetizers = document.createElement('h3'); 
    const mainCourse = document.createElement('h2'); 
    const drinks = document.createElement('h2'); 
    const dessert = document.createElement('h2');
    menu.appendChild(appetizers);
    menu.appendChild(mainCourse);
    menu.appendChild(drinks);
    menu.appendChild(dessert); 
    appetizers.appendChild(coldAppetizers);
    appetizers.appendChild(hotAppetizers); 
    coldAppetizers.textContent = "Cold Appetizers";
    hotAppetizers.textContent = "Hot Appetizers";
    mainCourse.textContent = "Main Course"; 
    drinks.textContent = "Drinks"; 
    dessert.textContent = "Dessert";

    // Cold Appetizers 
    const hummus = document.createElement('div'); 
    hummus.classList.add('card'); 
    const hummusTitle = document.createElement('h4');
    const hummusText = document.createElement('p');
    hummusTitle.textContent = "Hummus"
    hummusText.textContent = "Our grandmother's recipe. Taste the finest hummus using local olive oil. Add on our tatbileh to unlock the full potential of hummus."
    const mtabal = document.createElement('div');
    mtabal.classList.add('card');
    const mtabalTitle = document.createElement('h4');
    const mtabalText = document.createElement('p'); 
    mtabalTitle.textContent = "Mutabal";
    mtabalText.textContent = "Eggplant from our garden, topped with pomegranate or tomatoes. Goes perfectly with Kibeh Nayeh. Mutabal is also named Baba Ghanoush."
    const tabooleh = document.createElement('div');
    tabooleh.classList.add('card'); 
    const taboolehTitle = document.createElement('h4');
    const taboolehText = document.createElement('p'); 
    taboolehTitle.textContent = "Tabooleh"; 
    taboolehText.textContent = "The simplest, yet most delicous arabic salad. Our head chef reaserched tabooleh for years until finally discovering the perfect mixture."
    const kibeh = document.createElement('div'); 
    kibeh.classList.add('card'); 
    const kibehTitle = document.createElement('h4');
    const kibehText = document.createElement('p'); 
    kibehTitle.textContent = "Kibeh Nayeh";
    kibehText.textContent = "Our meat is delivered every day. We sample through ten different spices to compliment this infamous dish."
    hummus.appendChild(hummusTitle);
    hummus.appendChild(hummusText);
    mtabal.appendChild(mtabalTitle);
    mtabal.appendChild(mtabalText);
    tabooleh.appendChild(taboolehTitle);
    tabooleh.appendChild(taboolehText)
    kibeh.appendChild(kibehTitle);
    kibeh.appendChild(kibehText); 
    coldAppetizers.appendChild(hummus);
    coldAppetizers.appendChild(mtabal); 
    coldAppetizers.appendChild(tabooleh); 
    coldAppetizers.appendChild(kibeh); 

    //Hot Appetizers 
    const jawaneh = document.createElement('div'); 
    jawaneh.classList.add('card'); 
    const jawanehTitle = document.createElement('h4'); 
    const jawanehText = document.createElement('p'); 
    jawanehTitle.textContent = "Jawaneh"; 
    jawanehText.textContent = "Grilled chicken wings with our world renowned lemon and garlic sauce." 
    const sajiyeh = document.createElement('div'); 
    sajiyeh.classList.add('card'); 
    const sajiyehTitle = document.createElement('h4');
    const sajiyehText = document.createElement('p');
    sajiyehTitle.textContent = "Sajiyet Lahmeh"; 
    sajiyehText.textContent = "The most famous bedouin dish. The roots of this dish spread hundreds of years back, we cook in traditional in a saj and serve it on a Fokhara. Topped with pine nuts from the lebanese mountains."
    const kibbeh = document.createElement('div');
    kibbeh.classList.add('card');
    const kibbehTitle = document.createElement('h4');
    const kibbehText = document.createElement('p'); 
    kibbehTitle.textContent = "Kibbeh"
    kibbehText.textContent = "The filling of our Kibbeh goes back three generations, were our great grandmothers would make Kibbeh on special occasions, this recipe stayed with us and we are proud to serve this special dish to the world."
    jawaneh.appendChild(jawanehTitle);
    jawaneh.appendChild(jawanehText); 
    sajiyeh.appendChild(sajiyehTitle);
    sajiyeh.appendChild(sajiyehText); 
    kibbeh.appendChild(kibbehTitle);
    kibbeh.appendChild(kibbehText); 
    hotAppetizers.appendChild(jawaneh);
    hotAppetizers.appendChild(sajiyeh);
    hotAppetizers.appendChild(kibbeh);

    //Main Course 
    const jaj = document.createElement('div'); 
    jaj.classList.add('card');
    const jajTitle = document.createElement('h4');
    const jajText = document.createElement('p');
    jajTitle.textContent = "Jaj Mashwi El Fahem"; 
    jajText.textContent = "All your favorite arabic spices in one dish, elegant and simple dish. choose between half or a full chicken."
    const mashawi = document.createElement('div'); 
    mashawi.classList.add('card');
    const masahwiTitle = document.createElement('h4'); 
    const masahwiText = document.createElement('p'); 
    masahwiTitle.textContent = "Mashawi"
    masahwiText.textContent = "Three skewers, shoqaf lahmeh, shish tawooq, and kebab, grilled bedouin style."
    const shawerma = document.createElement('div'); 
    shawerma.classList.add('card'); 
    const shawermaTitle = document.createElement('h4'); 
    const shawermaText = document.createElement('p'); 
    shawermaTitle.textContent = "Chicken Shawerma"; 
    shawermaText.textContent = "Chicken shawerma cooked bil Zarb, house made mtawameh."
    const msakhan = document.createElement('div'); 
    msakhan.classList.add('card'); 
    const msakhanTitle = document.createElement('h4'); 
    const msakhanText = document.createElement('p'); 
    msakhanTitle.textContent = "Msakhan"; 
    msakhanText.textContent = "fresh flatbread from our mother's recipe. Topped with sumac and pine nuts." 
    jaj.appendChild(jajTitle);
    jaj.appendChild(jajText); 
    mashawi.appendChild(masahwiTitle); 
    mashawi.appendChild(masahwiText); 
    shawerma.appendChild(shawermaTitle); 
    msakhan.appendChild(msakhanTitle);
    msakhan.appendChild(msakhanText);
    shawerma.appendChild(shawermaText);
    mainCourse.appendChild(jaj);
    mainCourse.appendChild(mashawi);
    mainCourse.appendChild(shawerma); 
    mainCourse.appendChild(msakhan);

    //drinks 
    const soda = document.createElement('div'); 
    soda.classList.add('card'); 
    const sodaTitle = document.createElement('h4'); 
    const sodaText = document.createElement('p'); 
    sodaTitle.textContent = "Soda"
    sodaText.textContent = "Sprite, Fanta, or Coke. Diet options available." 
    const arak = document.createElement('div'); 
    arak.classList.add('card'); 
    const arakTitle = document.createElement('h4'); 
    const arakText = document.createElement('p'); 
    arakTitle.textContent = "Local Arak";
    arakText.textContent = "Arak Hadad gold or crystal. Arak Gantous and Abou Raad."
    const beer = document.createElement('div');
    beer.classList.add('card');
    const beerTitle = document.createElement('h4'); 
    const beerText = document.createElement('p');
    beerTitle.textContent = "Local Beer"; 
    beerText.textContent = "Rotating local beer selection, ask your server for more information."
    soda.appendChild(sodaTitle);
    soda.appendChild(sodaText); 
    arak.appendChild(arakTitle);
    arak.appendChild(arakText);
    beer.appendChild(beerTitle);
    beer.appendChild(beerText); 
    drinks.appendChild(soda);
    drinks.appendChild(arak); 
    drinks.appendChild(beer);

    //Desserts 
    const layali = document.createElement('div'); 
    layali.classList.add('card'); 
    const layaliTitle = document.createElement('h4');
    const layaliText = document.createElement('p'); 
    layaliTitle.textContent = "Layali Lebnan"; 
    layaliText.textContent = "Try the infamous lebanese dessert, topped with pistachios and rose petals."
    const knafeh = document.createElement('div'); 
    knafeh.classList.add('card'); 
    const kanfehTitle = document.createElement('h4'); 
    const kanfehText = document.createElement('p'); 
    kanfehTitle.textContent = "Knafeh"
    kanfehText.textContent = "Knafeh khishneh or na3meh, served with qater and pistachios. You can add on Nutella."
    const qatayef = document.createElement('div'); 
    qatayef.classList.add('card'); 
    const qatayefTitle = document.createElement('h4'); 
    const qatayefText = document.createElement('p'); 
    qatayefTitle.textContent = "Qatayef";
    qatayefText.textContent = "Qatayef bil ishta, joz hind, and jibneh, along with qatayef 3asafiri stuffed with nutella."; 
    const note = document.createElement('div'); 
    note.classList.add('note'); 
    note.textContent = "*We serve our food with fresh homemade bread, ask your server for seasonal tasting menu.";
    layali.appendChild(layaliTitle);
    layali.appendChild(layaliText); 
    knafeh.appendChild(kanfehTitle); 
    knafeh.appendChild(kanfehText); 
    qatayef.appendChild(qatayefTitle);
    qatayef.appendChild(qatayefText); 
    dessert.appendChild(layali); 
    dessert.appendChild(knafeh);
    dessert.appendChild(qatayef);
    dessert.appendChild(note);
}