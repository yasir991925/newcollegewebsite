class Page {
    constructor(el) {
        this.el = el;
        this.tanit = Array.from(this.el.querySelectorAll('.tanit'));
    }
    animate(direction, dir, callback) {
        let scrollTime = 1200;
        let scrollEasing = 'easeInOutCubic';
        let delayTime = 100;
        self = this;
        var scrollPage = function (direction, dir, callback) {
            if (dir === 'next') {
                anime({
                    targets: self.tanit,
                    easing: scrollEasing,
                    duration: scrollTime,
                    opacity: direction === 'in' ? [0, 1] : [1, 0],
                    translateY: direction === 'in' ? ['100%', '0%'] : ['0%', '-100%'],
                    delay: (el, i, l) => { return delayTime * i + 100 }
                });
                anime({
                    targets: self.el,
                    duration: scrollTime,
                    easing: scrollEasing,
                    // opacity: direction === 'in' ? [0, 1] : [1, 0],
                    translateY: direction === 'in' ? ['100%', '0%'] : ['0%', '-100%'],
                    complete: function () {
                        self.isAnimating = false;
                        if (callback && typeof callback == 'function') {
                            callback();
                        }
                    }
                });
            }
            if (dir === 'prev') {
                anime({
                    targets: self.tanit,
                    easing: scrollEasing,
                    duration: scrollTime,
                    opacity: direction === 'in' ? [0, 1] : [1, 0],
                    translateY: direction === 'in' ? ['-100%', '0%'] : ['0%', '100%'],
                    delay: (el, i, l) => { return delayTime * i + 100 }
                });
                anime({
                    targets: self.el,
                    duration: scrollTime,
                    easing: scrollEasing,
                    // delay: 800,
                    // opacity: direction === 'in' ? [0, 1] : [1, 0],
                    translateY: direction === 'in' ? ['-100%', '0%'] : ['0%', '100%'],
                    complete: function () {
                        self.isAnimating = false;
                        if (callback && typeof callback == 'function') {
                            callback();
                        }
                    }
                });
            }
        };
        scrollPage(direction, dir, callback);
    }
}



class fullScreenPage{
    constructor(el){
        this.el  = el;
        this.pages = Array.from(this.el.querySelectorAll('.section'));
        this.pagesEl = [];
        this.current = 0;
        this.total = this.pages.length;
        this.init();
    }
    init(){
        const upButtton = document.querySelector('.upbutton');
        const downButtton = document.querySelector('.downbutton');
        const self = this;
        this.pages.forEach(page=>{
            self.pagesEl.push(new Page(page));
        })
        upButtton.addEventListener('click',function(el){
            self.navigate('prev');
        });
        downButtton.addEventListener('click',function(el){
            self.navigate('next');
        });
    }
    navigate(direction){
        if(this.isAnimating){
            return false;
        }
        const self = this;
        self.isAnimating = true;
        const currentPage = this.pagesEl[this.current]

        if (direction === 'next') {
            this.current = this.current < this.total - 1 ? this.current + 1 : 0;
        } else if (direction === 'prev') {
            this.current = this.current > 0 ? this.current - 1 : this.total - 1;
        }

        const nextPage = this.pagesEl[this.current];
        currentPage.animate('out',direction);
        
        nextPage.el.classList.add('section--current');
        nextPage.animate('in', direction, () => { currentPage.el.classList.remove('section--current'); self.isAnimating = false;});

    }
}

new fullScreenPage(document.querySelector('.mainStage'));


document.addEventListener("DOMContentLoaded",()=>{
    const overlay = document.querySelector('.overlay');
    anime({
        targets: overlay,
        translateX: ['100%','200%'],
        easing: 'easeInOutQuad',
        complete: () => {
        self.isAnimating = false;
            overlay.remove();
        }
    })
})