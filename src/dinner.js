function createDinnerPage() {
        
    let container = document.querySelector('.main');
    let foodContent = document.querySelector('.foodContent');
    let lunchImg = document.createElement('img');
    let lunchDiv = document.createElement('div');
   
    lunchImg.src="https://media.istockphoto.com/id/474267570/vector/restaurant-menu-design.jpg?s=612x612&w=0&k=20&c=0xk9e0S5h9BloRkxrRB0bP6L4H4bcClQZZwT4JHiiFY=";
    lunchImg.style.height = "800px";
    foodContent.appendChild(lunchDiv);
    lunchDiv.appendChild(lunchImg);
    
    }
    
    export default createDinnerPage;
    
