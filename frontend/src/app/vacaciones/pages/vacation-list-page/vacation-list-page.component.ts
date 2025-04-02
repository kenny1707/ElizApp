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
  selectedDateInfo: string | null = null; // Información del día seleccionado
  searchQuery: string = '';
  

  // Lista de empleados con vacaciones
  employees = [
    { id: 1, name: 'Juan Pérez', email: 'juanperez@email.com', phone: '+51 999 888 777' },
    { id: 2, name: 'María López', email: 'marialopez@email.com', phone: '+51 998 777 666' },
    { id: 3, name: 'Carlos Ramírez', email: 'carlosramirez@email.com', phone: '+51 997 777 555' }
  ];

  filteredEmployees = [...this.employees];

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

  selectDay(day: number) {
    this.selectedDay = day;
    this.selectedDateInfo = `Información de ${day} de ${this.currentMonth.toLocaleString('es-ES', { month: 'long' })}`;
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

  filterEmployees() {
    this.filteredEmployees = this.employees.filter(employee =>
      employee.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
