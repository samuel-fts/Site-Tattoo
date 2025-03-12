const head=document.head
const body=document.body



const estilo="<link rel='stylesheet' type='text/css' href='estilo_topo.css' />"

head.innerHTML+=estilo
const nav=document.createElement("nav")
nav.setAttribute("id","nav")
nav.setAttribute("class","nav_bar")

body.prepend(nav)
const div_bar=document.createElement("div")
const div_bar_2=document.createElement("div")

const ul=document.createElement("ul")
const div=document.createElement("div")

nav.prepend(div_bar_2)
nav.appendChild(div_bar)
div_bar.setAttribute("class","div_bar")
div_bar_2.setAttribute("class","div_bar bar_logo")

const li=
    "<li><a href='index.html' >home</a></li>"+
    "<li><a href='index.html' >agenda</a></li>"+
    "<li><a href='index.html' >orçamento</a></li>"
div_bar.appendChild(ul)
div_bar.appendChild(div)
div.innerHTML="<button id='btn_menu'><div class='cont_linha'><div class='linha t_1 mer'></div><div class='linha t_2'></div></div></button>"
ul.innerHTML=li
div_bar_2.innerHTML="<span>studio medusa</span>"

const btn_menu=document.getElementById("btn_menu")

