const studentsFromLocalStorage = () => JSON.parse(localStorage.getItem("students")) || [];

const DAL = {
  addStudent: (student) => {
    localStorage.setItem("students", JSON.stringify([...studentsFromLocalStorage(), student]));
  },

  getStudents: () => studentsFromLocalStorage,

  sortStudentsByName: () => {
    const students = studentsFromLocalStorage();
    students.sort((a, b) => {
      if (a.username > b.username) return 1;
      if (a.username < b.username) return -1;
      return 0;
    });
    return students;
  },
};

export default DAL;
