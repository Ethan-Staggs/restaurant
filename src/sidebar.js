function createSidebar() {
let sidebarContainer = document.querySelector('.sidebarContainer');
let container = document.querySelector('.main');
let sidebar = document.createElement('div');
let ul = document.createElement('ul');
let imgLogo = document.createElement('img');

container.classList.add("content");
sidebar.classList.add("sidebar");
ul.classList.add("main-links");
sidebarContainer.appendChild(imgLogo);

}

export default createSidebar;
