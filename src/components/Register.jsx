import React, { useState } from 'react';
import Nav from './ui/Nav';
import Footer from './ui/Footer';


function Register() {
  const [role, setRole] = useState('jobseeker');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
     <Nav/>
    <div className="register-container">
     
      <div className="register-card">
        <div className="form-header">
          <div className="form-icon">👜</div>
          <h2>Create Account</h2>
          <p>Join JobFinder today</p>
        </div>

        <div className="role-toggle">
          <button
            className={role === 'jobseeker' ? 'active' : ''}
            onClick={() => setRole('jobseeker')}
          >
            <span className="icon">👤</span> Job Seeker
          </button>
          <button
            className={role === 'employer' ? 'active' : ''}
            onClick={() => setRole('employer')}
          >
            <span className="icon">🏢</span> Employer
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder='**********'
          />

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
             placeholder='**********'
            required
          />

          <button type="submit" className="create-btn">Create Account</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
     
    </div>
     <Footer/>
     </>
  );
}

export default Register;
