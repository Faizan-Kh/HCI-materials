import React, { useState } from 'react';
import './App.css';
import UserForm from './UserForm';
import AdditionalInfoForm from './AdditionalInfoForm';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="status">
          <span>Time: {new Date().toLocaleTimeString()}</span>
          <span>Date: {new Date().toLocaleDateString()}</span>
          <span>Status: ONLINE</span>
        </div>
        <nav className="menu-bar">
          <button onClick={() => alert('Save')}>Save (Ctrl+S)</button>
          <button onClick={() => alert('Delete')}>Delete (Ctrl+D)</button>
          <button onClick={() => alert('Update')}>Update (Ctrl+U)</button>
          <button onClick={() => handlePageChange(2)}>Next Record (Ctrl+N)</button>
          <button onClick={() => handlePageChange(1)}>Previous Record (Ctrl+P)</button>
        </nav>
      </header>
      {currentPage === 1 ? (
        <UserForm formData={formData} onChange={handleInputChange} onPageChange={handlePageChange} />
      ) : (
        <AdditionalInfoForm formData={formData} onChange={handleInputChange} onPageChange={handlePageChange} />
      )}
    </div>
  );
}

export default App;
