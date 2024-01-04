import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  newTask: Task = {
    title:'',
    description: '',
  };


  constructor(private taskService: TaskService, private router: Router) { }

  onSubmit() {
    console.log('Datos a enviar:', this.newTask);
    this.taskService.createTask(this.newTask)
      .subscribe(response => {
        console.log('Respuesta del servidor:', response);
        this.router.navigate(["/tasks"]);
      }, error => {
        console.error('Error en la solicitud POST:', error);
      });
  }
  
}
