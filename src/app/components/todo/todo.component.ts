import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

 public todos: ITodo[] = [];
 public fiveTodos: ITodo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    const sub: Subscription = this.todoService.getTodo().subscribe(
      todoResult => {
        console.log(todoResult);
        this.todos = todoResult;
        for(let i = 0; i <= 4; i++) {
          this.fiveTodos[i] = this.todos[i];
        }
      },
      err => {
        console.log(err);
      },
      () => {
        sub.unsubscribe();
      }
    );
  }
}
