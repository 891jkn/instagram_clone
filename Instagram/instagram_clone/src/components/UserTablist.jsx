import { Outlet, Link } from "react-router-dom";
export default function UserTablist() {
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
        <div className="user__item">
          <img
            src="
                              https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80"
            alt=""
            className="z-0"
          />
          <div className="user__overlay  bg-black opacity-60">
            <div className="user__icon flex justify-center items-center">
              <div className="  user__icon-heart">
                <i class="fa-solid fa-heart"></i>1
              </div>
              <div className="  user__icon-comment">
                <i class="fa-solid fa-comment"></i>10
              </div>
            </div>
          </div>
        </div>
        <div className="user__item">
          <img
            src="
                              https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="user__overlay  bg-black opacity-60">
            <div className="user__icon flex justify-center items-center">
              <div className="  user__icon-heart">
                <i class="fa-solid fa-heart"></i>1
              </div>
              <div className="  user__icon-comment">
                <i class="fa-solid fa-comment"></i>10
              </div>
            </div>
          </div>
        </div>
        <div className="user__item">
          <img
            src="
                              https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80"
            alt=""
          />
          <div className="user__overlay  bg-black opacity-60">
            <div className="user__icon flex justify-center items-center">
              <div className="  user__icon-heart">
                <i class="fa-solid fa-heart"></i>1
              </div>
              <div className="  user__icon-comment">
                <i class="fa-solid fa-comment"></i>10
              </div>
            </div>
          </div>
        </div>
        <div className="user__item">
          <img
            src="
                              https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80"
            alt=""
          />
          <div className="user__overlay  bg-black opacity-60">
            <div className="user__icon flex justify-center items-center">
              <div className="  user__icon-heart">
                <i class="fa-solid fa-heart"></i>1
              </div>
              <div className="  user__icon-comment">
                <i class="fa-solid fa-comment"></i>10
              </div>
            </div>
          </div>
        </div>
        <div className="user__item">
          <img
            src="
                              https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="user__overlay  bg-black opacity-60">
            <div className="user__icon flex justify-center items-center">
              <div className="  user__icon-heart">
                <i class="fa-solid fa-heart"></i>1
              </div>
              <div className="  user__icon-comment">
                <i class="fa-solid fa-comment"></i>10
              </div>
            </div>
          </div>
        </div>
        <div className="user__item">
          <img
            src="
                              https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80"
            alt=""
          />
          <div className="user__overlay  bg-black opacity-60">
            <div className="user__icon flex justify-center items-center">
              <div className="  user__icon-heart">
                <i class="fa-solid fa-heart"></i>1
              </div>
              <div className="  user__icon-comment">
                <i class="fa-solid fa-comment"></i>10
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
