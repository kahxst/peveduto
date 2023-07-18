// Código JavaScript para mostrar/ocultar o menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('show-menu');
});

// Função para verificar se o usuário está na seção .quemsomos
function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  // Função para adicionar ou remover a classe .fixo na seção .interacao
// Função para verificar se o elemento está visível na viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  

// Função para verificar se um elemento está visível na viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }





///teste
// Adicione este código em algum lugar após incluir o jQuery e o Bootstrap

$(document).ready(function() {
  $('#collapseOne').on('show.bs.collapse', function() {
    $('#buttonText').addClass('d-none');
    $('#buttonIcon').removeClass('d-none');
  });

  $('#collapseOne').on('hide.bs.collapse', function() {
    $('#buttonText').removeClass('d-none');
    $('#buttonIcon').addClass('d-none');
  });
});






  
  
  
