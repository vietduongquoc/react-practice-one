import { fetchTasks, createTask, updateTask, deleteTask } from './services/TaskService';
import React, { useState, useEffect } from 'react';
import TaskCounter from './components/TaskCounter/TaskCounter';
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import AddIcon from './components/common/Icon/AddIcon';
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
            <TaskCounter count={tasks.length} />
            <TaskList tasks={tasks} editTask={editTask} deleteTask={completeTask} />
            {!showForm && (
                <Button className='btn btn-open-form' onClick={toggleForm}>
                    <AddIcon />
                     Add task
                </Button>
            )}
            {showForm && <AddTaskForm addTask={addTask} toggleForm={toggleForm} />}
        </div>
    );
}

export default App;
