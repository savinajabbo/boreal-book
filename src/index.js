import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Button from './components/Button';
import Title from './components/Title';
import SubmitForm from './components/SubmitForm';
import Submissions from './components/Submissions';
import { resetDB } from './utils/db';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [updateSubmissions, setUpdateSubmissions] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmission = () => {
    setUpdateSubmissions(true);
  };

  const handleResetDB = async () => {
    await resetDB();
    setUpdateSubmissions(true);
    alert('Database reset!');
  };

  useEffect(() => {
    if (updateSubmissions) {
      setUpdateSubmissions(false);
    }
  }, [updateSubmissions]);

  return (
    <div className="container">
      <Title text="welcome to our journey" />
      <Button onClick={handleButtonClick}>make a memory</Button>
      <Button onClick={handleResetDB} style={{ marginLeft: '10px' }}>reset database</Button>
      {showForm && <SubmitForm onSubmission={handleSubmission} />}
      <h2>Submissions</h2>
      <Submissions key={updateSubmissions} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();