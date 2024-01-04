import { Component, inject } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  http = inject(HttpClient);
  tasks!: Task[];

  ngOnInit(){
    this.http.get<Task[]>('http://127.0.0.1:8000/api/v1/tasks/').subscribe(
      (data) => {
        this.tasks = data.filter(task => task.done === true);
      }
    )
  }
}
