import '../assets/styles/index.css';
import '../index.css';
import React, { useState, useEffect } from 'react';

function App() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
    return (
        <div>
            <h1>Today</h1>
            <button>
                <svg width="20" height="20">
                    <use xlinkHref="#add-icon" />
                </svg>
            </button>
        </div>
    )
}

export default App