import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('Samrood');
  const [email, setEmail] = useState('samrood@gmailexample22.com');
  const [password, setPassword] = useState('password');
  const [passwordConfirmation, setPasswordConfirmation] = useState('password');

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:8000/auth/signup', {
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }, {

    });

    console.log(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">
        Enter Username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label htmlFor="username">
        Enter email
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="username">
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
