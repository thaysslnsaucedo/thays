const botao = document.getElementById('mostrarBtn');
const ocultar = document.getElementById('ocultar');
 
botao.addEventListener('click', () => {
    if (ocultar.style.display === 'none' || ocultar.style.display === '') {
        ocultar.style.display = 'block';
        botao.textContent = "Ocultar Imagem";
    } else {
        ocultar.style.display = 'none';
        botao.textContent = "Mostrar Imagem";
    }
});