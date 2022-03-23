import { useState } from "react";
import { AddArea } from "./components/addArea";
import "./App.css";
import { ListAdd } from "./components/listAdd";

function App() {
    const [itemtask, setItem] = useState([]);

    function addTask(newTask) {
        let newList = [...itemtask];
        newList.push({
            id: itemtask.length + 1,
            task: newTask,
            done: false,
        });
        setItem(newList);
    }

    function handleTaskChange(id, done) {
        let newList = [...itemtask];
        for (let i in newList) {
            if (newList[i].id === id) {
                newList[i].done = done;
            }
        }
        setItem(newList);
    }

    return (
        <div className="App">
            <AddArea onEnter={addTask} />
            {itemtask.map((todo, index) => (
                <ListAdd
                    key={index}
                    item={todo}
                    onChange={handleTaskChange}
                    co={todo.done}
                />
            ))}
        </div>
    );
}

export default App;
