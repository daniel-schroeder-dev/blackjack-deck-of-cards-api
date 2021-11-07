function buildDOMElement(elementName, id=null, textContent="") {
    const element = document.createElement(elementName);
    element.id = id;
    element.textContent = textContent;
    return element;
}

export { buildDOMElement };
