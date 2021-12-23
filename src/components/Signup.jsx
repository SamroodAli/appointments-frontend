import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('password');
  const [passwordConfirmation, setPasswordConfirmation] = useState('password');
  const { errorMessages } = useSelector((state) => state.currentUser);

  const { signup } = useActions();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    signup(username, email, password, passwordConfirmation, navigate);
  };

  return (

    <div className="flex justify-center items-center h-full bg-blue-900">
      <div className="w-full max-w-xs ">
        <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
              <input value={username} onChange={(e) => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </label>
          </div>
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
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Confirm Password
              <input value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </label>
            {!!errorMessages.length
              && errorMessages.map((error) => <p key={error} className="text-red-500 text-xs italic">{error}</p>)}
          </div>
          <div className="flex items-center justify-around">
            <input className="bg-green-300 hover:bg-pink-600 hover:text-white text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Sign up" />
            <Link to="/signin" className="bg-blue-300 hover:bg-pink-600 hover:text-white text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Sign in">
              Sign in ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
