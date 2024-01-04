import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent {
  taskId!: number;
  task!: Task;
  constructor(private taskService: TaskService, private router: ActivatedRoute, private redirect: Router) { }

  ngOnInit(){
    this.router.params.subscribe(params => {
      this.taskId = +params['id'];
      this.getTask();
    })
  }
  getTask() {
    this.taskService.getTaskById(this.taskId).subscribe(
      task => {
        this.task = task;
        // Ahora, "this.task" contiene la tarea específica obtenida por su ID
      },
      error => {
        console.error('Error al obtener la tarea:', error);
      }
    );
  }

  onSubmit() {
    console.log('Datos a enviar:', this.task);
    this.taskService.updateTask(this.task)
      .subscribe(response => {
        console.log('Respuesta del servidor:', response);
        this.redirect.navigate(["/tasks"]);
      }, error => {
        console.error('Error en la solicitud POST:', error);
      });
  }
}
