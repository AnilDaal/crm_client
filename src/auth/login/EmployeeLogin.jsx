import React, { useState } from 'react';
import './login.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLogin } from '../../store';

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(authLogin({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/customers');
      })
      .catch((err) => console.log('error in employee login page', err));

    // console.log(`emai: ${email}  password: ${password}`)
    // setIsLoading(true);
    // setError(null);

    // try {
    //   const { data } = await axios.post(
    //     'api/auth/login',
    //     { email, password },
    //     {
    //       Headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );
    //   localStorage.setItem('user', JSON.stringify(data));

    //   setIsLoading(true);
    // } catch (err) {
    //   console.log(err);
    //   setIsLoading(false);
    //   setError(err.response.data.error);
    // }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="login">
        <h3>
          Login form for <span>Employee</span>
        </h3>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Log In</button>
        {auth.error && <div className="error">{auth.error}</div>}
      </form>
    </div>
  );
};

export default Login;
