import React, { useState } from 'react';

const CourseForm = () => {
  // Define state variables to store form data
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [instructor, setInstructor] = useState('');
  const [credits, setCredits] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action with the form data, such as sending it to a backend server
    console.log({
      courseName,
      courseCode,
      instructor,
      credits
    });
    // Clear form fields after submission
    setCourseName('');
    setCourseCode('');
    setInstructor('');
    setCredits('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Course Name:</label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Course Code:</label>
        <input
          type="text"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Instructor:</label>
        <input
          type="text"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Credits:</label>
        <input
          type="number"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CourseForm;
