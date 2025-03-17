

class MoveEmbed{
    id="";
    estilo=0;
    div_scroll = null;

    constructor(config){
        this.autoplay=config.autoplay,
        this.controlsList=config.controlsList,
        this.loop=config.loop,
        this.id=`#${config.id}`,
        this.estilo=config.estilo,
        this.div_scroll = document.querySelector(this.id);
        
    }
    posDinamic(){
        
        const addClass = (posi)=>{
            console.log(this.estilo)
            if(posi == 0 || posi == null){
                this.div_scroll.setAttribute("style",`top:${this.estilo}px;`);
            }else if(this.estilo > 0 ){
                let fixo = this.estilo;
                fixo = fixo-(posi/3)
                this.div_scroll.setAttribute("style",`top:${fixo}px;`);
                console.log(fixo)
            }else{
                let fixo = this.estilo;
                fixo = fixo-(posi/3)
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