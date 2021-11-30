import { useState } from 'react';
import rails from '../api/rails';

const Signin = () => {
  const [email, setEmail] = useState('samrood@gmailexample22.com');
  const [password, setPassword] = useState('password');

  const onSubmit = async (e) => {
    e.preventDefault();
    const { data } = await rails.post('/auth/signin', {
      auth: {
        email,
        password,
      },
    }, {
    });

    console.log(data);
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
