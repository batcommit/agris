function mostrar(id) {
  // esconde todas as frases
  document.querySelectorAll('.frase').forEach(f => f.style.display = 'none');
  
  // mostra só a do botão clicado
  document.getElementById(id).style.display = 'block';
}