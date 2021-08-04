import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList: Todo[];
  todoForm: FormGroup;
  today: Date;

  constructor(private _todoService: TodoService) {
    this.todoList = [];
    this.today = new Date();
    this.todoForm = new FormGroup({
      'titulo': new FormControl('', [
        Validators.required
      ]),
      'descripcion': new FormControl('', [
        Validators.required
      ]),
      'autor': new FormControl('', [
        Validators.required
      ]),
      'creado': new FormControl(this.today, [
        Validators.required
      ]),
      'hasta': new FormControl(this.today, [
        Validators.required
      ]),
    });
  }

  ngOnInit(): void {
    this.readTodos();
  }

  createSubmit(): void {
    console.log(this.todoForm.value);
    this.createTodo(this.todoForm.value);
  }

  createTodo(todo: Todo): void {
    this._todoService.createTodo(todo);
  }

  readTodos(): void {
    this.todoList = this._todoService.getTodos();
  }

  readTodo(id: number): void { } // este por ahora no tiene ningun uso

  updateTodo(id: number, todo: Todo): void {
    this._todoService.editTodo(id, todo);
  }

  deleteTodo(id: number): void {
    this._todoService.deleteTodo(id);
  }
}
