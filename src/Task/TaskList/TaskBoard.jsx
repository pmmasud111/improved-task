import React, { useState } from "react";
import Action from "./Action/Action";
import { ModalContext } from "./Context/TaskContext";
import Task from "./Task/Task";
import TaskHeader from "./Task/TaskHeader";

export default function TaskBoard() {
  const [showModal, setShowModal] = useState(false);
  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <Action />
          <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
              <TaskHeader />
              <Task />
            </table>
          </div>
        </div>
      </div>
    </ModalContext.Provider>
  );
}
