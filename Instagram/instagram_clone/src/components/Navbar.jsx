import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../css/navbar.css";

import logo from "../images/logo.png";
class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchValue: "" };
  }
  SearchComponent() {
    return (
      <>
        <form className="ui-search-form hidden xs:hidden sm:hidden md:block lg:block">
          <i className="fa-solid fa-glass"></i>
          <input
            className="ui-input"
            onChange={(e) => {
              this.setState({ searchValue: e.target.value });
            }}
          />
        </form>
      </>
    );
  }
  render() {
    return (
      <>
        <div className="navbar sticky top-0 z-50">
          <div className="container navbar-container mx-auto">
            <div className="flex flex-row py-3 w-full items-center">
              <a className="navbar-brand flex-auto" href="/">
                <img src={logo} className="logo md:mr-auto" />
              </a>
              <div className="flex-auto sm:hidden md:block lg:block px-2">
                <form className="ui-search-form ml-auto lg:w-5/6 md:w-full">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    className="ui-input w-3/4 "
                    placeholder="Search"
                    onChange={(e) => {
                      this.setState({ searchValue: e.target.value });
                    }}
                  />
                </form>
              </div>
              <div className="navbar-navigate flex-auto">
                <div className="flex space-x-6 justify-end">
                  <Link to="/">
                    <i className="fa-solid fa-house"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-regular fa-comment-dots"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-regular fa-square-plus"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-regular fa-compass"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-regular fa-heart"></i>
                  </Link>

                  <Link to="/user">
                    {" "}
                    <i className="fa-regular fa-circle-user"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}
export default Navbar;
