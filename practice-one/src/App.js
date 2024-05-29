import React, { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import TaskCounter from './components/TaskCounter/TaskCounter';
import TaskList from './components/TaskList/TaskList';
import { fetchTasks, createTask, updateTask, deleteTask } from './services/TaskService';
import './components/index.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const tasks = await fetchTasks();
                setTasks(tasks);
            } catch (error) {
                console.error('Error loading tasks:', error);
            }
        };

        loadTasks();
    }, []);

    const addTask = async (name, description) => {
        try {
            const newTask = await createTask({ name, description });
            setTasks([...tasks, newTask]);
            setShowForm(false);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const editTask = async (id, name, description) => {
        try {
            const updatedTask = await updateTask(id, { name, description });
            setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
            setShowForm(false);
        } catch (error) {
            console.error('Error editing task:', error);
        }
    };

    const completeTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="App">
            <h1>Today</h1>
            <TaskCounter count={tasks.length} />
            <TaskList tasks={tasks} editTask={editTask} deleteTask={completeTask} />
            {!showForm && (
                <button className='btn btn-open-form' onClick={toggleForm}>
                    <span className="icon-add" aria-hidden="true">
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
    );
}

export default App;
