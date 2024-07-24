import React, { useState } from 'react';
import './Navbar.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menu = [
    {
      name: "home",
      submenu: [
        { name: "home 1" },
        { name: "home 2" },
        { name: "home 3" },
      ],
    },
    {
      name: "About us",
    },
    {
      name: "classis",
    },
    {
      name: "Why us",
      submenu: [
        { name: "advantage" },
        { name: "training" },
        {
          name: "details",
          moremenu: [
            { name: "level 2" },
            { name: "level 2" },
            { name: "level 2" },
            { name: "level 2" },
            { name: "level 2" },
          ],
        },
        {
          name: "Fee"
        }
      ],
    },
    {
      name: "Pricing",
    },
    {
      name: "contact us",
    },
  ];

  return (
    <div className="navbar w-screen font-bold text-[12px]">
      <div className="logo flex">
        <h1 className="logo-text">FIT </h1>
        <div>
          <CgGym className='flex items-center size-10' />
        </div>
        <h1>CLUB</h1>
      </div>
      <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <HiX className="menu-icon" /> : <HiOutlineMenu className="menu-icon md:hidden" />}
      </div>
      <div className={`menu z-50 ${isMobileMenuOpen ? 'open' : ''}`}>
        {menu.map((menuItem, index) => (
          <div key={index} className="menu-item">
            <button
              className="menu-button flex justify-center items-center gap-2"
              onClick={() => {
                setOpenMenu(openMenu === index ? null : index);
                setOpenSubmenu(null); // Close any open submenus
              }}
            >
              {menuItem.name}
              {(menuItem.submenu || menuItem.moremenu) && (
                openMenu === index ? <IoIosArrowUp /> : <IoIosArrowDown />
              )}
            </button>
            {menuItem.submenu && openMenu === index && (
              <ul className="submenu">
                {menuItem.submenu.map((submenuItem, subIndex) => (
                  <li key={subIndex} className="submenu-item flex items-center gap">
                    {submenuItem.name}
                    {submenuItem.name === "details" && (
                      <>
                        {/* <MdKeyboardArrowRight /> */}
                        <button
                          className="submenu-button"
                          onClick={() => setOpenSubmenu(openSubmenu === subIndex ? null : subIndex)}
                        >
                          {openSubmenu === subIndex ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                      </>
                    )}
                    {submenuItem.name === "details" && openSubmenu === subIndex && submenuItem.moremenu && (
                      <ul className="moremenu">
                        {submenuItem.moremenu.map((moremenuItem, moreSubIndex) => (
                          <li key={moreSubIndex} className="moremenu-item">
                            {moremenuItem.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
