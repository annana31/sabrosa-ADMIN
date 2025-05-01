import React, { useState } from 'react';

const staffList = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'HR Manager', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=1' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Software Engineer', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=2' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Product Manager', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=3' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', role: 'UX Designer', verified: false, active: false, avatar: 'https://i.pravatar.cc/40?img=4' },
  { id: 5, name: 'Ethan Hunt', email: 'ethan@example.com', role: 'QA Engineer', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=5' },
  { id: 6, name: 'Fiona Gallagher', email: 'fiona@example.com', role: 'Marketing Specialist', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=6' },
  { id: 7, name: 'George Wilson', email: 'george@example.com', role: 'Sales Executive', verified: false, active: false, avatar: 'https://i.pravatar.cc/40?img=7' },
  { id: 8, name: 'Helen Carter', email: 'helen@example.com', role: 'Customer Support', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=8' },
  { id: 9, name: 'Ian Curtis', email: 'ian@example.com', role: 'DevOps Engineer', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=9' },
  { id: 10, name: 'Jenna Lee', email: 'jenna@example.com', role: 'Financial Analyst', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=10' },
  { id: 11, name: 'Kathy Brown', email: 'kathy@example.com', role: 'Data Scientist', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=11' },
  { id: 12, name: 'Liam Neeson', email: 'liam@example.com', role: 'Network Engineer', verified: false, active: false, avatar: 'https://i.pravatar.cc/40?img=12' },
  { id: 13, name: 'Monica Geller', email: 'monica@example.com', role: 'Project Coordinator', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=13' },
  { id: 14, name: 'Nina Williams', email: 'nina@example.com', role: 'Web Developer', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=14' },
  { id: 15, name: 'Oscar Isaac', email: 'oscar@example.com', role: 'System Analyst', verified: false, active: false, avatar: 'https://i.pravatar.cc/40?img=15' },
  { id: 16, name: 'Paul Atreides', email: 'paul@example.com', role: 'Business Analyst', verified: true, active: true, avatar: 'https://i.pravatar.cc/40?img=16' },
];

export default function EmployeeDetails() {
  const [searchTerm, setSearchTerm] = useState('');
  const [staffData, setStaffData] = useState(staffList);
  const [editingStaffId, setEditingStaffId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    role: '',
    active: false,
  });

  const filteredStaff = staffData.filter((staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const downloadCSV = () => {
    const csv = [
      ['Username', 'Email', 'Status', 'Role'],
      ...filteredStaff.map(staff => [
        staff.name,
        staff.email,
        staff.active ? 'Active' : 'Inactive',
        staff.role,
      ]),
    ]
      .map(e => e.join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'users.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEditClick = (staff) => {
    setEditingStaffId(staff.id);
    setEditFormData({
      name: staff.name,
      email: staff.email,
      role: staff.role,
      active: staff.active,
    });
  };

  const handleCancelClick = () => {
    setEditingStaffId(null);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSaveClick = () => {
    setStaffData(prev =>
      prev.map(staff =>
        staff.id === editingStaffId ? { ...staff, ...editFormData } : staff
      )
    );
    setEditingStaffId(null);
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.topControls}>
        <div style={styles.leftControls}>
          <button style={styles.addButton} type="button">Add New Employee</button>
          <span style={styles.exportText} onClick={downloadCSV}>Export in CSV</span>
        </div>
        <div style={styles.rightControls}>
          <input
            type="text"
            placeholder="Search for a member..."
            style={styles.searchInput}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <h1 style={styles.title}>Employee List</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.tableHeader, minWidth: 230 }}>Employee</th>
            <th style={{ ...styles.tableHeader, minWidth: 220 }}>Email</th>
            <th style={{ ...styles.tableHeader, minWidth: 120 }}>Status</th>
            <th style={{ ...styles.tableHeader, minWidth: 230 }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((staff) => (
            <tr key={staff.id} style={styles.tableRow}>
              {editingStaffId === staff.id ? (
                <>
                  <td style={{ ...styles.tableCell, ...styles.flexCell, minWidth: 230 }}>
                    <img src={staff.avatar} alt={staff.name} style={styles.avatar} />
                    <input
                      name="name"
                      value={editFormData.name}
                      onChange={handleInputChange}
                      style={styles.inputField}
                    />
                  </td>
                  <td style={{ ...styles.tableCell, minWidth: 220 }}>
                    <input
                      name="email"
                      value={editFormData.email}
                      onChange={handleInputChange}
                      style={styles.inputField}
                    />
                  </td>
                  <td style={{ ...styles.tableCell, textAlign: 'center', minWidth: 120 }}>
                    <label style={styles.checkboxLabel}>
                      <input
                        name="active"
                        type="checkbox"
                        checked={editFormData.active}
                        onChange={handleInputChange}
                        style={styles.checkbox}
                      />
                      Active
                    </label>
                  </td>
                  <td style={{ ...styles.tableCell, ...styles.flexCell, minWidth: 230 }}>
                    <input
                      name="role"
                      value={editFormData.role}
                      onChange={handleInputChange}
                      style={{ ...styles.inputField, flex: '1 1 auto', marginRight: 12 }}
                    />
                    <span style={styles.saveText} onClick={handleSaveClick}>Save</span>
                    <span style={styles.cancelText} onClick={handleCancelClick}>Cancel</span>
                  </td>
                </>
              ) : (
                <>
                  <td style={{ ...styles.tableCell, ...styles.flexCell, minWidth: 230 }}>
                    <img src={staff.avatar} alt={staff.name} style={styles.avatar} />
                    <span>{staff.name}</span>
                  </td>
                  <td style={{ ...styles.tableCell, minWidth: 220 }}>{staff.email}</td>
                  <td style={{ ...styles.tableCell, minWidth: 120 }}>{staff.active ? 'Active' : 'Inactive'}</td>
                  <td style={{ ...styles.tableCell, ...styles.flexCell, minWidth: 230 }}>
                    <span style={styles.roleText}>{staff.role}</span>
                    <span
                      style={styles.editText}
                      onClick={() => handleEditClick(staff)}
                    >
                      Edit
                    </span>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  pageWrapper: {
    height: '100vh',
    width: '100vw',
    overflowY: 'auto',
    backgroundColor: '#EFEEEA',
    padding: 20,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  topControls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    maxWidth: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  leftControls: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  rightControls: {
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1,
  },
  addButton: {
    padding: '6px 16px',
    backgroundColor: '#FFDBDB',
    border: 'none',
    borderRadius: 4,
    color: 'black',
    fontSize: 14,
    cursor: 'pointer',
  },
  exportText: {
    cursor: 'pointer',
    color: 'black',
    textDecoration: 'underline',
    fontSize: 14,
  },
  searchInput: {
    padding: 8,
    border: '1px solid #ffffff',
    borderRadius: 4,
    width: 200,
    backgroundColor: '#FFFFFF',
    color: 'black',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  table: {
    width: '100%',
    maxWidth: 900,
    margin: '0 auto',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
    color: 'black',
  },
  tableHeader: {
    marginTop: '2',
    textAlign: 'left',
    padding: 12,
    backgroundColor: '#FFDBDB',
    fontWeight: 'bold',
    color: 'black',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: 12,
    color: 'black',
  },
  flexCell: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: '50%',
  },
  inputField: {
    padding: 6,
    border: '1px solid #ccc',
    borderRadius: 4,
    color: 'black',
    backgroundColor: 'white',
  },
  checkboxLabel: {
    color: 'black',
    fontSize: 14,
  },
  checkbox: {
    marginRight: 5,
  },
  saveText: {
    color: 'green',
    cursor: 'pointer',
    marginRight: 12,
  },
  cancelText: {
    color: 'red',
    cursor: 'pointer',
  },
  editText: {
    color: '#007BFF',
    cursor: 'pointer',
    marginLeft: 'auto',
  },
  roleText: {
    color: 'black',
  },
};