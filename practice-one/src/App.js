import { fetchTasks, createTask, updateTask, deleteTask } from './services/TaskService';
import React, { useState, useEffect } from 'react';
import TaskCounter from './components/TaskCounter/TaskCounter';
import AddTaskForm from './components/AddTaskForm/AddTaskForm'
import ErrorComponent from './components/Error/ErrorComponent';
import AddIcon from './components/common/Icon/AddIcon';
import TaskList from './components/TaskList/TaskList';
import Button from './components/common/Button';
import Title from './components/Title';
import './components/index.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState(null); // Add state for error handling

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const { data } = await fetchTasks();
                setTasks(data);
            } catch (error) {
                console.error('Error loading tasks:', error);
                setError(error); // If there is an error, update status error
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

    return (
        <div className="App">
            <Title />
            {error && <ErrorComponent />} {/* Display ErrorComponent when there is an error */}
            <TaskCounter count={tasks.length} />
            <TaskList tasks={tasks} editTask={editTask} deleteTask={completeTask} />
            {!showForm && (
                <Button className='btn btn-open-form' onClick={toggleForm}
                    icon={<AddIcon />}
                    label="Add task"
                />
            )}
            {showForm && <AddTaskForm addTask={addTask} toggleForm={toggleForm} />}
        </div>
    );
}

export default App;
