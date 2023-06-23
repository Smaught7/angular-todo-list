import { Component } from '@angular/core';
import { TodoService } from '../TodoService.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  public taskItem = '';
  public taskData = '';

  constructor(public todoService: TodoService) {}
}
