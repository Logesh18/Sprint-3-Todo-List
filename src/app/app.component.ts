import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  task="";
  tid="";
  show=false;
  todos=[
    {
      id:1,
      task:"Go to Gym at 8:00 a.m."
    },
    {
      id:2,
      task:"Attend the meet at 10:00 a.m."
    },
    {
      id:3,
      task:"Attend the Canadian client at 10:30 a.m."
    },
    {
      id:4,
      task:"Attend the party at 6 p.m."
    }
  ]
  addTodo(){
     alert("Task added in the Todo List")
     console.log(this.task);
     this.show=true;
     this.todos.push({id:this.todos.length+1,task:this.task});
     this.task='';
  }
  hide(){
    this.show=false;
  }
  remove(todo:any) {
    alert(this.todos[Number(todo.id)].task+" has been completed");
    this.todos.splice(Number(todo.id)-1, 1);
    for(let i=0;i<this.todos.length;i++){
       this.todos[i].id=i+1;
    }
    console.log(this.todos);
  }

}
