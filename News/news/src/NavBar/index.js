import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <div>
      {/* <Nav>
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            News
          </NavLink>
          <NavLink to='/events' activeStyle>
            Headlines
          </NavLink>
          <NavLink to='/blogs' activeStyle>
            Blogs
          </NavLink>
        </NavMenu>
      </Nav> */}
      <div>
                <nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg">
                    <a href="#" class="nav-brand navbar-brand">
                        <i class="fab fa-steam"></i>
                    </a>
                    <ul class="navbar-nav mr-auto bg-dark">
                        <li class="nav-item">
                            <a href="/about" class="nav-link">News</a>
                        </li>
                        <li class="nav-item">
                            <a href="/events" class="nav-link">Todays Headlines</a>
                        </li>
                        <li class="nav-item">
                            <a href="/blogs" class="nav-link">Blog</a>
                        </li>
                    </ul>
                </nav>
            </div >
    </div>
  );
};
  
export default Navbar;