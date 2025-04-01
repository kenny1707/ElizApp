import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacation-list-page',
  standalone: false,
  templateUrl: './vacation-list-page.component.html',
  styleUrl: './vacation-list-page.component.css'
})

export class VacationListPageComponent implements OnInit {
  currentMonth: Date;
  today: Date;
  weeks: (number | null)[][] = []; // Cada semana será una fila con 7 elementos (días)
  selectedDay: number | null = null;

  constructor() {
    this.today = new Date();
    // Empezamos con el mes actual
    this.currentMonth = new Date();
  }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar() {
    const monthStart = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const monthEnd = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);

    let startDay = monthStart.getDay(); // Día de la semana en el que empieza el mes
    const daysInThisMonth = monthEnd.getDate(); // Número de días en el mes

    // Creamos una matriz para las semanas
    this.weeks = [];

    // Rellenamos los días vacíos antes del primer día del mes
    let week: (number | null)[] = new Array(7).fill(null); // Una semana vacía
    for (let i = 0; i < startDay; i++) {
      week[i] = null; // Espacios vacíos antes del primer día
    }

    // Añadimos los días del mes a la semana actual
    let day = 1;
    while (day <= daysInThisMonth) {
      for (let i = startDay; i < 7; i++) {
        if (day > daysInThisMonth) break;
        week[i] = day;
        day++;
      }

      // Añadimos la semana actual al calendario
      this.weeks.push([...week]);

      // Reiniciamos la semana y preparamos para la siguiente
      week = new Array(7).fill(null);
      startDay = 0; // Después de la primera semana, los días ya estarán alineados
    }
  }

  // Navegar al mes anterior
  previousMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.generateCalendar();
  }


  // Seleccionar un día
  selectDay(day: number) {
    this.selectedDay = day;
  }

  // Verificar si el día está seleccionado
  isSelected(day: number): boolean {
    return this.selectedDay === day;
  }

  isToday(day:number):boolean {
    return (
      day === this.today.getDate() &&
      this.currentMonth.getMonth() === this.today.getMonth() &&
      this.currentMonth.getFullYear() === this.today.getFullYear()
    );
  }
}
