import React from 'react';
import { NavLink } from 'react-router-dom';

import * as classes from './nav.module.css';

type NavProps = {
  mobileNavOpen: boolean
  onClick: () => void
}

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  classes.navItem + (isActive ? ` ${classes.active}` : "")

export const Nav = ({mobileNavOpen, onClick}: NavProps) => {
  return (
    <nav className={mobileNavOpen ? `${classes.nav} ${classes.expanded}`: classes.nav}>
      <div className="row">
        <div className="col-md-3">
          <NavLink
            className={navLinkClassName}
            title="About Kaveh Akbar"
            to="/about"
            onClick={onClick}
          >
            <h6 className={classes.navLink}>ABOUT</h6>
          </NavLink>
        </div>
        <div className="col-md-3">
          <NavLink
            className={navLinkClassName}
            title="Books"
            to="/books"
            onClick={onClick}
          >
            <h6 className={classes.navLink}>BOOKS</h6>
          </NavLink>
        </div>
        <div className="col-md-3">
          <NavLink
            className={navLinkClassName}
            title="Past and Upcoming Readings"
            to="/readings"
            onClick={onClick}
          >
            <h6 className={classes.navLink}>READINGS</h6>
          </NavLink>
        </div>
        <div className="col-md-3">
          <NavLink
            className={navLinkClassName}
            title="Press and Reviews"
            to="/words"
            onClick={onClick}
          >
            <h6 className={classes.navLink}>WORDS</h6>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
