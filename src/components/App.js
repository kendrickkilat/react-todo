import React from 'react'
import '../App.css'
import TaskForm from './task-form';
import TaskList from './task-list';
import TaskListContextProvider from '../context/task-list-context';
import Header from './header';

const App = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
}

export default App
