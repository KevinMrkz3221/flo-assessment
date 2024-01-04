import { Component, inject } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  http = inject(HttpClient);
  tasks!: Task[];

  ngOnInit(){
    this.http.get<Task[]>('http://127.0.0.1:8000/api/v1/tasks/').subscribe(
      (data) => {
        this.tasks = data.filter(task => task.done === false);;
      }
    )
  }
}
