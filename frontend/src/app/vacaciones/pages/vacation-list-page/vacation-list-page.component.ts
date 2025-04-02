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
    { id: 1, name: 'Juan Pérez', email: '2025-06-10', phone: '2025-06-20', status: 'pendiente' },
    { id: 2, name: 'María López', email: '2025-07-01', phone: '2025-07-10', status: 'aprobado' },
    { id: 3, name: 'Carlos Ramírez', email: '2025-08-05', phone: '2025-08-15', status: 'rechazado' },
    { id: 4, name: 'Ana Torres', email: '2025-09-10', phone: '2025-09-20', status: 'pendiente' },
    { id: 5, name: 'Ana Torres', email: '2025-09-10', phone: '2025-09-20', status: 'pendiente' },
    { id: 1, name: 'Juan Pérez', email: '2025-06-10', phone: '2025-06-20', status: 'pendiente' },
    { id: 2, name: 'María López', email: '2025-07-01', phone: '2025-07-10', status: 'aprobado' },
    { id: 3, name: 'Carlos Ramírez', email: '2025-08-05', phone: '2025-08-15', status: 'rechazado' },
    { id: 4, name: 'Ana Torres', email: '2025-09-10', phone: '2025-09-20', status: 'pendiente' },
    { id: 5, name: 'Ana Torres', email: '2025-09-10', phone: '2025-09-20', status: 'pendiente' },
    { id: 1, name: 'Juan Pérez', email: '2025-06-10', phone: '2025-06-20', status: 'pendiente' },
    { id: 2, name: 'María López', email: '2025-07-01', phone: '2025-07-10', status: 'aprobado' },
    { id: 3, name: 'Carlos Ramírez', email: '2025-08-05', phone: '2025-08-15', status: 'rechazado' },
    { id: 4, name: 'Ana Torres', email: '2025-09-10', phone: '2025-09-20', status: 'pendiente' },
    { id: 5, name: 'Ana Torres', email: '2025-09-10', phone: '2025-09-20', status: 'pendiente' },
  ];

  filteredEmployees = [...this.employees];

  // Paginación
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  paginatedEmployees: any[] = [];
  router: any;

  constructor() {
    this.today = new Date();
    // Empezamos con el mes actual
    this.currentMonth = new Date();
  }

  ngOnInit(): void {
    this.generateCalendar();
    this.updatePagination();
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
    this.currentPage = 1; // Reiniciar a la primera página al filtrar
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedEmployees = this.filteredEmployees.slice(startIndex, startIndex + this.itemsPerPage);
    this.totalPages = Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  updateStatus(event: { id: number, status: string }) {
    const employee = this.employees.find(emp => emp.id === event.id);
    if (employee) {
      employee.status = event.status;
    }
  }
}
