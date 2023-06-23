import { Component } from '@angular/core';
import { TodoService } from '../TodoService.service';
import { Task } from '../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {}

  addNewTask() {
    this.todoService.onAddNewTask();
  }

  deleteTask(task: Task) {
    this.todoService.onDeleteTask(task);
  }

  clearList() {
    this.todoService.onClearList();
  }

  taskDone(task: Task) {
    this.todoService.onTaskDone(task);
  }
}
