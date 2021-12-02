import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useActions from '../hooks/useActions';

const Signin = () => {
  const [email, setEmail] = useState('samrood@gmailexample22.com');
  const [password, setPassword] = useState('password');
  const { signin } = useActions();
  const { errorMessages } = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    signin(email, password, navigate);
  };

  return (
    <div>
      {!!errorMessages.length && errorMessages.map((error) => <p key={error}>{error}</p>)}
      <form onSubmit={onSubmit}>
        <label htmlFor="username">
          Enter email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="username">
          Enter password
          <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Signin;
