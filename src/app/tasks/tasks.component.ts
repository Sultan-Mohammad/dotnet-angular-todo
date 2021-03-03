import { Component, OnInit } from '@angular/core';
import { Tasks } from "../mock/tasks";
import { Task } from "../interfaces/task";
import { TaskService } from '../task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  
  tasks : Task[] = [];

  getTasks(): Task[]{
     this.tasks = this.taskService.getTasks();
     return this.tasks;
  }

  removeTask(id: number) : boolean {
    const isSuccess = this.taskService.removeTask(id);
    isSuccess? this.getTasks() : this.tasks;
    return isSuccess;
  }

  markAsDone(id: number) : Task {
     const task = this.taskService.markAsDone(id);
     return task;
  }
}
