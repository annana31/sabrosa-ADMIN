import React, { useState } from 'react';
import '../styles/AddEmployee.css';

function AddEmployee() {
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  // Function to calculate age from birthdate
  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // If the birthday field is updated, calculate age automatically
    if (name === 'birthday') {
      const age = calculateAge(value);
      setFormData({ ...formData, age }); // Update the age field
    }
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
    <div className="add-employee">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="profile-image">
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" />
          ) : (
            <div className="placeholder">👤</div>
          )}
          <label htmlFor="uploadPhoto">Upload Photo</label>
          <input type="file" id="uploadPhoto" name="profileImage" onChange={handleImageUpload} />
        </div>

        <div className="input-group">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required onChange={handleChange} />
        </div>

        <div className="input-group">
          <label htmlFor="middleName">Middle Name:</label>
          <input type="text" id="middleName" name="middleName" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required onChange={handleChange} />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required onChange={handleChange} />
        </div>

        <div className="input-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required onChange={handleChange} placeholder="(XXX) XXX-XXXX" />
        </div>

        <div className="input-group">
          <label htmlFor="jobPosition">Job Position:</label>
          <input type="text" id="jobPosition" name="jobPosition" required onChange={handleChange} />
        </div>

        <div className="input-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label htmlFor="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age || ''} readOnly />
        </div>

        <div className="input-group">
          <label htmlFor="employeeId">Employee ID:</label>
          <input type="text" id="employeeId" name="employeeId" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label htmlFor="employeeType">Employee Type:</label>
          <select id="employeeType" name="employeeType" onChange={handleChange}>
            <option value="">- Select -</option>
            <option value="Employee">Employee</option>
            <option value="Contractor">Contractor</option>
            <option value="Intern">Intern</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="employeeStatus">Employee Status:</label>
          <select id="employeeStatus" name="employeeStatus" onChange={handleChange}>
            <option value="">- Select -</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="dateOfHire">Date of Hire:</label>
          <input type="date" id="dateOfHire" name="dateOfHire" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label htmlFor="employeeEndDate">End Date (if any):</label>
          <input type="date" id="employeeEndDate" name="employeeEndDate" onChange={handleChange} />
        </div>

        <button type="submit" className="create-button">Create Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
