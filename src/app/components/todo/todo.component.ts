import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList: Todo[];

  constructor(private _todoService: TodoService) {
    this.todoList = _todoService.getTodos();
  }

  ngOnInit(): void {
  }

  editarTodo(id: number, todo: Todo) { }

  borrarTodo(id: number) {
    this._todoService.deleteTodo(id);
  }
}
