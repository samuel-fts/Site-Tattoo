const head=document.head
const body=document.body



const estilo="<link rel='stylesheet' type='text/css' href='estilo_topo.css' />"

head.innerHTML+=estilo
const nav=document.createElement("nav")
nav.setAttribute("id","nav")
nav.setAttribute("class","nav_bar")

body.prepend(nav)


const ul=document.createElement("ul")
const div=document.createElement("div")


const li=
    "<li><a href='index.html' >home</a></li>"+
    "<li><a href='index.html' >agenda</a></li>"+
    "<li><a href='index.html' >orçamento</a></li>"
nav.appendChild(ul)
nav.appendChild(div)
div.innerHTML="<button id='btn_menu'><div class='cont_linha'><div class='linha t_1 mer'></div><div class='linha t_2'></div></div></button>"
ul.innerHTML=li

const btn_menu=document.getElementById("btn_menu")

