import { Component,OnInit } from '@angular/core';
import { Todo } from './models/Todo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo';

  inputTodo:string | undefined;

  todos:any;

  constructor(private http: HttpClient){};

  ngOnInit():void {
    this.todos = [
      {
        content:"First Task",
        completed: true
      },
      {
        content:"Second Task",
        completed: false
      }
    ]
  }
//  add todo
  addTodo(){
    this.todos.push({
      content:this.inputTodo,
      completed:false
    })
    
    console.log(this.inputTodo)

    return this.http.post(
      'https://my-todo-77f78-default-rtdb.asia-southeast1.firebasedatabase.app/',
      this.inputTodo
      );


      this.inputTodo = '';

  }
  
// delte todo
  deleteTodo(id: number){
    this.todos = this.todos.filter((v:any,i:any) => i !== id);
  }


}
