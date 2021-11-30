import { useState } from 'react';
import rails from '../api/rails';

const Signup = () => {
  const [username, setUsername] = useState('Samrood');
  const [email, setEmail] = useState('samrood@gmailexample22.com');
  const [password, setPassword] = useState('password');
  const [passwordConfirmation, setPasswordConfirmation] = useState('password');

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await rails.post('/auth/signup', {
      user: {
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      },
    }, {
    });

    console.log(data);
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
