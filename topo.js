const head=document.head
const body=document.body



const estilo="<link rel='stylesheet' type='text/css' href='estilo_topo.css' />"

head.innerHTML+=estilo
const nav=document.createElement("nav")
nav.setAttribute("id","nav")
nav.setAttribute("class","nav_bar")

body.prepend(nav)
const div_bar=document.createElement("div")
const div_btn=document.createElement("div")


const ul=document.createElement("ul")
const btn=document.createElement("div")


nav.appendChild(div_bar)
nav.appendChild(div_btn)
div_btn.setAttribute("class","div_btn")
div_bar.setAttribute("class","div_bar")


const li=
    "<li><a href='index.html' >home</a></li>"+
    "<li><a href='index.html' >agenda</a></li>"+
    "<li><a href='index.html' >orçamento</a></li>"
div_bar.appendChild(ul)
div_btn.appendChild(btn)
btn.innerHTML="<button id='btn_menu'><div class='cont_linha'><div class='linha t_1 mer'></div><div class='linha t_2'></div></div></button>"
ul.innerHTML=li


const btn_menu=document.getElementById("btn_menu")

