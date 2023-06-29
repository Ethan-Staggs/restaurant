import createLunchPage from './lunch';
import createDinnerPage from './dinner';
import createDessertPage from './dessert';

const createTabs = () => {
    const main = document.querySelector('.main');
    const foodContent = document.querySelector('.foodContent');
    const tabContent = document.querySelector('.tabContent');

    const lunchDiv = document.createElement('div');
    const dinnerDiv = document.createElement('div');
    const dessertDiv = document.createElement('div');

    lunchDiv.setAttribute('id', 'lunch-btn');
    dinnerDiv.setAttribute('id', 'dinner-btn');
    dessertDiv.setAttribute('id', 'dessert-btn');

    lunchDiv.classList.add('tabs');
    dinnerDiv.classList.add('tabs');
    dessertDiv.classList.add('tabs');

    lunchDiv.textContent = 'Lunch';
    dinnerDiv.textContent = 'Dinner';
    dessertDiv.textContent = 'Dessert';
    
    
    tabContent.appendChild(lunchDiv);
    tabContent.appendChild(dinnerDiv);
    tabContent.appendChild(dessertDiv);
    

    lunchDiv.addEventListener('click', () => {
        foodContent.textContent = "";
        createLunchPage();
    });

    dinnerDiv.addEventListener('click', () => {
        foodContent.textContent = "";
        createDinnerPage();
    });

    dessertDiv.addEventListener('click', () => {
        foodContent.textContent = "";
        createDessertPage();
    });

    tabContent.classList.add('tabContainer');

}


export default createTabs;