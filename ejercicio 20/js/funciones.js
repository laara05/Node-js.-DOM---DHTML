function moverItem() {
    let ref1 = document.getElementById('lista1')
    let refhijo = ref1.firstElementChild
    let ref2 = document.getElementById('lista2')
    ref2.appendChild(refhijo)
}

let orden = 1

function clonarNodos() {
    let id = document.getElementById("enlaces")
    let nuevos = id.cloneNode(true)
    nuevos.setAttribute("id", 'enlaces' + orden)
    orden++
    id = document.getElementById("enlacesnuevos")
    id.appendChild(nuevos)
}

