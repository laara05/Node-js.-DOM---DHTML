function proximoParrafo() {
    let puntero1 = document.getElementById('parrafo1')
    while (puntero1 != null) {
        if (puntero1.nodeType == Node.ELEMENT_NODE)
            alert(puntero1.childNodes[0].nodeValue)
        else
            alert('No es un párrafo')
        puntero1 = puntero1.nextSibling
    }
}

function proximoElementoParrafo() {
    let puntero1 = document.getElementById('parrafo1')
    while (puntero1 != null) {
        alert(puntero1.childNodes[0].nodeValue)
        puntero1 = puntero1.nextElementSibling
    }
}

