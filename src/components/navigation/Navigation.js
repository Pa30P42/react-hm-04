import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export default class Navigation extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <ul className={styles.navList}>
          <li className={styles.navListitem}>
            <NavLink
              exact
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navListitem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
