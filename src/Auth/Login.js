import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === '' || formData.password === '') {
      alert('Please fill out all fields');
      return;
    }

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (
      storedUserData &&
      storedUserData.email === formData.email &&
      storedUserData.password === formData.password
    ) {
      alert('Login successful!');
      console.log('Logged In:', formData);
      
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/chatbox'); 
    } else {
      alert('Invalid email or password');
    }

    setFormData({ email: '', password: '' });
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); 
    localStorage.removeItem('userData'); 
    alert('Logged out successfully!');
    navigate('/'); 
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            required
          />
        </div>
        <button
          type="submit"
          style={{ padding: '10px 15px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px', marginBottom: '10px' }}
        >
          Login
        </button>
      </form>
      <button onClick={() => navigate('/register')}
        style={{ padding: '10px 15px', background: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Sign Up
      </button>
      <div style={{ marginTop: '15px' }}>
        <button onClick={handleLogout} style={{ padding: '10px 15px', background: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Login;
