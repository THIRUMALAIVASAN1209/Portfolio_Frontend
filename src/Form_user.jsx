import React, { useState } from 'react';
import axios from 'axios';

const FormUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  // Function to handle form submission
  const submit = async (event) => {
    event.preventDefault(); // Prevents the page from refreshing on form submit

    const userData = { 
      name: name, 
      email: email, 
      feedback: feedback 
    };

    try {
      const response = await axios.post('http://localhost:3000/users/create', userData);
      console.log(response.data); // Handle the response (e.g., show a success message)
    } catch (error) {
      console.error("Error submitting data: ", error); // Handle errors
    }
  };

  return (
    <div className='contact-right my-font-class'>
      <form onSubmit={submit}>
      <div >
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Feedback:</label>
        <textarea 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
          required 
        ></textarea>
      </div>
      <button style={{padding:"10px 20px",fontSize:"15px"}} type="submit">Submit</button>
    </form>
    </div>
  );
};

export default FormUser;
