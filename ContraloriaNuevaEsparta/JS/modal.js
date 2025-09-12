
(function () {
(function () {
  // Función que inicializa un modal dado sus IDs
  function initModal(modalId, openBtnId, closeBtnId) {
    const modal = document.getElementById(modalId);
    const openBtn = document.getElementById(openBtnId);
    const closeBtn = document.getElementById(closeBtnId);

    if (!modal || !openBtn || !closeBtn) return;

    function openModal() {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      openBtn.focus();
    }

    openBtn.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // Inicializas todos los modales aquí
  initModal('organigramaModal', 'openOrganigramaMenu', 'closeOrganigramaModal');
  initModal('newsModal', 'openNewsModal', 'closeNewsModal');
  initModal('lawsModal', 'openLawsMenu', 'closeLawsModal'); // ✅ CORRECTO

  // ================================
  //   Script para el modal de noticias
  // ================================
  const newsItems = document.querySelectorAll('#newsModal .news-item');
  const pdfPreview = document.getElementById('pdfPreview');
  const downloadLink = document.getElementById('downloadPdf');

  newsItems.forEach(btn => {
    btn.addEventListener('click', () => {
      const pdfPath = btn.getAttribute('data-pdf');
      pdfPreview.src = pdfPath;
      downloadLink.href = pdfPath;
    });
  });

  // ================================
  //   Script para el modal de leyes
  // ================================
  const lawItems = document.querySelectorAll('#lawsModal .news-item');
  const pdfPreviewLaws = document.getElementById('pdfPreviewLaws');
  const downloadLinkLaws = document.getElementById('downloadPdfLaws');

  lawItems.forEach(btn => {
    btn.addEventListener('click', () => {
      const pdfPath = btn.getAttribute('data-pdf');
      pdfPreviewLaws.src = pdfPath;
      downloadLinkLaws.href = pdfPath;
    });
  });
})();


  // ================================
  //   Script para el modal de noticias
  // ================================
  const newsItems = document.querySelectorAll('.news-item');
  const pdfPreview = document.getElementById('pdfPreview');
  const downloadLink = document.getElementById('downloadPdf');

  newsItems.forEach(btn => {
    btn.addEventListener('click', () => {
      const pdfPath = btn.getAttribute('data-pdf');
      pdfPreview.src = pdfPath;
      downloadLink.href = pdfPath;
    });
  });

})();


// Abrir PDF en el iframe y preparar descarga
  document.querySelectorAll(".news-item").forEach(button => {
    button.addEventListener("click", () => {
      const pdfFile = button.getAttribute("data-pdf");
      document.getElementById("pdfPreview").src = pdfFile;
      document.getElementById("downloadPdf").href = pdfFile;
    });
  });

  // Cerrar modal
  document.getElementById("closeNewsModal").addEventListener("click", () => {
    document.getElementById("newsModal").style.display = "none";
  });




(function(){
  const modal = document.getElementById('leyesModal');
  const openBtn = document.getElementById('openLeyesMenu');
  const closeBtn = document.getElementById('closeLeyesModal');

  if (!modal || !openBtn || !closeBtn) return;

  // Abrir modal
  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; 
    closeBtn.focus();
  }

  // Cerrar modal
  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    openBtn.focus(); 
  }

  openBtn.addEventListener('click', e => {
    e.preventDefault();
    openModal();
  });

  closeBtn.addEventListener('click', closeModal);

  // Cerrar al hacer clic fuera del contenido
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // Cerrar con tecla ESC
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
})();



  // Modal Leyes
  (function(){
    const modal = document.getElementById('lawsModal');
    const openBtn = document.getElementById('openLawsModal');
    const closeBtn = document.getElementById('closeLawsModal');
    const pdfPreview = document.getElementById('pdfPreviewLaws');
    const downloadLink = document.getElementById('downloadPdfLaws');

    if (!modal || !openBtn || !closeBtn) return;

    // Abrir modal
    function openModal() {
      modal.classList.add('active');
      modal.style.display = "flex";
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    // Cerrar modal
    function closeModal() {
      modal.classList.remove('active');
      modal.style.display = "none";
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      openBtn.focus();
    }

    openBtn.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });

    closeBtn.addEventListener('click', closeModal);

    // Cerrar si hacen clic afuera del contenido
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });

    // Cerrar con tecla ESC
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    // Abrir PDF dentro del visor
    document.querySelectorAll("#lawsModal .news-item").forEach(button => {
      button.addEventListener("click", () => {
        const pdfFile = button.getAttribute("data-pdf");
        pdfPreview.src = pdfFile;
        downloadLink.href = pdfFile;
      });
    });
  })();

// Modal Contralor

  const openContralorModal = document.getElementById('openContralorModal');
  const contralorModal = document.getElementById('contralorModal');
  const closeContralorModal = document.getElementById('closeContralorModal');

  openContralorModal.addEventListener('click', () => {
    contralorModal.style.display = 'block';
  });
  closeContralorModal.addEventListener('click', () => {
    contralorModal.style.display = 'none';
  });
  window.addEventListener('click', e => {
    if(e.target === contralorModal) contralorModal.style.display = 'none';
  });
