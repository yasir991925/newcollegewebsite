class PageChanger{
    constructor(el){
        this.el = el;
    }
    createDiv(){
        const self = this;
        self.overlay = document.createElement('div');
        self.overlay.setAttribute("class","overlay");
        this.el.appendChild(self.overlay);
    }
    animate(action,callback){
        if(this.isAnimating){
            return false;
        }
        this.isAnimating = true;
        anime.remove(this.overlay);
        const self = this;
        this.createDiv();
        anime({
            targets: self.overlay,
            translateX: action === 'cover' ? ['0','100%'] : ['200%','100%'],
            easing: 'easeInOutQuad',
            complete: ()=>{self.isAnimating = false;
                if(callback && typeof callback === 'function'){
                    callback();
                }
            }
        })
    }
}

var p = new PageChanger(document.querySelector('.mainStage'));

var buttons = Array.from(document.querySelectorAll('.tile'));

buttons.forEach(tile=>{
    tile.addEventListener('click',()=>{
        const link = tile.getAttribute('redirect');
        p.animate('cover',()=>{
            window.location.assign(`${link}`)
        });
    });
})