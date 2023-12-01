import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeToggle, openToggle } from "../redux/toggleSlice";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Icon } from '@iconify/react';
import { LogoutUser } from "../redux/logOutSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const toggle = useAppSelector((state) => state.toggle.toggle);

  const handleToggle = () => {
    if (toggle) {
      dispatch(closeToggle());
    } else {
      dispatch(openToggle());
    }
  };

  const handleLogout=()=>{
    console.log(dispatch(LogoutUser(navigate)))
   
  }

  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-graydark dark:bg-meta-4" : "";

  return (
    <aside
      className={`${toggle ? "translate-x-0" : "-translate-x-full"}
  absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link to="/" className="text-4xl text-white">
          ADMIN
         {/* // <img src={Logo} alt="Logo" /> */}
        </Link>

        <button className="block lg:hidden" onClick={handleToggle}>
          <Icon
            icon="bi:arrow-left"
            className="fill-current text-white"
            width="20"
            height="18"
          />
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* Sidebar Menu */}
        <nav
          className="mt-5 py-4 px-4 lg:mt-9 lg:px-6"
          x-data="{selected: $persist('Dashboard')}"
        ></nav>
        {/* Menu Group */}
        <div className="">
          <h3 className="mb-4 ml-4 text-sm font-medium text-bodydark2">MENU</h3>

          <ul className="mb-6 flex flex-col gap-1.5">
            {/* <!-- Menu Item Dashboard --> */}
            <li>
              <NavLink
                to="/"
                className={`${active} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
              >
                <Icon
                  icon="radix-icons:dashboard"
                  className="fill-current"
                  width="18"
                  height="18"
                />
                Dashboard
                {/* <Icon
                  icon="grommet-icons:down"
                  className="absolute right-4 top-1/2 -translate-y-1/2 fill-current"
                  // className="{ 'rotate-180': (selected === 'Dashboard') }"
                  width="20"
                  height="20"
                /> */}
              </NavLink>
            </li>
            {/* <!-- Menu Item Dashboard --> */}

            {/* <!-- Menu Item Customers --> */}
            <li>
              <NavLink
                to="/customers"
                className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"

                //className="{ 'bg-graydark dark:bg-meta-4': (selected === 'Calendar') && (page === 'calendar') }"
              >
                <Icon
                  icon="arcticons:sbb-cint-customer-app"
                  className="fill-current"
                  width="18"
                  height="18"
                />
                Customers
              </NavLink>
            </li>
            {/* <!-- Menu Item Customers --> */}

            {/* <!-- Menu Item Properties --> */}
            <li>
              <NavLink
                to="/properties"
                className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"

                //className="{ 'bg-graydark dark:bg-meta-4': (selected === 'Calendar') && (page === 'calendar') }"
              >
                <Icon
                  icon="lucide:table-properties"
                  className="fill-current"
                  width="18"
                  height="18"
                />
                Properties
              </NavLink>
            </li>
            {/* <!-- Menu Item Properties --> */}

            {/* <!-- Menu Item Profile --> */}
            {/* <li>
              <NavLink
                to="/profile"
                className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"

                // className="{ 'bg-graydark dark:bg-meta-4': (selected === 'Profile') && (page === 'profile') }"
                //className="page === 'profile' && 'bg-graydark'"
              >
                <Icon
                  icon="iconamoon:profile-thin"
                  className="fill-current"
                  width="18"
                  height="18"
                />
                Profile
              </NavLink>
            </li> */}

            <li>
              <NavLink
                to="/settings"
                className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"

                //className="{ 'bg-graydark dark:bg-meta-4': (selected === 'Settings') && (page === 'settings') }"
                // className="page === 'settings' && 'bg-graydark'"
              >
                <Icon
                  icon="carbon:settings"
                  className="fill-current"
                  width="18"
                  height="19"
                />
                Create
              </NavLink>
            </li>

            {/* <!-- Menu Item Settings --> */}

            <li
            onClick={handleLogout}
                
                className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4  cursor-pointer"
              >
                <Icon
                  icon="material-symbols:logout"
                  className="fill-current color-[#fff]"
                  width="18"
                  height="19"
                />
                Logout
            
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
