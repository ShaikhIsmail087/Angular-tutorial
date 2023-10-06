import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  today=Date();
  title = 'Reusable Component';
  data='x';
  data1=10;
  name='peter';
  name1:any;
  show=false
  color='blue';
  bgColor="yellow"
  users=['Anil','Bhaskar','Salam','Raheem'];
  userData:any={};
  isDisplay=true;
  list:any[]=[];

  loginUser()
  {
    console.warn(this.loginForm.value)
  }

  loginForm=new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })

  get user()
  {
    return this.loginForm.get('user')
  }

  get password()
  {
    return this.loginForm.get('password')
  }

  userLogin(item:any)
  {
    console.warn(item);
  }

  userDetails=[{name:'Ismail Shaikh',email:'ismail@123'},{name:'Rashid ali',email:'ali@123'},{name:'Salim ahemed',email:'salim@123'},];
  updateChild()
  {
    this.data1=Math.floor(Math.random()*10);
  }

  getVal(item:any)
  {
    console.warn(item);
  }

  updateData(item:string)
  {
    console.warn(item);
    this.data=item;
  }

  removeTask(id:number)
  {
    console.warn(id);
    this.list=this.list.filter(item=> item.id!=id);
  }

  addTask(item:string)
  {
    this.list.push({id:this.list.length,name:item});
      console.warn(this.list);
  }
  
  toggle() {
    this.isDisplay=!this.isDisplay;
    }

  updateColor()
  {
    this.color="green";
  }
  getValue()
  {
    return 'get function data';
  }
  getName(name:string)
  {
    alert(name);
  }
  getData(data:NgForm)
  {
    console.warn(data);
    this.userData=data;
  }
  count=0;
  counter(type:string)
  {
    type==='plus' ?this.count++:this.count--;
  }
}
