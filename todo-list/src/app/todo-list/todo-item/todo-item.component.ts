import { Component } from '@angular/core';
import { TodoService } from 'src/app/TodoService.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  constructor(public todoService: TodoService) {}

  taskDone(task: Task) {
    this.todoService.onTaskDone(task);
  }

  deleteTask(task: Task) {
    this.todoService.onDeleteTask(task);
  }
}
