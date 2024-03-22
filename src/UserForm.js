import React, { useState } from 'react';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [displayedUsername, setDisplayedUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameAsString = username.toString();
    setDisplayedUsername(usernameAsString);
  };

  return (
    <div>
      <h2>Enter your username:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
        />
        <button type="submit">Submit</button>
      </form>
      {displayedUsername && <p>Your username as a string: {displayedUsername}</p>}
    </div>
  );
};

export default UserForm;