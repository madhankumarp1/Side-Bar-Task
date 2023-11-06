let maindiv=document.createElement("div")
maindiv.className="div0"
document.body.append(maindiv)

let subdiv=document.createElement("div")
subdiv.className="div1"
maindiv.append(subdiv)

let content=document.createElement("div")
content.className="contbox"
subdiv.append(content)


let title=document.createElement("h1")
title.innerText="Page Not Found"
content.append(title)

let fpara=document.createElement("p")
fpara.innerText="Looks like you've followed a broken link or entered a URL that doesn't exist on this site."
content.append(fpara)

let spara= document.createElement("a")
spara.setAttribute('href',"index.html")
spara.innerText="<Back to page"
content.append(spara)

let line = document.createElement("hr");
content.append(line);


let tpara = document.createElement("p");
tpara.innerText="followed a broken link or entered a URL that doesn't exist on this site."
content.append(tpara);



