

class MoveEmbed{
    id="";
    estilo=`top:0px;`;
    div_scroll = null;

    constructor(config){
        this.autoplay=config.autoplay,
        this.controlsList=config.controlsList,
        this.loop=config.loop,
        this.id=`#${config.id}`,
        this.estilo=config.estilo
        this.div_scroll = document.querySelector(this.id);
    }
    posDinamic(){
        
        const addClass = (posi)=>{
            if(posi == 0 || posi == null){
                this.div_scroll.setAttribute("style",this.estilo);
            }else{
                this.estilo=`top:-${posi/8}px;`;
                this.div_scroll.setAttribute("style",this.estilo);
            }
            
        }
        document.addEventListener("scroll",(evt)=>{
            const posi = window.scrollY;
            addClass(posi);
        })


    }
}
export { MoveEmbed };