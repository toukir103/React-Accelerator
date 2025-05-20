import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
    const defaultTask={
        'id': crypto.randomUUID(),
        'title':"Learn React",
        'discription': "lorem ami ai kaj korboi keu amake atkate parbe na",
        "tags": ["web","react","js"],
        "priority":"High",
        "isFavorite":true
    }
    const [tasks,setTasks]=useState([defaultTask]);
    const [showAddModal,setShowAddModal]=useState(false);
    const [taskToUpdate,setTaskToUpdate]=useState(null);

    function handleAddTask (newTask , isAdd){
     if(isAdd){
          setTasks([...tasks,newTask]);
     }else{
      setTasks(
        tasks.map((task)=>{
          if(task.id ===newTask.id){
            return newTask;
          }
          return task;
        })
      )
     }
    
      setShowAddModal(false);

    }
    function handleEditTask(task){
      setTaskToUpdate(task);
      showAddModal(true);
    }
  return (
    <section className="mb-20" id="tasks">
      {
        showAddModal && <AddTaskModal onSave={handleAddTask} taskToUpdate={taskToUpdate}  />
      }

      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={()=> setShowAddModal(true)} />
          <TaskList tasks={tasks} onEdit={handleEditTask} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
