import { NavLink, Link } from "react-router-dom";
import LOGO from "../assests/images/logo.jpg";
import { useState } from "react";

export const Header = () => {
  const [hidden, setHidden] = useState(true);

  const activeClass =
    "block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inactiveClass =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header>
      <nav className="bg-dark border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src={LOGO} className="h-8 mr-3" alt="Tenant Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TenantTalk
            </span>
          </Link>

          <div className="md:hidden">
            
            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                {hidden ? (
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                )}
              </svg>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>

          <div className={`md:flex items-center ${hidden ? "hidden" : ""}`}>
            <div className="md:w-auto md:flex-grow md:flex md:items-center md:justify-center md:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/discussions"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Discussions
              </NavLink>
              <NavLink
                to="/cities"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Cities
              </NavLink>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>

              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
};
