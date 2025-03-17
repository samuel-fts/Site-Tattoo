import { MoveEmbed } from "./backMove.js"

const config = {
    autoplay:true,
    controlsList:"nodownload",
    loop:true,
    id:"div_vd",
    estilo:0,
}

const config2 = {
    autoplay:true,
    controlsList:"nodownload",
    loop:true,
    id:"div_vd2",
    estilo:900,
}

const c1 = new MoveEmbed(config);
c1.posDinamic();

const c2 = new MoveEmbed(config2);
c2.posDinamic();