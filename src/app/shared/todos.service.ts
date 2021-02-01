import {Injectable} from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({providedIn: 'root'})
export class TodosService {

  public todos: Todo[] = [
    {id: 1, title: 'Купить БМВ', completed: true},
    {id: 2, title: 'Починить БМВ', completed: false},
    {id: 3, title: 'Продать БМВ', completed: false}
  ];

  onToggle(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
}
