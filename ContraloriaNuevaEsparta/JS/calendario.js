document.addEventListener('DOMContentLoaded', () => {
  const calendarMonthYear = document.getElementById('calendarMonthYear');
  const calendarDays = document.getElementById('calendarDays');
  const prevMonthBtn = document.getElementById('prevMonth');
  const nextMonthBtn = document.getElementById('nextMonth');

  // Meses en español para mostrar
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  let currentDate = new Date();

  // Función para renderizar nombres de días de la semana (Lun, Mar, etc)
  function renderDayNames() {
    const dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    calendarDays.innerHTML = ''; // Limpia

    dayNames.forEach(d => {
      const dayNameDiv = document.createElement('div');
      dayNameDiv.classList.add('day-name');
      dayNameDiv.textContent = d;
      calendarDays.appendChild(dayNameDiv);
    });
  }

  // Función para renderizar días del mes
  function renderDays(date) {
    calendarDays.innerHTML = ''; // Limpia todo para re-dibujar

    renderDayNames();

    const year = date.getFullYear();
    const month = date.getMonth();

    // Primer día del mes (ej: 1 de julio 2025)
    const firstDayOfMonth = new Date(year, month, 1);
    // Último día del mes
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const lastDate = lastDayOfMonth.getDate();

    // Día de la semana del primer día del mes (0=Dom, 1=Lun,...)
    // Nosotros consideramos que semana inicia el lunes (index 0), así que:
    // Ajustamos domingo (0) a 7 para que quede al final
    let firstWeekDay = firstDayOfMonth.getDay();
    if (firstWeekDay === 0) firstWeekDay = 7;

    // Mes anterior para mostrar días "otros meses"
    const prevLastDay = new Date(year, month, 0).getDate();

    // Mostrar días del mes anterior que llenan la primera fila
    for (let i = firstWeekDay - 1; i > 0; i--) {
      const day = document.createElement('div');
      day.classList.add('day', 'other-month');
      day.textContent = prevLastDay - i + 1;
      calendarDays.appendChild(day);
    }

    // Mostrar días actuales
    for (let i = 1; i <= lastDate; i++) {
      const day = document.createElement('div');
      day.classList.add('day');
      day.textContent = i;

      // Marcar hoy
      const today = new Date();
      if (
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        day.classList.add('today');
      }

      calendarDays.appendChild(day);
    }

    // Mostrar días del próximo mes para completar la última fila (hasta múltiplo de 7)
    const totalDaysRendered = firstWeekDay - 1 + lastDate;
    const nextDaysCount = (7 - (totalDaysRendered % 7)) % 7;
    for (let i = 1; i <= nextDaysCount; i++) {
      const day = document.createElement('div');
      day.classList.add('day', 'other-month');
      day.textContent = i;
      calendarDays.appendChild(day);
    }

    // Actualizar título mes y año
    calendarMonthYear.textContent = `${meses[month]} ${year}`;
  }

  // Botones para cambiar mes
  prevMonthBtn.addEventListener('click', () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    renderDays(currentDate);
  });

  nextMonthBtn.addEventListener('click', () => {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    renderDays(currentDate);
  });

  // Render inicial
  renderDays(currentDate);
});
