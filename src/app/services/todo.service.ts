import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Todos } from '../testBD';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }


  getTodos(): Todo[] {
    return Todos;
  }

  getTodo(id: number): Todo {
    return Todos[id];
  }

  editTodo(id: number, todo: Todo): Todo {
    return Todos[id] = todo;
  }

  createTodo(todo: Todo): Todo {
    Todos.push(todo);
    return Todos[Todos.length - 1];
  }

  deleteTodo(id: number): Todo {
    const deletedTodo = Todos.splice(id, 1);
    return deletedTodo[0];
  }
}


