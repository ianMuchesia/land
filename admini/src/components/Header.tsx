import { Icon } from "@iconify/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeToggle, openToggle } from "../redux/toggleSlice";
import Logo from "../assets/images/logo/logo-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";


import { LogoutUser } from "../redux/logOutSlice";

const Header = () => {
  const dispatch = useAppDispatch();

  const toggle = useAppSelector((state) => state.toggle.toggle);

  const user = useAppSelector((state) => state.auth.user);

  const [dropDown, setDropDown] = useState(false);

  const handleToggle = () => {
    if (toggle) {
      dispatch(closeToggle());
    } else {
      dispatch(openToggle());
    }
  };
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
            // @click.stop="sidebarToggle = !sidebarToggle"
            onClick={handleToggle}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`${
                    !toggle ? "!w-full delay-300" : ""
                  } relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration- 200 ease-in-out dark:bg-white`}
                  //   className="{ '!w-full delay-300': !sidebarToggle }"
                ></span>
                <span
                  className={`${
                    !toggle ? "!w-full delay-400" : ""
                  } relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white`}
                  //   className="{ '!w-full delay-400': !sidebarToggle }"
                ></span>
                <span
                  className={`${
                    !toggle ? "!w-full delay-500" : ""
                  } relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white`}
                  //   className="{ '!w-full delay-500': !sidebarToggle }"
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`${
                    !toggle ? "!h-0 delay-[0]" : ""
                  } absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white`}
                  //   className="{ '!h-0 delay-[0]': !sidebarToggle }"
                ></span>
                <span
                  className={`${
                    !toggle ? "!h-0 delay-200" : ""
                  } delay-500 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white`}
                  //   className="{ '!h-0 dealy-200': !sidebarToggle }"
                ></span>
              </span>
            </span>
          </button>

          <a className="block flex-shrink-0 lg:hidden" href="index.html">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="hidden sm:block">
          <form action="" method="POST">
            <div className="relative">
              <button className="absolute top-1/2 left-0 -translate-y-1/2">
                <Icon
                  icon="iconamoon:search-thin"
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                  width="20"
                  height="20"
                />
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
              />
            </div>
          </form>
        </div>
        <div className="relative">
          <a
            className="flex items-center gap-4"
            href="#"
            onClick={() => {
              setDropDown((prevDrop) => !prevDrop);
            }}
          >
            <span className="hidden text-right lg:block">
              <span className="block text-sm font-medium text-black dark:text-white">
                {user.name}
              </span>
              <span className="block text-xs font-medium">Administrator</span>
            </span>

            <span className="h-12 w-12 bg-primary rounded-full p-2">
              <Icon
                icon="clarity:administrator-solid"
                className="text-white h-full w-full"
              />
            </span>

            <Icon
              icon="teenyicons:down-outline"
              className={` ${
                dropDown ? "rotate-180" : ""
              } hidden fill-current sm:block`}
              width="12"
              height="8"
            />
          </a>

          {/* <!-- Dropdown Start --> */}
          {dropDown && (
            <div className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                <li>
                  <Link
                    to="/settings"
                    className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                  >
                    <Icon
                      icon="solar:settings-outline"
                      className="fill-current"
                      width="22"
                      height="22"
                    />
                    Add Lands
                  </Link>
                </li>
              </ul>
              <button
                onClick={() => {
                  dispatch(LogoutUser());
                }}
                className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                <Icon
                  icon="basil:logout-outline"
                  className="fill-current"
                  width="22"
                  height="22"
                />
                Log Out
              </button>
            </div>
          )}

          {/* <!-- Dropdown End --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
