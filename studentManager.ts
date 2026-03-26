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
  
  deleteStudent(id: number): void {
  const exists = this.students.some((s) => s.id === id);
 
  if (!exists) {
    console.log(" Student not found");
    return;
  }
 
  this.students = this.students.filter((s) => s.id !== id);
  console.log(`Student with ID ${id} deleted`);
}
}