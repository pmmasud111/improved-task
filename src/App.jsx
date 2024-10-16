import React, { useState } from "react";
import Page from "./Task/Page";
import { TaskContext } from "./Task/TaskList/Context/TaskContext";

const defaultTasks = {
  id: crypto.randomUUID(),
  title: "Learn React",
  description:
    "I want to learn React such then I can treat it like my slave and make it do whatever I want to do",
  tags: ["web", "react", "js", "ts"],
  priority: "High",
  isFavorite: true,
};

export default function App() {
  const [tasks, setTasks] = useState([defaultTasks]);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <Page />
    </TaskContext.Provider>
  );
}
