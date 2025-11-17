// constraint : strict rules deya

type Student = {
  id: number;
  name: string;
  dateOfBirth: string;
};

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 243,
  name: "Mezba",
  hasPan: true,
};
const student2 = {
  id: 253,
  name: "Jankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student1);
