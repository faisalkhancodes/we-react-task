// src/Teacher.jsx
const Teacher = (props) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h3>Teacher Details</h3>
      <p>Name: {props.name}</p>
      <p>Subject: {props.subject}</p>
    </div>
  );
};

export default Teacher;