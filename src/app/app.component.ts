import { Component, OnInit } from '@angular/core';
import { GradeService } from './service/grade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private gradeService: GradeService) {}
  studentId: String;
  students: any;
  showOutput: boolean;
  errorMsg: boolean;
  ngOnInit() {}

  onStudentSearch() {
    this.errorMsg = false;
    this.gradeService.getStudent(this.studentId).subscribe(res => {
      if (res.data.student == null) {
        this.errorMsg = true;
      } else {
        this.students = [];
        this.students.push(res.data.student);
        this.showOutput = true;
      }
    });
  }

  onStudentsSearch() {
    this.errorMsg = false;
    this.gradeService.getStudents(this.studentId).subscribe(res => {
      this.students = res.data.students;
      this.showOutput = true;
    });
  }
  onUpdate(){
    this.errorMsg = false;
  }
  totalGpa() {
    let total = 0;
    for (let i = 0; i < this.students.length; i++) {
      total += this.students[i].gpa;
    }
    return total / this.students.length;
  }
}
