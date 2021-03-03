import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:'', redirectTo: '/tasks', pathMatch: 'full'},
  {path:"tasks", component: TasksComponent},
  {path: "taskdetail/:id", component: TaskDetailsComponent},
  {path: "taskadd/:id", component: TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
