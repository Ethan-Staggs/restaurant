import createMainContent from './mainContent';
import createSidebar  from './sidebar';
import createTabs from './tabs';

function pageLoad() {
    createTabs();
    createSidebar();
    createMainContent();
};

export default pageLoad;