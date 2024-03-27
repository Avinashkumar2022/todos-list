import React, { useState } from 'react';

function UserDetailsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    RegNO: ''
  });
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const styles = {
    container: {
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    h2: {
      marginTop: '0'
    },
    label: {
      display: 'block',
      marginBottom: '5px'
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '3px'
    },
    button: {
      backgroundColor: 'red',
      color: '#fff',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '3px',
      cursor: 'pointer'
    },
    buttonHover: {
      backgroundColor: 'yellow'
    },
    pre: {
      backgroundColor: 'lime',
      padding: '10px',
      borderRadius: '3px',
      whiteSpace: 'pre-wrap'
    }
  };

  document.body.style.backgroundColor = 'blue';

  return (
    <div style={styles.container}>
      <h2 style={styles.h2}>User Details Form</h2>
      <form>
        <label htmlFor="name" style={styles.label}>Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <br />
        <label htmlFor="email" style={styles.label}>Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <br />
        <label htmlFor="RegNO" style={styles.label}>RegNo: </label>
        <input
          type="number"
          id="RegNO"
          name="RegNO"
          value={formData.RegNO}
          onChange={handleChange}
          style={styles.input}
        />
        <br />
        <button
          type="button"
          onClick={toggleDetails}
          style={{ ...styles.button, ...(showDetails && styles.buttonHover) }}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </form>
      {showDetails && (
        <pre style={styles.pre}>
          {JSON.stringify(formData, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default UserDetailsForm;
