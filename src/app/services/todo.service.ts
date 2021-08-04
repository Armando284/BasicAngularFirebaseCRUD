import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

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

//imagina que esto viene del backend
const Todos: Todo[] = [
  {
    titulo: 'Primera tarea',
    descripcion: 'Esta es la primera tarea de prueba',
    autor: 'Armando P. Tamayo',
    creado: new Date(),
    fin: new Date('2021-08-31')
  },
  {
    titulo: 'Segunda tarea',
    descripcion: 'Esta es la segunda tarea de prueba',
    autor: 'Armando P. Tamayo',
    creado: new Date(),
    fin: new Date('2021-08-31')
  },
  {
    titulo: 'Tercera tarea',
    descripcion: 'Esta es la tercera tarea de prueba',
    autor: 'Armando P. Tamayo',
    creado: new Date(),
    fin: new Date('2021-08-31')
  },
];
