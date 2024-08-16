function mostrarMas() {
    var textoAdicional = document.getElementById('textoAdicional');
    var verMasBtn = document.getElementById('verMasBtn');
    
    if (textoAdicional.style.display === 'none') {
        textoAdicional.style.display = 'block';
        verMasBtn.textContent = 'Ver menos';
    } else {
        textoAdicional.style.display = 'none';
        verMasBtn.textContent = 'Ver que siente Gael por mí';
    }
}