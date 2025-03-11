const head=document.head
const body=document.body

const estilo="<link rel='stylesheet' type='text/css' href='estilo_topo.css' />"

head.innerHTML+=estilo
const nav=document.createElement("nav")
nav.setAttribute("id","nav")
nav.setAttribute("class","nav_bar")

body.prepend(nav)

const ul=document.createElement("ul")
const li=
    "<li>home</li>"+
    "<li>portifólio</li>"+
    "<li>agenda</li>"+
    "<li>localização</li>"
nav.appendChild(ul)
ul.innerHTML=li


