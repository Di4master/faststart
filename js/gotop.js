class ButtonGoTop {
    constructor(buttonClass) {
        this.buttonClass = buttonClass;
    }
    createButton() {
        let button = document.createElement('a');
        button.className = this.buttonClass;
        button.setAttribute('href', '#top');
        document.body.append(button);
        this.button = button;
        
    }
    clickEvent(button = this.button) {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }
    displayOnScroll(button = this.button) {
        window.onscroll = () => {
            if (window.pageYOffset > 400) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        };
    }
}

let buttonGoTop = new ButtonGoTop('button-go-top');
buttonGoTop.createButton();
buttonGoTop.clickEvent();
buttonGoTop.displayOnScroll();