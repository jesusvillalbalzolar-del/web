
  // Clima desde OpenWeatherMap
  async function actualizarClima() {
    const apiKey = 'TU_API_KEY'; // ← Pon aquí tu API KEY de OpenWeatherMap
    const ciudad = 'Porlamar,VE';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      const max = Math.round(data.main.temp_max);
      const min = Math.round(data.main.temp_min);
      const icon = data.weather[0].icon;

      document.getElementById("clima-img").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      document.getElementById("clima-temp").textContent = `${max}°C / ${min}°C`;
    } catch (e) {
      console.error("Error al cargar clima:", e);
      document.getElementById("clima-temp").textContent = "No disponible";
    }
  }

  // Hora local del navegador
  function actualizarHora() {
    const ahora = new Date();
    const horaLocal = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("hora-local").textContent = horaLocal;
  }

  // Generador de calendario dinámico
  function generarCalendario() {
    const ahora = new Date();
    const año = ahora.getFullYear();
    const mes = ahora.getMonth();

    const primerDia = new Date(año, mes, 1).getDay();
    const diasMes = new Date(año, mes + 1, 0).getDate();

    const header = document.getElementById("calendar-header");
    const grid = document.getElementById("calendar-grid");

    // Meses en español
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                   "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    header.innerHTML = `<span>${meses[mes]} ${año}</span>`;
    grid.innerHTML = dias.map(d => `<span><strong>${d}</strong></span>`).join("");

    // Espacios en blanco antes del primer día
    for (let i = 0; i < primerDia; i++) {
      grid.innerHTML += `<span></span>`;
    }

    // Días del mes
    const hoy = ahora.getDate();
    for (let d = 1; d <= diasMes; d++) {
      const clase = d === hoy ? 'selected-date' : '';
      grid.innerHTML += `<span class="${clase}">${d}</span>`;
    }
  }

  // Ejecutar funciones al cargar
  actualizarClima();
  actualizarHora();
  generarCalendario();

  // Actualizar hora cada minuto
  setInterval(actualizarHora, 60000);
