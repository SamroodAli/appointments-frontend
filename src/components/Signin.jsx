import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
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
    <div className="flex justify-center items-center h-full bg-secondary">
      <div className="w-full max-w-xs ">
        <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Email
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </label>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
              <input value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </label>
            {!!errorMessages.length
              && errorMessages.map((error) => <p key={error} className="text-red-500 text-xs italic">{error}</p>)}
          </div>
          <div className="flex items-center justify-around">
            <input className="bg-green-300 hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Sign in" />
            <Link to="/signup" className="bg-blue-300 hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Sign in">
              Sign up ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
