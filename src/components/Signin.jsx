import { useState } from 'react';
import useActions from '../hooks/useActions';

const Signin = () => {
  const [email, setEmail] = useState('samrood@gmailexample22.com');
  const [password, setPassword] = useState('password');
  const { signin } = useActions();

  const onSubmit = async (e) => {
    e.preventDefault();
    signin(email, password);
  };

  return (
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
  );
};

export default Signin;
