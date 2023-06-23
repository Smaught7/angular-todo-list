import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public tasksList: Task[] = [];
  public taskItem = '';
  public taskData = new Date();

  constructor() {}

  onAddNewTask() {
    const task: Task = {
      id: Math.floor(Math.random() * 100 + 1),
      text: this.taskItem,
      data: this.taskData,
      done: false,
    };

    this.tasksList.push(task);

    this.taskItem = '';
    this.taskData = new Date();
  }

  onDeleteTask(task: Task) {
    this.tasksList = this.tasksList.filter((item) => item.id !== task.id);
  }

  onClearList() {
    this.tasksList.length = 0;
  }

  onTaskDone(task: Task) {
    task.done = !task.done;
  }
}
