import { Table } from "@/components";

export default function Home() {

  const handleClick = async () => {
    await fetch("http://localhost:3001/students/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "Hoshim",
        lastName: "Mirzayev",
        birthDate: "11-11-2011",
        classId: 2
      }),
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Age",
      dataIndex: "age"
    }
  ];

  const users = [
    {
      name: "Ahror",
      age: 20
    },
    {
      name: "Abror",
      age: 23
    },
    {
      name: "Asror",
      age: 30
    }
  ]

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={handleClick}>Change User</button>

      <Table columns={columns} dataSrc={users} />
    </>
  );
}

// ToDo app -
// Users CRUD -
// Dashboard to manage School +

/*
 model student 
{
  id: 0,
  firstName: "",
  lastName: "",
  birthDate: "",
  classId: "",
}

model teacher
{
  id: 0,
  firstName: ""
  lastName: "",
  classes: [2, 4, 6],
  birthDate: ""
}

model class 
{
  id: 0,
  name: "",
  studentCount: 21,
  teacherId: 2,
}

model school
{
  id: 0,
  name: "",
  location: "",
  overallStudentCount: 123,
  overallStaffCount: 21,
  overallClassCount: 2,
  about: "",
  phoneNumber: "+998952343378",
}
*/