import { useState } from "react";
import { ListaTareas } from "./ListaTareas";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoApp = () => {
  const [newTask, setNewtask] = useState<string>("");
  const [listaTareas, setListaTareas] = useLocalStorage<string[]>("listaTareas", []);
  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setListaTareas((tareasAnteriores) => [...tareasAnteriores, newTask]);
    setNewtask("");
  };
  const handleBorrarTarea = (index: number) => {
    setListaTareas((tareas) => tareas.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewtask(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
    </div>
  );
};
