import React, { useState } from 'react';
import '../styles/AddEmployee.css';

function AddEmployee() {
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'birthday') {
      const birthDate = new Date(value);
      const today = new Date();
      const calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        setAge(calculatedAge - 1);
      } else {
        setAge(calculatedAge);
      }
    }

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profileImage: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here
  };

  return (
    <div className="add-employee-container">
      <h2>Create Staff</h2>
      <form className="add-employee-form" onSubmit={handleSubmit}>
        <div className="left-panel">
          <div className="photo-upload">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="avatar-img" />
            ) : (
              <div className="avatar-placeholder">👤</div>
            )}
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>

          <input name="firstName" placeholder="* First Name" required onChange={handleChange} />
          <input name="lastName" placeholder="* Last Name" required onChange={handleChange} />
          <input name="phone" placeholder="* Phone Number" required onChange={handleChange} />
          <input name="email" type="email" placeholder="* Email Address" required onChange={handleChange} />
          <input name="designation" placeholder="* Designation" required onChange={handleChange} />
          <input name="address" placeholder="* Address" required onChange={handleChange} />

          <select name="city" required onChange={handleChange}>
            <option value="">* Select City</option>
            <option value="Cagayan de Oro">Cagayan de Oro</option>
            <option value="Manila">Manila</option>
          </select>

          <select name="state" required onChange={handleChange}>
            <option value="">* Select State</option>
            <option value="Misamis Oriental">Misamis Oriental</option>
            <option value="NCR">NCR</option>
          </select>
        </div>

        <div className="right-panel">
          <div>
            <h3>Additional Info</h3>
            <input
              type="date"
              name="birthday"
              placeholder="* Birthday"
              required
              onChange={handleChange}
            />
            {age && <input type="text" value={`Age: ${age}`} readOnly />}
            <input name="role" placeholder="* Employee Role" required onChange={handleChange} />

            <select name="jobType" required onChange={handleChange}>
              <option value="">* Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>

          <button type="submit" className="save-btn">Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
