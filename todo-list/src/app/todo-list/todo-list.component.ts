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

  clearList() {
    this.todoService.onClearList();
  }
}
