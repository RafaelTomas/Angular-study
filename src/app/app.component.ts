import { Component, ViewChild, ElementRef, OnInit  } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'

interface examsPlus {
  exam: string;
  result: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'FormArray Example in Angular Reactive forms';
    GetExamsPlusPreConfigured: examsPlus[]  = [
      {
        exam: 'Força',
        result: ''
      },
      {
        exam: 'Foco',
        result: ''
      },
      {
        exam: 'Fé',
        result: ''
      }
  ]
  examsName: any[];
// @ts-ignore
  examForm: FormGroup;


  constructor(private fb:FormBuilder) {}

  ngOnInit(){
    this.examForm = this.fb.group({
      date: '',
      examsPlus: this.fb.array([]) ,
      examsConfig: this.fb.array([]) ,
    });
    this.GetExamsPlusPreConfigured.forEach(res => {
      this.examsConfig().push(this.fb.group({
        exam: [res.exam],
        result: ['']
      }));
    });
  }

  examsPlus() : FormArray {
    return this.examForm.get("examsPlus") as FormArray
  }

  examsConfig(): FormArray {
    return this.examForm.get('examsConfig') as FormArray
  }

  newExamPlus(): FormGroup {
   return this.fb.group({
      exam: '' ,
      result: '',
   })
  }

  addExams() {
    this.examsPlus().push(this.newExamPlus());
  }

  removeExamPlus(i:number) {
    this.examsPlus().removeAt(i);
  }

  onSubmit() {
    console.log(this.examForm.value);
    console.log(this.examsName)
  }


}


