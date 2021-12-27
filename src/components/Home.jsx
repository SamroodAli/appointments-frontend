import { Link } from 'react-router-dom';

const Home = () => (
  <div className="p-5 pt-24 sm:pt-0 bg-secondary h-full grid grid-rows-2 justify-center items-center">
    <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-gray-900 leading-none">Codezilla appointments </h1>
      <div className="text-6xl text-gray-900 leading-none">Learn from the best</div>
      <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">All from the comfort of your home.</div>
      <Link to="/teachers">
        <button
          type="button"
          className="mt-6 px-8 py-4 rounded-full font-normal
        tracking-wide bg-gradient-to-b from-green-600 to-green-700
        text-white outline-none focus:outline-none hover:shadow-lg
        hover:from-green-700 transition duration-200 ease-in-out"
        >
          Check out our masters
        </button>
      </Link>
    </div>
    <div className="mt-12 lg:mt-12 lg:ml-20 text-left">
      <Link to="/teachers">
        <button type="button" className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

      </Link>
    </div>
  </div>
);

export default Home;
