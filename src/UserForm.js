import React from 'react';

function UserForm({ formData, onChange, onPageChange }) {
  return (
    <div className="form-container">
      <h2>User Information</h2>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={onChange} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={onChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={onChange} />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={onChange} />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={onChange} />
        </label>
        <div className="form-buttons">
          <button type="button" onClick={() => alert('Save')}>Save</button>
          <button type="button" onClick={() => alert('Delete')}>Delete</button>
          <button type="button" onClick={() => alert('Update')}>Update</button>
          <button type="button" onClick={() => onPageChange(2)}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
