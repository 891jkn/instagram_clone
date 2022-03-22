import React from "react";

import "../css/user.scss";

import Navbar from "./Navbar";
import UserHeader from "./UserHeader";
import UserTablist from "./UserTablist";
export default function User() {
  return (
    <>
      <Navbar />
      <section className="user">
        <div className="container user__container">
          <UserHeader />
          <UserTablist />
        </div>
      </section>
    </>
  );
}
