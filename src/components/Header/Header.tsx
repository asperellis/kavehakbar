import React, { createRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Nav } from "../../components";

import * as classes from "./header.module.css";

export const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const nav = createRef<HTMLDivElement>();

  const handleClickOutside = (event: any) => {
    if (nav.current && !nav.current.contains(event.target)) {
      if (mobileNavOpen) {
        setMobileNavOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={classes.header}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link
              title="Kaveh Akbar"
              to="/"
              onClick={() => setMobileNavOpen(false)}
            >
              <h1 className={classes.logo}>
                KAVEH
                <br className="hidden-sm-down" />
                AKBAR
              </h1>
            </Link>
          </div>
          <div className="col-md-8 position-relative">
            <div className="row hidden-md-up">
              <div className="col-md-12">
                <nav ref={nav}>
                  <a
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    className={classes.mobileNavToggle}
                    title="Expand Menu"
                  >
                    MENU
                  </a>
                </nav>
              </div>
            </div>
            <Nav
              mobileNavOpen={mobileNavOpen}
              onClick={() => setMobileNavOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
