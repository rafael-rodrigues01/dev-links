function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img 
  const img = document.querySelector('#profile img')
  
  // substituir a imagem 
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar.light.png')
    img.setAttribute('alt', 'Foto de Rafael Rodrigues sorrindo, usando óculos em preto e branco com camisa branca, barba e fundo azul')
  } else {
    img.setAttribute('src','./assets/avatar.png')
    img.setAttribute('alt', 'Foto de Rafael Rodrigues sério, usando óculos e camisa branca, barba e fundo branco')
  }
}
