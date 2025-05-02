import React, { useState } from 'react';
import '../styles/AddEmployee.css';

function AddEmployee() {
    const [formData, setFormData] = useState({});
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      // Handle form submission logic here
    };
  
    return (
      <div className="add-employee-container">
        <h2>Create Staff</h2>
        <form className="add-employee-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="left-panel">
              <div className="photo-upload">
                <div className="avatar-placeholder">👤</div>
                <button type="button" className="upload-btn">+</button>
              </div>
              <input name="firstName" placeholder="Enter first name" onChange={handleChange} />
              <input name="lastName" placeholder="Enter last name" onChange={handleChange} />
              <input name="phone" placeholder="Enter phone number" onChange={handleChange} />
              <input name="email" placeholder="Enter email address" onChange={handleChange} />
              <input name="designation" placeholder="Enter designation" onChange={handleChange} />
              <input name="address" placeholder="Enter address" onChange={handleChange} />
              <select name="city" onChange={handleChange}>
                <option value="">Select City</option>
                <option value="Cagayan de Oro">Cagayan de Oro</option>
                <option value="Manila">Manila</option>
              </select>
              <select name="state" onChange={handleChange}>
                <option value="">Select State</option>
                <option value="Misamis Oriental">Misamis Oriental</option>
                <option value="NCR">NCR</option>
              </select>
            </div>
  
            <div className="right-panel">
              <div className="education-section">
                <h3>Education</h3>
                <input name="degree" placeholder="Enter degree program" onChange={handleChange} />
                <input name="institute" placeholder="Enter institute" onChange={handleChange} />
              </div>
  
              <div className="experience-section">
                <h3>Experience</h3>
                <input name="position" placeholder="Enter position" onChange={handleChange} />
                <input name="company" placeholder="Enter company name" onChange={handleChange} />
                <select name="jobType" onChange={handleChange}>
                  <option value="">Select job type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                </select>
                <input type="date" name="startDate" onChange={handleChange} />
                <input type="date" name="endDate" onChange={handleChange} />
                <label>
                  <input type="checkbox" name="currentlyWorking" onChange={handleChange} /> I'm currently working here
                </label>
                <textarea name="experienceDescription" placeholder="Experience description" onChange={handleChange}></textarea>
                <button type="button" className="add-experience">+ Add Experience</button>
              </div>
  
              <div className="skills-section">
                <h3>Skills</h3>
                <input name="skills" placeholder="Add skill" onChange={handleChange} />
              </div>
  
              <button type="submit" className="save-btn">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
  export default AddEmployee;
