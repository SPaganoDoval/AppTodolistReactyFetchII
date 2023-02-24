import React, { useState } from "react";

import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import "./src/styles/index.css";

export const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={"tasks-manager" + (isDark? "-dark" : "")}>
      <div className="dark-mode">
        <button onClick={() => setIsDark(!isDark)}>
          <i className="fa-solid fa-circle-half-stroke"></i>
        </button>
      </div>
      <div className="container">
        <TaskForm />
        <TaskList />
      </div>
      <div className="footer">
           Sonia
        </div>
    </div>
  );
};
