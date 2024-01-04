import { Component, Input, inject } from '@angular/core';
import { Task } from '../../models/task.model';
import { HttpClient } from '@angular/common/http';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;

  http = inject(HttpClient);
  constructor(private taskService: TaskService) {}

  onToggleChange() {
    // Invierte el estado de la tarea localmente antes de la actualización del servidor
    this.task.done = !this.task.done;

    // Llama al servicio para actualizar la tarea en el servidor
    this.taskService.updateTaskToggle(this.task).subscribe(
      updatedTask => {
        console.log('Tarea actualizada correctamente', updatedTask);
      },
      error => {
        console.error('Error al actualizar la tarea', error);
        // Si hay un error, puedes revertir el cambio localmente si es necesario
        this.task.done = !this.task.done;
      }
    );
  }


  onDeleteTask() {
    this.taskService.deleteTask(this.task).subscribe(
      () => {
        console.log('Tarea eliminada correctamente');
        // Puedes realizar acciones adicionales después de eliminar la tarea
        window.location.reload();
      },
      error => {
        console.error('Error al eliminar la tarea', error);
        // Maneja el error según tus necesidades
      }
    );
  }

}
