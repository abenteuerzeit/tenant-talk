

export const Hero = () =>  {
  return (
      <section id="hero-content" className="w-full">
          <div className="flex flex-col w-full self-center bg-no-repeat bg-cover items-center justify-center bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2),rgba(0,0,0,1)),url('../src/assests/images/hero-content-bground.jpg')] h-[45vh] sm:h-[60vh] md:h-[75vh] lg:h-[90vh]">
              <div className="text-center text-white">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-normal tracking-[-.08em] text-shadow-hero-content">
                      Let's talk about your landlord
                  </h1>

                  <h4 className="text-sm md:text-2xl stroke-2">
                      Help other tenants find their perfect place to live{" "}
                  </h4>
              </div>
              <form className="flex justify-center mt-10 w-[70%]">
                  <label for="simple-search" className="sr-only">
                      Search
                  </label>
                  <div className="relative w-[50%] md:w-[70%]">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  fill-rule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clip-rule="evenodd"
                              ></path>
                          </svg>
                      </div>
                      <input
                          type="text"
                          id="simple-search"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search for an address.."
                          required
                      />
                  </div>
                  <button
                      type="submit"
                      className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                      <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                          <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                      </svg>
                      <span class="sr-only">Search</span>
                  </button>
              </form>
          </div>
          <div className="w-full h-[150px] bg-no-repeat bg-cover bg-[url('../src/assests/images/hero-content-triangle-bottom.png')] ">

          </div>
      </section>
  );
}



