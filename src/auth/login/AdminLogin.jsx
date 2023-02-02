import React, { useState } from 'react';
import './login.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../../store';

import ClipLoader from 'react-spinners/ClipLoader';
import Spinner from '../../utils/Spinner';

const Login = () => {
  const { isLoading, token, error } = useSelector((state) => state.auth);

  console.log(token);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(adminLogin({ email, password }));
    // .unwrap()
    // .then((res) => {
    //   console.log(res);
    //   if (res) {
    //     localStorage.setItem('user', JSON.stringify(res));
    //     navigate('/main');
    //   }
    // })
    // .catch((err) => console.log('err in admin login page :', err));

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

  console.log(error);
  return (
    <div>
      <form onSubmit={handleSubmit} className="login">
        <h3>
          Login form for <span>Admin</span>
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
        <button disabled={isLoading}>
          {isLoading ? <ClipLoader color="#36d7b7" /> : 'Log In'}
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
