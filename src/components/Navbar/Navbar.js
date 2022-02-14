import React, { useState } from "react";
import './Navbar.css';
import MyImage from "../../images/my.jpg";
import {
  AiOutlineBars,
  AiOutlineSwitcher,
  AiOutlineMessage,
} from "react-icons/ai";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <div>
      <nav className="navBar">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <AiOutlineBars
                className="toggle_Icon"
                onClick={() => setNav((myNav) => !myNav)}
              />
            </div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="hidden sm:block sm:ml-6">
                {/* Search Input */}
                <div class="flex space-x-4">
                  <div>
                    <div>
                      {/* <AiOutlineSearch size={30} /> */}
                      <input
                        placeholder="Search, Topic , Video , Audio , Live Telecast"
                        className="searchInput"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <AiOutlineSwitcher className="AiOutlineSwitcher_Icon" />
              <AiOutlineMessage className="messageIcon" />

              {/* <!-- Profile dropdown --> */}
              {/* DropDown Menu Handle with State */}
              <div class="ml-3 relative">
                <div>
                  <button
                    onClick={() => setDrop((val) => !val)}
                    type="button"
                    class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src={MyImage} alt="" />
                  </button>
                </div>

                {/* DropDown Menu Handle with State */}
                {drop && (
                  <>
                    <div
                      class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabindex="-1"
                    >
                      {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                      >
                        Sign out
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {nav && (
          <>
            <div class="sm:hidden" id="mobile-menu">
              <div class="px-2 pt-2 pb-3 space-y-1">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
