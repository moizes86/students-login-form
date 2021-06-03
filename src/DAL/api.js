const setInitialStudentsInLocalStorage = () => {
  const initialStudents = [
    {
      username: "Art Vandelay",
      email: "importer@exporter.com",
      address: "4th st. Del Boca Vista",
      course: "Angular",
      gender: "Male",
    },
    {
      username: "Mickey Mouse",
      email: "haha@disney.com",
      address: "Orlando, Florida",
      course: "React",
      gender: "Other",
    },
  ];
  initialStudents.forEach((student) => DAL.addStudent(student));
};

const studentsFromLocalStorage = () => JSON.parse(localStorage.getItem("students")) || [];

const DAL = {
  addStudent: (student) => {
    localStorage.setItem("students", JSON.stringify([...studentsFromLocalStorage(), student]));
  },

  getStudents: () => studentsFromLocalStorage(),

  sortStudentsByName: () => {
    const students = studentsFromLocalStorage();
    students.sort((a, b) => {
      if (a.username.toLowerCase() > b.username.toLowerCase()) return 1;
      if (a.username.toLowerCase() < b.username.toLowerCase()) return -1;
      return 0;
    });
    return students;
  },
};

if (!JSON.parse(localStorage.getItem("students"))) {
  setInitialStudentsInLocalStorage();
}

export default DAL;
