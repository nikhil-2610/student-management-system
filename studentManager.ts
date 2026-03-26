import { Student } from "./student";

export class StudentManager {

  private students: Student[] = [];

  // Add student
  addStudent(student: Student): void {
    this.students.push(student);
    console.log("Student added:", student);
  }

  // View all students
  viewStudents(): void {
    console.log("\nStudent List:");
    this.students.forEach((s) => {
      console.log(`${s.id} - ${s.name}, Age: ${s.age}, Course: ${s.course}`);
    });
  }
}