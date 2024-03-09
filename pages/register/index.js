import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender,setGender] = useState('');
  const [password, setPassword] = useState('');
const router=useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if the password is at least 6 characters long
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return; 
    }
  
    try {
      const response = await axios.post('https://bright-sunbonnet-cow.cyclic.app/user/register', {
        name,
        email,
      gender,
        password
      });
      console.log('Registration successful:', response.data);
   alert("Registration successful:")
   router.push("/")
    } catch (error) {
      console.error('Registration failed:', error);
alert("Something Went Wrong")
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Register</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select className="form-control" id="gender" value={gender} 
                  onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="not-to-disclose">Not to disclose</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
