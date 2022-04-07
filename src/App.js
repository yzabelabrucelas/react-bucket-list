import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Mar 4 at 5PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Mar 5 at 7PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Mar 8 at 11PM",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    console.log("delete", id);
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
