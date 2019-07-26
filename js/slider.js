class Slider {
    constructor(sliderInnerBlock, sliderControlBlock) {
        this.sliderInnerBlock = document.querySelector(`.${sliderInnerBlock}`);
        this.sliderControlBlock = document.querySelector(`.${sliderControlBlock}`);
        this.dotClass = 'slider-control__dot';
        this.dotActiveClass = 'slider-control__dot--active';
        this.dotInnerClass = 'slider-control__dot-inner';
    }
    createSlider() {
        this.appendControl();
        this.sliderClickEvent();
        this.windowResizeEvent();
    }
    appendControl() {
        for (let i = 0; i < this.sliderInnerBlock.children.length; i++) {
            let dot = this.getBlock(this.dotClass);
            this.sliderControlBlock.append(dot);
            let dotInner = this.getBlock(this.dotInnerClass);
            dot.append(dotInner);
            dot.setAttribute('data-id', i);
        }
        this.sliderControlBlock.children[0].classList.add(this.dotActiveClass);
    }
    sliderClickEvent() {
        this.sliderControlBlock.onclick = (event) => {
            let target = event.target;
            while (target != this.sliderControlBlock) {
                if (target.className == this.dotClass) {
                    this.dotActiveId = target.dataset.id;
                    this.sliderInnerBlock.style.transform = `translateX(-${this.sliderInnerBlock.offsetWidth*this.dotActiveId}px)`;
                    let dots = target.parentNode.children;
                    for (let i = 0; i < dots.length; i++) {
                        dots[i].classList.remove(this.dotActiveClass);
                    }
                    target.classList.add(this.dotActiveClass);
                    return;
                }
                target = target.parentNode;
            }
        }
    }
    windowResizeEvent() {
        window.onresize = () => {
            this.sliderInnerBlock.style.transform = `translateX(-${this.sliderInnerBlock.offsetWidth*this.dotActiveId}px)`;
        };
    }
    getBlock(className, tag = 'div') {
        let block = document.createElement(tag);
        if (className) block.className = className;
        return block;
    }
}

let slider = new Slider('reviews__blocks', 'reviews__block-control');
slider.createSlider();