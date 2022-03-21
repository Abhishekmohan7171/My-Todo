import { Component,OnInit } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo';

  inputTodo:string | undefined;

  todos:any;

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
    this.inputTodo = '';
    // console.log(this.inputTodo)
  }
  
// delte todo
  deleteTodo (id: number){
    this.todos = this.todos.filter((v:any,i:any) => i !== id);
  }


}
