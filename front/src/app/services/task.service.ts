import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, ObservedValueOf } from "rxjs";
import { Task } from "../models/task.model";



@Injectable({
  providedIn: 'root'
})


export class TaskService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/tasks';
  http = inject(HttpClient);

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+"/")
  }

  getTaskById(taskId: number): Observable<Task>{
    const url = `${this.apiUrl}/${taskId}/`;
    return this.http.get<Task>(url);
  }

  updateTask(task: Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}/`;
    return this.http.put<Task>(url, task);
  }
  updateTaskToggle(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}/`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}/`;
    return this.http.delete<Task>(url);
  }

  createTask(task: Task): Observable<Task> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<Task>(this.apiUrl + "/", task, httpOptions);
  }
}