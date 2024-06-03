import React, { useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from './services/TaskService';
import TaskCounterLogic from './components/TaskCounter/TaskCounterLogic';
import AddTaskFormLogic from './components/AddTaskForm/AddTaskFormLogic';
import TaskList from './components/TaskList/TaskList';
import Button from './components/common/Button';
import './components/index.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const loadTasks = async () => {
            const { data, error } = await fetchTasks();
            if (error) {
                console.error('Error loading tasks:', error);
            } else {
                setTasks(data);
            }
        };

        loadTasks();
    }, []);

    const addTask = async (name, description) => {
        const { data, error } = await createTask({ name, description });
        if (error) {
            console.error('Error adding task:', error);
        } else {
            setTasks([...tasks, data]);
            setShowForm(false);
        }
    };

    const editTask = async (id, name, description) => {
        const { data, error } = await updateTask(id, { name, description });
        if (error) {
            console.error('Error editing task:', error);
        } else {
            setTasks(tasks.map(task => (task.id === id ? data : task)));
            setShowForm(false);
        }
    };

    const completeTask = async (id) => {
        const { error } = await deleteTask(id);
        if (error) {
            console.error('Error deleting task:', error);
        } else {
            setTasks(tasks.filter(task => task.id !== id));
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    function Title() {
        return (
            <h1>Today</h1>
        )
    }
    
    return (
        <div className="App">
            <Title />
            <TaskCounterLogic count={tasks.length} />
            <TaskList tasks={tasks} editTask={editTask} deleteTask={completeTask} />
            {!showForm && (
                <Button className='btn btn-open-form' onClick={toggleForm}>
                    <span className="icon-add" aria-hidden="true">
                        <svg width="13" height="13">
                            <path fill="currentColor" fillRule="evenodd"
                                d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path>
                        </svg>
                    </span>
                    Add task
                </Button>
            )}
            {showForm && <AddTaskFormLogic addTask={addTask} toggleForm={toggleForm} />}
        </div>
    );
}

export default App;
