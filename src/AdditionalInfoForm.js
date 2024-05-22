import React from 'react';

function AdditionalInfoForm({ formData, onChange, onPageChange }) {
  return (
    <div className="form-container">
      <h2>Additional Information</h2>
      <form>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={onChange} />
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={onChange} />
        </label>
        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={onChange} />
        </label>
        <label>
          Zip Code:
          <input type="text" name="zipCode" value={formData.zipCode} onChange={onChange} />
        </label>
        <label>
          Country:
          <input type="text" name="country" value={formData.country} onChange={onChange} />
        </label>
        <div className="form-buttons">
          <button type="button" onClick={() => onPageChange(1)}>Previous</button>
        </div>
      </form>
    </div>
  );
}

export default AdditionalInfoForm;
