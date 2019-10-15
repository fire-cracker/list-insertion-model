const createdNotes = document.querySelector('#listed');
const bodyField = document.querySelector('#body-field');

let list = 0;

function createElement(element, attribute, inner) {
    if (typeof (element) === "undefined") {
        return false;
    }
    if (typeof (inner) === "undefined") {
        inner = "";
    }
    let el = document.createElement(element);
    if (typeof (attribute) === 'object') {
        for (let key in attribute) {
            el.setAttribute(key, attribute[key]);
        }
    }
    if (!Array.isArray(inner)) {
        inner = [inner];
    }
    for (let k = 0; k < inner.length; k++) {
        if (inner[k].tagName) {
            el.appendChild(inner[k]);
        } else {
            el.appendChild(document.createTextNode(inner[k]));
        }
    }
    return el;
}

function createText() {
    let noteId = "note" + list;
    let newBody = bodyField.value;
    let color;
    if (newBody === '') {
        alert('Please insert text to the text field.');
        return;
    }
    let date = new Date().toLocaleString("en-US");

    list === 0 ? list++ : list;
    (list % 3 === 0) ? color = 'red' : color = 'black';

    let bodyElement = createElement("div", { "class": "list-text" }, newBody),
        dateElement = createElement("div", { "class": "list-date" }, date),
        newNoteDiv = createElement("div", { "id": noteId, "style": `background:${color};border-bottom: 2px solid white;` }, [bodyElement, dateElement]);

    createdNotes.appendChild(newNoteDiv);
    list++

    bodyField.value = '';
}
