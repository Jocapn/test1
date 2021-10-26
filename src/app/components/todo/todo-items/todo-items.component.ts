import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {


  @Input() todoItems : ITodo[] = [];
  @Input() fiveTodos : ITodo[] = [];
  public currentLocation = window.location.pathname;
  constructor() { }

  ngOnInit(): void {
  }

}
