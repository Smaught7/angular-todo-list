import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public tasksList: Task[] = [];
  public taskText = '';
  public taskData = new Date();
  private readonly maxLength = 150;

  constructor() {}

  formatText() {
    if (this.taskText.length >= this.maxLength) {
      return this.taskText.slice(0, this.maxLength) + '...';
    } else {
      return this.taskText;
    }
  }

  onAddNewTask() {
    const task: Task = {
      id: Math.floor(Math.random() * 100 + 1),
      text: this.formatText(),
      data: this.taskData,
      done: false,
    };

    this.tasksList.push(task);

    this.taskText = '';
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
