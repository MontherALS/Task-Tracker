import { useState } from "react";
import Header from "./Comp/Header";
import UserInput from "./Comp/UserInput";
import UserDisplay from "./Comp/UserDisplay";
import "./App.css";

function App() {
  const [data, setData] = useState({
    title: "",
    description: "",
    date: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  }
  //!for displaying data
  const [isValid, setIsValid] = useState(false);
  const [tasks, setTasks] = useState([]);

  function handleValidationClick() {
    const valid =
      data.title.trim() !== "" &&
      data.description.trim() !== "" &&
      data.date.trim() !== "";
    if (valid) {
      setTasks((prev) => [...prev, data]);
      setData({ title: "", description: "", date: "" });
    }

    setIsValid(valid);
  }
  function handleDelete(index) {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  }
  return (
    <>
      <Header />
      <main className="flex flex-col items-center mt-10 bg-ur ">
        <UserInput
          onChangeing={handleChange}
          clickCheack={handleValidationClick}
          data={data}
        />
        <UserDisplay onPress={isValid} tasks={tasks} onDelete={handleDelete} />
      </main>
    </>
  );
}

export default App;
