import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getGradeFromScore = gql`
  query getGradeFromScore($score: Float!) {
    getGradeFromScore(score: $score) {
      grade
    }
  }
`;

const getStudent = gql`
query getStudent($id: String!) {
  student(studentId: $id){
		studentId
		name
		surName
		gpa
  }
}
`;

const getStudents = gql`
query getStudents($id: String!) {
  students(studentId: $id){
		studentId
		name
		surName
		gpa
  }
}
`;

@Injectable()
export class GradeService {
  constructor(private apollo: Apollo) {}

  getGradeFromScore(score: Number) {
    return this.apollo.watchQuery<any>({
      query: getGradeFromScore,
      variables: {
        score: score
      }
    }).valueChanges;
  }
  getStudent(id: String) {
    return this.apollo.watchQuery<any>({
      query: getStudent,
      variables: {
        id: id
      }
    }).valueChanges;
  }
  getStudents(id: String) {
    return this.apollo.watchQuery<any>({
      query: getStudents,
      variables: {
        id: id
      }
    }).valueChanges;
  }
}
