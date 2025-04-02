import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vacation-aprobar-page',
  standalone: false,
  templateUrl: './vacation-aprobar-page.component.html',
  styleUrl: './vacation-aprobar-page.component.css'
})
export class VacationAprobarPageComponent {
  @Input() employee: any; // Recibe el empleado como entrada
  @Output() statusChange = new EventEmitter<{ id: number, status: string }>(); // Emite cambios

  approveVacation() {
    this.statusChange.emit({ id: this.employee.id, status: 'aprobado' });
  }

  rejectVacation() {
    this.statusChange.emit({ id: this.employee.id, status: 'rechazado' });
  }
}
