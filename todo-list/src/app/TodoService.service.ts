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
  public tasksList: Task[] = [
    { id: 1, text: 'wyprowadzic psa', data: new Date() },
    { id: 2, text: 'umyc naczynia', data: new Date() },
  ];
  constructor() {}
}
