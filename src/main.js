

function clickButton() {
    //leer valor del input
    const recuperarInput1 = document.getElementById ("input-nombre").value;
    const recuperarInput2 = document.getElementById ("input-apellido").value;
    
    // otra forma de hacerlo
    //const aRellenar = document.getElementById ("a-rellenar");
    //aRellenar.innerHTML = recuperarInput;
    
    //mostrar el resultado
    document.getElementById ("a-rellenar").innerHTML = `${recuperarInput1}  ${recuperarInput2}`;
}
const buttonCoral = document.getElementById ("coral");
buttonCoral.addEventListener ("click", clickButton);

console.log("hola")

function cambiarFotoPrincipal(idMiniatura) {
    const fotoPrincipal = document.getElementById ("foto-principal")
    const miniatura = document.getElementById (idMiniatura)
    fotoPrincipal.src = miniatura.src
    fotoPrincipal.alt = miniatura.alt
}

const miniatura1 = document.getElementById("miniatura1")
const miniatura2 = document.getElementById("miniatura2")
const miniatura3 = document.getElementById("miniatura3")

miniatura1.addEventListener ("click" , function () {
    cambiarFotoPrincipal("miniatura1")
})
miniatura2.addEventListener ("click" , function () {
    cambiarFotoPrincipal("miniatura2")
})