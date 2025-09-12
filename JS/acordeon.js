  // Script para abrir/cerrar acordeones
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.classList.contains('open');

      if (!isOpen) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.classList.remove('open');
        content.style.maxHeight = null;
      }
    });
  });