import { Injectable } from '@angular/core';
import { Task } from "./interfaces/task";
import { Tasks } from "./mock/tasks";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  tasks: Task[] = Tasks;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): Task {
    if (!task) {
      return {} as Task;
    }
    const id = this.tasks.length + 1;
    task.id = id;
    this.tasks.push(task);
    console.log(this.tasks)
    return task;
  }

  removeTask(id: number): boolean {
    if (!id) return false;
    this.tasks = this.tasks.filter(t => t.id !== id);
    return true;
  }

  getTask(id: number): Task {
    if (!id) return {} as Task;
    const task = this.tasks.find(t => t.id === id);
    return task ? task : {} as Task;
  }

  markAsDone(id: number): Task {
    let completedTask: Task = {} as Task;
    if (!id) return {} as Task;
    this.tasks = this.tasks.filter(task => {
      if (task.id === id) {
        task.isCompleted = true;
        completedTask = task;
      }
      return task;
    });
    return completedTask;
  }

  updateTask(task: Task): Task{
    if(!task) return {} as Task;
    this.tasks = this.tasks.filter(t =>{
      if (t.id === task.id) {
        t = task
      }
      return t;
    })
    return task;
  }

}
