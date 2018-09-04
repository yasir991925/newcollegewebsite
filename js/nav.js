// class Nav{
//     constructor(el){
//         this.el = el;
//         this.mainStage = document.querySelector('.mainStage');
//         this.link = this.el.querySelector('.links');
//         this.links = Array.from(this.link.querySelectorAll('.link'));
//         this.hidden = true;
//         this.init();
//     }

//     init(){
//         this.button = document.querySelector('.btn-nav');
//         this.button.addEventListener('click',()=>{
//             this.animate(this.hidden);
//         });
//     }
    
//     animate(state){
//         if(this.isAnimating){
//             return false;
//         }
//         this.button.classList.toggle("change");
//         this.isAnimating = true;
//         anime.remove(this.el);
//         anime({
//             targets: [this.el,this.mainStage],
//             delay: (el,i,l) => {return i*50 + 50},
//             translateY: state === true ? ['0','100%'] : ['100%' , '0'], 
//             duration: state === true ? 800 : 650,
//             easing: [0.24, 0.08, 0.25, 1]
//         });

//         anime({
//             targets: this.links.reverse(),
//             delay: (el, i, l) => { return (i * 40) + 200 },
//             translateY: state === true ? ['-100%', '100%'] : ['100%', '0'],
//             duration: state === true ? 500 : 70,
//             easing: 'easeInOutQuad',
//             complete: () => {
//                 this.isAnimating = false;
//                 this.hidden = !this.hidden;
//                 console.log(this.hidden)
//             }
//         })
//     }
// }

// new Nav(document.querySelector('.nav'));

// const t1 = document.querySelector('.at1');
// const t2 = document.querySelector('.at2');
// const t3 = document.querySelector('.at3');
// const t4 = document.querySelector('.at4');

// const easing = 'easeInOutQuad';

// anime({
//     targets: t1,
//     translateY: ['-10%','10%'],
//     easing: easing,
//     direction: 'alternate',
//     loop: true
// })

// anime({
//     targets: t2,
//     translateX: ['-10%','10%'],
//     easing: easing,
//     direction: 'alternate',
//     loop: true
// })

// anime({
//     targets: t3,
//     translateX: ['-30%','10%'],
//     easing: easing,
//     direction: 'alternate',
//     loop: true
// })

// anime({
//     targets: t4,
//     translateY: ['-30%','30%'],
//     easing: easing,
//     direction: 'alternate',
//     loop: true
// })


// function openNav(isOpen) {
//     var nav = document.querySelector(".nav");
//     var navr = document.querySelector(".nav-red");
//     if(isOpen == false){
//     nav = anime({
//         targets : "div.nav",
//         translateX: "100%",
//         duration: 1200,
//         easing: 'easeInOutQuart'
//     })
    
//     navr =  anime({
//         targets: "div.nav-red",
//         translateX: "100%",
//         duration: 1000,
//         easing: 'easeInOutQuart'
//     })
//     isOpen = true;
//     }
   

// }

class Nav {
    constructor(el){
        this.el = el;
        this.link = this.el.querySelector('.links');
        this.links = Array.from(this.link.querySelectorAll('.link'));
        this.hidden = true;
        this.init();

    }

    init() {
        this.button = document.querySelector('.nav-btn');
        this.button.addEventListener('click',()=>{
            this.animate(this.hidden);
        });
    }
    animate(state){
        if(this.isAnimating == true){
            return false;
        }
        this.button.classList.toggle("change");
        this.isAnimating = true;
        anime.remove(this.el);
        
            console.log(this.isAnimating)
            anime.remove(this.el);
            anime({
                targets : "div.nav",
                translateX: state === true ? ['0','100%'] : ['100%' , '0'],
                duration: state === true ? 1200 : 1000,
                easing: 'easeInOutQuart'
                });
            anime({
                targets: "div.nav-red",
                translateX: state === true ? ['0','100%'] : ['100%' , '0'],
                duration: state === true ? 1000 : 1200,
                easing: 'easeInOutQuart',
                complete: () => {
                        this.isAnimating = false;
                        this.hidden = !this.hidden;
                        console.log(this.hidden)
                    }
                });
           }
        
       

}


new Nav(document.querySelector('.nav'));

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector('.overlay');
    anime({
        targets: overlay,
        translateX: ['100%', '200%'],
        easing: 'easeInOutQuad',
        complete: () => {
            self.isAnimating = false;
            overlay.remove();
        }
    })
})