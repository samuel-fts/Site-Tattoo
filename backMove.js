

class MoveEmbed{
    id="";
    estilo=0;
    div_scroll = null;
    vel=0;//quanto maior o valor, mais lento

    constructor(config){
        this.autoplay=config.autoplay,
        this.controlsList=config.controlsList,
        this.loop=config.loop,
        this.id=`#${config.id}`,
        this.estilo=config.estilo,
        this.div_scroll = document.querySelector(this.id),
        this.vel=config.vel
        
    }
    posDinamic(){
        const addClass = (posi)=>{
            console.log(this.estilo)
            if(posi == 0 || posi == null){
                this.div_scroll.setAttribute("style",`top:${this.estilo}px;`);
            }else {
                let fixo = this.estilo;
                fixo = fixo-(posi/this.vel)
                this.div_scroll.setAttribute("style",`top:${fixo}px;`);
                console.log(fixo)
            }
            
        }
        document.addEventListener("scroll",(evt)=>{
            const posi = window.scrollY;
            addClass(posi);
            
        })


    }
}
export { MoveEmbed };