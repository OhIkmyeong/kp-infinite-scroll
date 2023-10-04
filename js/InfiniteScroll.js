export class InfiniteScroll{
    #SPEED_DFLT = "40s";
    constructor(){
        this.$$wrap = document.querySelectorAll('.ifslider-wrap');
    }//constructor

    init(){
        for(const $wrap of this.$$wrap){
            this.set_direction($wrap);
            this.set_speed($wrap);
            this.duplicate_items($wrap);
        }//for
    }//init

    /**
     * 
     * @param {*} $wrap 
     */
    set_direction($wrap){
        const dir = $wrap.dataset.direction === "right" ? "right" : "left";
        if(dir !== "right"){
            $wrap.dataset.direction = dir;
        }
    }//set_direction

    /**
     * 
     * @param {*} $wrap 
     */
    set_speed($wrap){
        const speed = $wrap.dataset.speed || this.#SPEED_DFLT;
        $wrap.style.setProperty('--data-speed',speed);
    }//set_speed

    /**
     * 
     * @param {*} $wrap 
     */
    duplicate_items($wrap){
        const $frag= document.createDocumentFragment();
        const $slider = $wrap.getElementsByClassName('ifslider')[0];
        const $$item = $slider.querySelectorAll('.ifslider-item');
        Array.prototype.forEach.call($$item, ($item,idx) =>{
            const $clone = $item.cloneNode(true);
            $clone.dataset.ifsliderItem = "cloned";
            if(!idx){$clone.classList.add('flag');}
            $frag.appendChild($clone);
        });
        $slider.appendChild($frag);
    }//duplicate_items

}//class-InfiniteScroll