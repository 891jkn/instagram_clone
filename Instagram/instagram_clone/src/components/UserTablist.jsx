import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
export default function UserTablist() {
  const [dataItem, setDataitem] = useState([
    {
      id: 1,
      imgURL:
        " https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80",
      heart: "100",
      comment: "100",
    },
    {
      id: 2,
      imgURL:
        "https://images.unsplash.com/photo-1616277898378-b6dca4877714?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      heart: "50",
      comment: "1000",
    },
    {
      id: 3,
      imgURL:
        "https://images.unsplash.com/photo-1647550809264-41120620eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      heart: "1000",
      comment: "100",
    },
    {
      id: 4,
      imgURL:
        "https://images.unsplash.com/photo-1647757697694-c3865d37414e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      heart: "1",
      comment: "00",
    },
    {
      id: 5,
      imgURL:
        "https://images.unsplash.com/photo-1647724065041-628d5b61c145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      heart: "90219",
      comment: "111",
    },
    {
      id: 6,
      imgURL:
        "https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      heart: "22",
      comment: "333",
    },
  ]);
  return (
    <main className="user__post">
      <div className="user__tablist flex items-center justify-center">
        <Link to="/user/" className="user__tablist-icon">
          {" "}
          <i class="fa-solid fa-table-cells"></i>
          <p className="user__tablist-title">POST</p>
        </Link>
        <Link to="/user/saved" className="user__tablist-icon ">
          <i class="fa-regular fa-bookmark"></i>{" "}
          <p className="user__tablist-title">save</p>
        </Link>
        <Link to="/user/tagged" className="user__tablist-icon">
          <i class="fa-regular fa-address-book"></i>
          <p className="user__tablist-title">TAGGED</p>
        </Link>
      </div>
      <div className="user__preview ">
        {dataItem.map((item) => (
          <div className="user__item">
            <img src={item.imgURL} alt="" className="z-0" />
            <div className="user__overlay  bg-black opacity-60">
              <div className="user__icon flex justify-center items-center">
                <div className="  user__icon-heart">
                  <i class="fa-solid fa-heart"></i>
                  {item.heart}
                </div>
                <div className="  user__icon-comment">
                  <i class="fa-solid fa-comment"></i>
                  {item.comment}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
