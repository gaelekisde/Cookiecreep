function mostrarMas() {
    var textoAdicional = document.getElementById('textoAdicional');
    var verMasBtn = document.getElementById('verMasBtn');
    
    if (textoAdicional.style.display === 'none') {
        textoAdicional.style.display = 'block';
        verMasBtn.textContent = 'Cerrar sentimientos de gaelin';
    } else {
        textoAdicional.style.display = 'none';
        verMasBtn.textContent = 'Ver sentimientos de gaelin';
    }
}