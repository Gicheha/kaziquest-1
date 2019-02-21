import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/resources/header';
import AddJob from './components/employees/addjob';
import Dashboard from './components/employees/dashboard';

const App = (function App() {
  return (
    <div>
        <Route path="/addjob" component={AddJob} />
        <Route path="/dashboard" component={Dashboard} />
    </div>

  );
}) 
  

export default App;
