import { Injectable } from '@angular/core';
interface Task {
  id: number;
  text: string;
  data: Date;
}
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public tasksList: Task[] = [];
  public taskItem = '';
  public taskData = new Date();

  constructor() {}

  onAddNewTask() {
    const task = {
      id: Math.floor(Math.random() * 100 + 1),
      text: this.taskItem,
      data: this.taskData,
    };

    this.tasksList.push(task);

    this.taskItem = '';
    this.taskData = new Date();
  }
}
