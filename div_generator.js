
//generate div with class and give it to parent 
export const generateDiv = (childClass,parent) =>{
    const child = document.createElement('div');
    child.classList.add(childClass);
    parent.appendChild(child);
    return child;
}

// generate img with src and give it to parent 
export const generateImg = (iconRef,parent) =>{
    const img = document.createElement('img');
    img.src = "http://openweathermap.org/img/wn/" + iconRef+ "@2x.png";
    parent.appendChild(img);
    
}
// generate titles H1/H2/H3 ( or text ) with innertext and give it to parent 
export const generateTitle = (titleType,innerHTML,parent) =>{
    const title = document.createElement(titleType);
    title.innerHTML = innerHTML;
    parent.appendChild(title);
}
//generate span with class and innerhtml and give it to parent
export const generateSpan = (childClass,innerHTML,parent) =>{
    const span = document.createElement("span");
    span.classList.add(childClass);
    span.innerHTML = innerHTML;
    parent.appendChild(span);
}
