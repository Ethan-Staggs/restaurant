function createSidebar() {
let sidebarContainer = document.querySelector('.sidebarContainer');
let container = document.querySelector('.main');
let sidebar = document.createElement('div');
let ul = document.createElement('ul');
let imgLogo = document.createElement('img');




//imgLogo.src ="https://filehandler.revlocal.com/451390";
//imgLogo.style.height = "200px";
//imgLogo.classList.add('logo');


container.classList.add("content");
sidebar.classList.add("sidebar");
ul.classList.add("main-links");

sidebarContainer.appendChild(imgLogo);






}

export default createSidebar;

/*
<div class="sidebar">
        <div class="logo"> <img src="https://filehandler.revlocal.com/451390" alt="" height="200px"></p></div>
        <div class="main-links">
          <ul>
            <li>
            <p>Reserve</p>
            </li>
            <li>
              <p>Menu</p>
            </li>
            <li>
              <p>Our Story</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
            <li>
              <p>Hours and Location</p>
            </li>
          </ul>
        </div>
        </div>
        */