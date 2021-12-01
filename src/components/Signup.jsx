import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useActions from '../hooks/useActions';

const Signup = () => {
  const [username, setUsername] = useState('Samrood');
  const [email, setEmail] = useState('samrood@gmailexample22.com');
  const [password, setPassword] = useState('password');
  const [passwordConfirmation, setPasswordConfirmation] = useState('password');
  const { signup, getCurrentUser } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser(navigate);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    signup(email, password, navigate);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">
        Enter Username
        <input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label htmlFor="email">
        Enter email
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="password">
        Enter password
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label htmlFor="username">
        Confirm password
        <input
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Signup;
