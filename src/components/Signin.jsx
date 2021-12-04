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
    <div className="flex justify-center items-center h-full bg-primary">
      <div className="w-full max-w-xs ">
        <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
              <input value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </label>
            {!!errorMessages.length
              && errorMessages.map((error) => <p key={error} className="text-red-500 text-xs italic">{error}</p>)}
          </div>
          <div className="flex items-center justify-between">
            <input className="bg-green-800 hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Sign in" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
