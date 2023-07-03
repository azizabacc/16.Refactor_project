// Removing all child elements from Container before creating new set of elements

export const clean=(container)=>{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
}
