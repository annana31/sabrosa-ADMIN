import React, { useState, useEffect } from 'react';
import '../styles/AdminProfile.css';
import { Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';

function AdminProfile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    age: 25,
    address: "123 Street, City",
    birthdate: "2000-01-01",
    phone: "+63 900 123 4567",
    nationality: "Filipino",
    gender: "Male",
    maritalStatus: "Single",
    occupation: "Student",
    religion: "Catholic",
    languages: "English, Filipino"
  });

  const [bio, setBio] = useState(
    "I am a forward-thinking individual with a passion for technology, education, and meaningful human connection. " +
    "Grounded in my Filipino roots, I value community and continuous growth. Whether managing academic challenges " +
    "or collaborating on creative endeavors, I always bring empathy and focus. With a heart set on progress and a mind " +
    "open to learning, I embrace every opportunity to improve both myself and the world around me."
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isBioEditing, setIsBioEditing] = useState(false);

  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const ageDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    const age = calculateAge(profile.birthdate);
    setProfile(prevProfile => ({ ...prevProfile, age }));
  }, [profile.birthdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Admin Panel</h3>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/EmployeeDetails">Employee Details</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="profile-wrapper">
        <div className="main-content">
          {/* Left Column */}
          <div className="left-column">
            <div className="profile-header">
              <img
                src="/images/profile.jpeg"
                alt="Profile"
                className="profile-pic"
              />
              <div className="profile-info">
                <h2>{profile.name}</h2>
                <p>{profile.email}</p>
              </div>
            </div>

            <div className="profile-container">
              <div className="profile-details">
                <h3>Personal Details</h3>
                <div className="detail">
                  <span className="detail-label">Age:</span>
                  <span className="detail-value">{profile.age}</span>
                </div>
                <div className="detail">
                  <span className="detail-label">Address:</span>
                  {isEditing ? (
                    <input type="text" name="address" value={profile.address} onChange={handleChange} />
                  ) : (
                    <span className="detail-value">{profile.address}</span>
                  )}
                </div>
                <div className="detail">
                  <span className="detail-label">Birthdate:</span>
                  {isEditing ? (
                    <input type="date" name="birthdate" value={profile.birthdate} onChange={handleChange} />
                  ) : (
                    <span className="detail-value">{profile.birthdate}</span>
                  )}
                </div>
                <div className="detail">
                  <span className="detail-label">Phone:</span>
                  {isEditing ? (
                    <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
                  ) : (
                    <span className="detail-value">{profile.phone}</span>
                  )}
                </div>
                <div className="detail">
                  <span className="detail-label">Nationality:</span>
                  {isEditing ? (
                    <input type="text" name="nationality" value={profile.nationality} onChange={handleChange} />
                  ) : (
                    <span className="detail-value">{profile.nationality}</span>
                  )}
                </div>
                <div className="detail">
                  <span className="detail-label">Gender:</span>
                  {isEditing ? (
                    <input type="text" name="gender" value={profile.gender} onChange={handleChange} />
                  ) : (
                    <span className="detail-value">{profile.gender}</span>
                  )}
                </div>
                <div className="detail">
                  <span className="detail-label">Marital Status:</span>
                  {isEditing ? (
                    <input type="text" name="maritalStatus" value={profile.maritalStatus} onChange={handleChange} />
                  ) : (
                    <span className="detail-value">{profile.maritalStatus}</span>
                  )}
                </div>
                <div className="detail">
                  <span className="detail-label">Occupation:</span>
                  {isEditing ? (
                    <input type="text" name="occupation" value={profile.occupation} onChange={handleChange} />
                  ) : (
                    <span className="detail-value">{profile.occupation}</span>
                  )}
                </div>
                <div className="detail">
                  <span className="detail-label">Religion:</span>
                  {isEditing ? (
                    <input type="text" name="religion" value={profile.religion} onChange={handleChange} />
                  ) : (
                    <span className="detail-value">{profile.religion}</span>
                  )}
                </div>
                <div className="detail">
                  <span className="detail-label">Languages:</span>
                  {isEditing ? (
                    <input type="text" name="languages" value={profile.languages} onChange={handleChange} />
                  ) : (
                    <span className="detail-value">{profile.languages}</span>
                  )}
                </div>
              </div>
            </div>

            <button className="edit-details-btn" onClick={toggleEdit}>
              {isEditing ? 'Save Details' : 'Edit Details'}
            </button>
          </div>

          <div className="right-column">
          <div className="bio-box">
  <div className="bio-header" style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
    <h3 style={{ fontSize: "1.125rem", fontWeight: "600", margin: 0 }}>Profile Bio</h3>
    <Pencil
      size={16}
      style={{ cursor: "pointer", color: "#555" }}
      onClick={() => setIsBioEditing(!isBioEditing)}
      title="Edit Bio"
    />
  </div>

  {isBioEditing ? (
    <div>
      <textarea
  className="bio-textarea"
  rows={5}
  value={bio}
  onChange={(e) => setBio(e.target.value)}
  style={{
    height: "100px", // fixed height
    width: "100%",
    resize: "none", // optional
    overflowY: "auto",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    fontFamily: "inherit",
    boxSizing: "border-box"
  }}
/>

      <button
        onClick={() => setIsBioEditing(false)}
        style={{
          backgroundColor: "#3B82F6",
          color: "white",
          padding: "6px 14px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Save
      </button>
    </div>
  ) : (
    <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#333" }}>{bio}</p>
  )}
</div>

            <div className="contact-box">
              <h3>Contact Me</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://x.com/" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
