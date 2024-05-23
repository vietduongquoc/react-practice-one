import React, { useState, useEffect } from 'react';
import AddTaskForm from '../components/addTaskForm/addTaskForm';

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
            <button className='btn' onClick={toggleForm}>
                <svg width="20" height="20">
                    <use xlinkHref="#add-icon" />
                </svg>
            </button>
            <span onClick={toggleForm}>
                Add task
            </span>
            {showForm && <AddTaskForm addTask={addTask} toggleForm={toggleForm} />}
        </div>
    )
}

export default App