import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
  }

}
