import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../interfaces/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() task! : Task;
  constructor(
    private taskService : TaskService,
    private route : ActivatedRoute,
    private location : Location
    ) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask() : Task{
    const id = this.route.snapshot.paramMap.get('id') ?? 0;
    const task = this.taskService.getTask(+id);
    this.task = task;
    return task;
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (!this.task.id) {
      this.taskService.addTask(this.task);
      return this.goBack();
    }
    this.taskService.updateTask(this.task);
    this.goBack();
  }
}
