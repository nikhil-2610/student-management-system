import { StudentManager } from "./studentManager";

const manager = new StudentManager();

// Your work
manager.addStudent({ id: 1, name: "Sai", age: 20, course: "CS" });
manager.addStudent({ id: 2, name: "Anil", age: 21, course: "IT" });

manager.viewStudents();