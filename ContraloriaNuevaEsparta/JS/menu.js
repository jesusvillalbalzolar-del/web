  const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const body = document.body;

    if (menuToggle && sideMenu) {
      const openMenu = () => {
        menuToggle.setAttribute("aria-expanded", "true");
        sideMenu.classList.add("active");
        menuToggle.classList.add("open");
        body.classList.add("menu-open");
      };

      const closeMenu = () => {
        menuToggle.setAttribute("aria-expanded", "false");
        sideMenu.classList.remove("active");
        menuToggle.classList.remove("open");
        body.classList.remove("menu-open");
      };

      menuToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        if (expanded) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      // Cerrar al hacer clic fuera del menú y botón
      document.addEventListener("click", (e) => {
        const isClickInside =
          sideMenu.contains(e.target) || menuToggle.contains(e.target);
        if (!isClickInside && sideMenu.classList.contains("active")) {
          closeMenu();
        }
      });

      // Cerrar al hacer clic en cualquier enlace del menú
      sideMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          closeMenu();
        });
      });
    }


  const toggleBtn = document.getElementById('toggle-quienes-somos');
  const submenu = document.getElementById('submenu-quienes-somos');
  const arrow = document.getElementById('arrow');

  toggleBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (submenu.style.display === 'none' || submenu.style.display === '') {
      submenu.style.display = 'block';
      arrow.textContent = '▾'; // flecha hacia abajo
    } else {
      submenu.style.display = 'none';
      arrow.textContent = '▸'; // flecha hacia la derecha
    }
  });


  // Toggle submenú de Quiénes Somos
document.querySelectorAll('.submenu-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const submenu = document.getElementById(btn.getAttribute('aria-controls'));
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    submenu.style.display = expanded ? 'none' : 'block';
  });
});
