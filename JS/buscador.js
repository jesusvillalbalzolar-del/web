// Array de leyes
const laws = [
  // 📖 Constitución
  { name: "Constitución de la República Bolivariana de Venezuela", pdf: "https://www.annaobserva.org/observatorio/wp-content/uploads/2018/03/Constituci%C3%B3n-de-la-Rep%C3%BAblica-Bolivariana-de-Venezuela-1999.pdf" },
  { name: "Constitución del Estado Nueva Esparta", pdf: "https://www.annaobserva.org/observatorio/wp-content/uploads/2018/03/Constituci%C3%B3n-de-la-Rep%C3%BAblica-Bolivariana-de-Venezuela-1999.pdf" },

  // ⚖️ Leyes Orgánicas
  { name: "Ley Orgánica de la Contraloría General de la República y del Sistema Nacional de Control Fiscal", pdf: "https://www.oas.org/juridico/spanish/mesicic2_ven_anexo_34_sp.pdf" },
  { name: "Ley Orgánica de Procedimientos Administrativos", pdf: "https://www.asambleanacional.gob.ve/leyes/sancionadas/ley-organica-de-procedimientos-administrativos" },
  { name: "Ley Orgánica de los Consejos Comunales", pdf: "https://www.asambleanacional.gob.ve/leyes/sancionadas/ley-organica-de-los-consejos-comunales" },
  { name: "Ley de Infogobierno", pdf: "https://es.scribd.com/document/459206459/Ley-de-Infogobierno" },
  { name: "Ley Orgánica del Poder Ciudadano", pdf: "https://www.asambleanacional.gob.ve/leyes/sancionadas/ley-n0-47-ley-organica-del-poder-ciudadano" },
  { name: "Ley Orgánica de Planificación Pública y Popular", pdf: "https://es.scribd.com/document/477919488/LEY-ORGANICA-DE-PLANIFICACION-PUBLICA-Y-POPULAR" },
  { name: "Ley Orgánica de las Comunas", pdf: "https://base.socioeco.org/docs/sistema_economico_comunal.pdf" },
  { name: "Ley Orgánica de la Contraloría Social", pdf: "https://www.asambleanacional.gob.ve/leyes/sancionadas/ley-organica-de-contraloria-social" },
  { name: "Ley Orgánica del Consejo Federal de Gobierno", pdf: "https://es.slideshare.net/slideshow/1raleyorganicaconsejofederalgobierno031109-leyorganicadelconsejofederaldegobiernopdf/266711970" },
  { name: "Ley Orgánica de Ciencia Tecnología e Innovación", pdf: "https://docs.google.com/document/d/1kOIwiwTYrf-dO3AqjcjyFn0UdUf6PZg1M0KJ4Itbc6I/edit?hl=es" },
  { name: "Ley Orgánica de Comunicación Popular", pdf: "https://www.asambleanacional.gob.ve/leyes/sancionadas/ley-de-comunicacion-del-poder-popular" },
  { name: "Ley Orgánica de los Consejos Locales de Planificación Pública", pdf: "https://es.scribd.com/doc/148643893/Ley-de-los-Consejos-Locales-de-Planificacion-Publica" },
  { name: "Ley Orgánica de Pueblos y Comunidades Indígenas", pdf: "https://www.acnur.org/fileadmin/Documentos/Pueblos_indigenas/ley_organica_indigena_ven.pdf" },
  { name: "Ley Orgánica de la Procuraduría General de la República", pdf: "https://sumate.org/Especiales/LeyesHabilitantes/Reforma_Ley_Organica_Procuraduria_General.pdf" },

  // 🚨 Leyes contra la corrupción
  { name: "Ley contra la Corrupción", pdf: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSNA_200521.pdf" },
  { name: "Decreto con Rango, Valor y Fuerza de la Ley contra la Corrupción", pdf: "https://www.asambleanacional.gob.ve/leyes/sancionadas/ley-de-reforma-del-decreto-con-rango-valor-y-fuerza-de-ley-contra-la-corrupcion" },

  // 📑 Decretos con Rango y Valor de Ley
  { name: "Decreto con Rango, Valor y Fuerza de la Ley de Simplificación de Trámites Administrativos", pdf: "https://badellgrau.com/decreto-con-rango-valor-y-fuerza-de-ley-de-simplificacion-de-tramites-administrativos/" },
  { name: "Decreto con Rango, Valor y Fuerza de la Ley del Sistema de Seguridad Social", pdf: "https://www.asambleanacional.gob.ve/leyes/sancionadas/decreto-no-8921-mediante-el-cual-se-dicta-el-decreto-con-rango-valor-y-fuerza-de-ley-de-reforma-parcial-de-la-ley-del-seguro-social" },
  { name: "Ley del Seguro Social y su Reglamento", pdf: "https://www.planificacion.gob.ec/wp-content/uploads/2023/02/LEY-DE-SEGURIDAD-SOCIAL-LSS.pdf" },
  { name: "Decreto con Rango, Valor y Fuerza de la Ley Orgánica de la Administración Financiera del Sector Público", pdf: "https://www.asambleanacional.gob.ve/leyes/sancionadas/decreto-con-rango-valor-y-fuerza-de-ley-de-reforma-del-decreto-con-rango-valor-y-fuerza-de-ley-organica-de-la-administracion-financiera-del-sector-publico" },
  { name: "Decreto con Rango, Valor y Fuerza de la Ley de Contrataciones Públicas", pdf: "https://www.asambleanacional.gob.ve/leyes/sancionadas/decreto-n0-1399-mediante-el-cual-se-dicta-el-decreto-con-rango-valor-y-fuerza-de-ley-de-contrataciones-publicas" },

  // 📌 Leyes del Estado Nueva Esparta
  { name: "Ley del Puerto Libre del Estado Nueva Esparta", pdf: "https://www.tradex.com.ve/wp-content/uploads/2019/05/Ley-del-Puerto-Libre-del-Estado-Nueva-Esparta-2000.pdf" },
  { name: "Ley de Emprendimiento del Estado Nueva Esparta", pdf: "https://www.ventevenezuela.org/wp-inter/uploads/2016/10/LEY-DE-EMPRENDIMIENTO-DEL-ESTADO-NUEVA-ESPARTA.pdf" },
  { name: "Decreto que crea la Zona Económica Especial del Estado Nueva Esparta", pdf: "https://conapri.org/desarrollo/wp-content/uploads/2024/02/D4884-ZEE-Nva-Esparta-GOE6.769.pdf" },
  { name: "Gaceta Oficial Extraordinaria del Estado Nueva Esparta", pdf: "https://transparenciave.org/wp-content/uploads/2016/07/Gaceta-Nueva-Esparta-LAIP-reducido.pdf" },
  { name: "Reforma Parcial de la Ley de Timbre Fiscal del Estado Nueva Esparta", pdf: "https://es.scribd.com/document/863149930/Reforma-ley-de-timbres-fiscales-nueva-esparta" }
];


  const container = document.getElementById("lawsContainer");
  const searchInput = document.getElementById("searchLaw");
  const pdfPreview = document.getElementById("pdfPreviewLaws");
  const downloadBtn = document.getElementById("downloadPdfLaws");

  // Función para renderizar las leyes
  function renderLaws(filter = "") {
    container.innerHTML = "";
    const filtered = laws.filter(law => law.name.toLowerCase().includes(filter.toLowerCase()));
    filtered.slice(0, 5).forEach(law => { // muestra máximo 5
      const btn = document.createElement("button");
      btn.className = "news-item";
      btn.textContent = law.name;
      btn.onclick = () => {
        pdfPreview.src = law.pdf;
        downloadBtn.href = law.pdf;
      };
      container.appendChild(btn);
    });
  }

  // Buscar en tiempo real
  searchInput.addEventListener("input", (e) => {
    renderLaws(e.target.value);
  });

  // Render inicial
  renderLaws();