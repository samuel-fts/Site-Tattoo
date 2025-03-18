import { MoveEmbed } from "./backMove.js"

const configs_primeiroVideo = [
     {
        autoplay:true,
        loop:true,
        id:"container_vid",
        estilo:0,
        vel:1,
    },
    {
        autoplay:true,
        loop:true,
        id:"div_vd",
        estilo:0,
        vel:-1.3,
    }
]

const vid1 = new MoveEmbed(configs_primeiroVideo[0]);
vid1.posDinamic();

const vid1_int = new MoveEmbed(configs_primeiroVideo[1]);
vid1_int.posDinamic();

const configs_segundoVideo = [
    {
       autoplay:true,
       loop:true,
       id:"container_vid2",
       estilo:1600,
       vel:1,
   },
   {
       autoplay:true,
       loop:true,
       id:"div_vd2",
       estilo:-1200,
       vel:-1.3,
   }
]

const vid2 = new MoveEmbed(configs_segundoVideo[0]);
vid2.posDinamic();

const vid2_int = new MoveEmbed(configs_segundoVideo[1]);
vid2_int.posDinamic();
