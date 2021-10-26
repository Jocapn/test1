import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ITodo {
  id?: number;
  title?: string;
  action?: string;
  date?: string | Date;
  desc?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private BASE_URL = 'https://my-json-server.typicode.com/nebojsazr/todo_service';

  constructor(private http: HttpClient) { }

  getTodo(): Observable<ITodo[]>  {
    return this.http.get<ITodo[]>(this.BASE_URL + '/todos').pipe(
      map(todos => {
        todos.map(elem => {
          elem.date = new Date(String(elem.date));
          return elem;
        });
        console.log('Todos nakon obrade', todos);
        return todos;
      })
    );
  }

}

