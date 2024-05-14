import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { NgForm } from '@angular/forms';
import{StudentCrudService} from '../../../studentService/student-crud.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  constructor(private std_http:StudentCrudService, private router:Router, private exm_http:StudentCrudService){}
  stdList:any = [];
  display = false;
  index:any;
  formm=true;
  option=false;
  exam=false
  examupdate=false
  fromClose=false

  ngOnInit(): void { }
  fetchDetails(form:NgForm)
  {
  this.std_http.list().subscribe((response)=>{
  this.stdList = response;
  let indexval = this.stdList.findIndex((x:any) => x.Studentcode ===form.value.studcode && x.Password===form.value.pass);
  if(indexval != -1)
  {
  
  this.display = true;
  this.index = indexval;
  this.formm= false;
  this.option=true
  this.examupdate=true
  }
  else
  {
  this.display = false;
  
  alert("Student Details entered does not exist");
  }
  form.reset();
  },(error=>{
  }));
  }




  sentForm(){
this.exam=true
this.examupdate=false
this.fromClose=true

  }
  closeForm(){
    this.examupdate=true
    this.fromClose=false
    this.exam=false
  }
  sform=new FormGroup({
    fname:new FormControl("",[Validators.required,Validators.maxLength(20)]),
    
    course:new FormControl("",[Validators.required,Validators.maxLength(15)]),
    scode:new FormControl("",[Validators.required,Validators.maxLength(15)]),
    date:new FormControl("",[Validators.required,]),
    time:new FormControl("",[Validators.required])
    })
    sdata(){
      console.log(this.sform.value);
      let click=document.getElementById('b1');
     click?.click();
      
    }
    get fname(){
      return this.sform.get('fname')
    }
   
    get course(){
      return this.sform.get('course')
    }
    get scode(){
      return this.sform.get('scode')
    }
    get date(){
      return this.sform.get('date')
    }
    get time(){
      return this.sform.get('time')
    }
 
    
    
    /*-----------------------------crud part -----------------------------*/
    

    Add(data:any) 
    { 
    let std_data =
    {Name:data.fname,Course:data.course,Studentcode:data.scode,Examdate:data.date,Examtime:data.time} 
    this.exm_http.create(std_data).subscribe((response)=>
    { 
    },(error=>{ })); 
    let reset=document.getElementById("b1") 
    reset?.click(); 
    
    } 
}
