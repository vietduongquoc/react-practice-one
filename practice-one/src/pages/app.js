import React, { useState, useEffect } from 'react';
import AddTaskForm from '../components/AddTaskForm/AddTaskForm';
import TaskCounter from '../components/TaskCounter/TaskCounter';
import TaskList from '../components/TaskList/TaskList';
import '../components/index.css'; 
import { fetchTasks, createTask} from '../services/TaskService';




function App() {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTasks = async () => {
            try {
                const fetchedTasks = await fetchTasks();
                setTasks(fetchedTasks);
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
            } finally {
                setLoading(false);
            }
        };

        getTasks();
    }, []);

    const addTask = async (name, description) => {
        const newTask = { name, description };
        try {
            const createdTask = await createTask(newTask);
            setTasks([...tasks, createdTask]);
            setShowForm(false);
        } catch (error) {
            console.error('Failed to add task:', error);
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <h1>Today</h1>
            <TaskCounter count={tasks.length} />
            <TaskList tasks={tasks} />
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