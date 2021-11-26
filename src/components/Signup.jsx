import { useState } from 'react';

const Signup = () => {
  const { username, setUsername } = useState('');
  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');
  const { passwordConfirmation, setPasswordConfirmation } = useState('');
  return (
    <form>
      <label htmlFor="username">
        Enter Username
        <input value={username} onChange={setUsername} />
      </label>
      <label htmlFor="username">
        Enter email
        <input value={email} onChange={setEmail} />
      </label>
      <label htmlFor="username">
        Enter password
        <input value={password} onChange={setPassword} />
      </label>
      <label htmlFor="username">
        Confirm password
        <input value={passwordConfirmation} onChange={setPasswordConfirmation} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Signup;
