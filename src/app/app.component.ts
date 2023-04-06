import {Component, OnInit} from '@angular/core';
 interface Exam {
   field: string;
   value: any;
 }
interface  ExamList {
  date: string;
  exams: Exam[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   examList: ExamList[] = [
     {
       date: '2023-03-10',
       exams: [
         {
           field: "Hemoglobina Glicada",
           value: "5,5%"
         },
         {
           field: "Colesterol Total",
           value: "180 mg/dL"
         },
         {
           field: "Creatinina",
           value: "0,9 mg/dL"
         },
         {
           field: "Plaquetas",
           value: "250.000 /mm³"
         },
         {
           field: "Teste",
           value: "0,9 mg/dL"
         }
       ]
     },
     {
       date: '2022-12-01',
       exams: [
         {
           field: "Glicemia em Jejum",
           value: "95 mg/dL"
         },
         {
           field: "Triglicerídeos",
           value: "100 mg/dL"
         },
         {
           field: "HDL",
           value: "55 mg/dL"
         },
         {
           field: "LDL",
           value: "120 mg/dL"
         }
       ]
     },
     {
       date: '2022-08-15',
       exams: [
         {
           field: "Hemácias",
           value: "4.000.000 /mm³"
         },
         {
           field: "Leucócitos",
           value: "10.000 /mm³"
         },
         {
           field: "Plaquetas",
           value: "250.000 /mm³"
         }
       ]
     }
   ];
    examFields = [""];
  constructor(){}

  ngOnInit(): void {
    this.examFields = this.examList.reduce((acc: string[], curr) => {
      curr.exams.forEach(e => {
        if (!acc.includes(e.field)) {
          acc.push(e.field);
        }
      });
      return acc;
    }, []);


  }

  getValueByFieldAndDate(field: string, date: string): string {
    const examData = this.examList.find(e => e.date === date);
    if (examData) {
      const exam = examData.exams.find(e => e.field === field);
      if (exam) {
        return exam.value;
      }
    }
    return '-';
  }

}
