class Scroll {
    getElementPosition(elem) {
        let position = document.querySelector(elem).getBoundingClientRect();
        return position.top;
    }
    getItemPosition(elem) {
        let position = elem.getBoundingClientRect();
        return position.top;
    }
    eventClick() {
        let links = document.querySelectorAll('a');
        links.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                let targetLink = event.target.getAttribute('href');
                if (targetLink == "#" || targetLink == "#top") {
                    return;
                }
                window.scrollBy({top: this.getElementPosition(targetLink), behavior: 'smooth'});
            })
        });
    }
    eventScroll(menuItemClass, menuItemActiveClass) {
        window.onscroll = () => {
            let menuItems = document.querySelectorAll(`.${menuItemClass}`);
            for (let i = 0; i < menuItems.length; i++) {
                if (this.getElementPosition(menuItems[i].getAttribute('href')) < document.documentElement.clientHeight/2) {
                    document.querySelector(`.${menuItemActiveClass}`).classList.remove(menuItemActiveClass);
                    menuItems[i].classList.add(menuItemActiveClass); 
                }
            }
        }
    }
    eventMenu(menuButtonClass, menuListClass, menuListItemClass) {
        let menuButton = document.querySelector(`.${menuButtonClass}`);
        let menuList = document.querySelector(`.${menuListClass}`);
        let menuListItem = document.querySelectorAll(`.${menuListItemClass}`);
        console.log(menuListItem);
        menuButton.onclick = () => {
            menuButton.classList.toggle(`${menuButtonClass}--active`);
            menuList.classList.toggle(`${menuListClass}--min`);
        };
        menuListItem.forEach(item => {
            item.onclick = () => {
                if (document.documentElement.clientWidth < 1000) {
                    menuButton.classList.toggle(`${menuButtonClass}--active`);
                    menuList.classList.toggle(`${menuListClass}--min`);
                }
                
            };
        });
        
    }
}

let scroll = new Scroll;
scroll.eventClick();
scroll.eventScroll('menu__list-item', 'menu__list-item--active');
scroll.eventMenu('menu__button', 'menu__list', 'menu__list-item');