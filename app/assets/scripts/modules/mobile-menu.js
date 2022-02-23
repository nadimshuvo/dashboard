class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector('.header_menu-icon');
        this.menuContent = document.querySelector('.mobile-menu');
        this.closeIcon = document.querySelector('.mobile-menu_header__cross')
        this.events()
    }

    events() {
        this.menuIcon.addEventListener('click', () => {
            console.log('Mobile-Menu was clicked')
            this.openTheMenu();
        })
        this.closeIcon.addEventListener('click', () => {
            console.log('Closing the Menu')
            this.closeTheMenu();
        })
    }

    openTheMenu() {
        console.log('toogleTheMenu')
        this.menuIcon.classList.add('header_menu-icon--close-x');
        this.menuContent.classList.add('mobile-menu--is-visible');
    }

    closeTheMenu() {
        console.log('Closing')
        this.menuIcon.classList.remove('header_menu-icon--close-x');
        this.menuContent.classList.remove('mobile-menu--is-visible');
    }
}

export default MobileMenu;