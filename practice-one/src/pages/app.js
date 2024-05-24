import React, { useState, useEffect } from 'react';
import AddTaskForm from '../components/addTaskForm/addTaskForm';
import TaskCounter from '../components/taskCounter/taskCounter';
import TaskList from '../components/taskList/taskList';
import '../components/index.css'; 

function App() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (name, description) => {
        const newTask = { id: Date.now(), name, description };
        setTasks([...tasks, newTask]);
        setShowForm(false);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="App">
            <h1>Today</h1>
            <TaskCounter count={tasks.length} />
            <TaskList tasks={tasks} />
            {!showForm && (
                <button className='btn btnOpenForm' onClick={toggleForm}>
                    <span className="iconAdd" aria-hidden="true">
                        <svg width="13" height="13">
                            <path fill="currentColor" fillRule="evenodd"
                                d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path>
                        </svg>
                    </span>
                    Add task
                </button>
            )}
            {showForm && <AddTaskForm addTask={addTask} toggleForm={toggleForm} />}
        </div>
    )
}

export default App;
