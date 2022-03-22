import avatar from "../images/user.png";
export default function UserHeader() {
  return (
    <header className="user__header  ">
      <div className="user__avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="user__info">
        <div className="flex mb-5 ">
          <h1 className="user__name">khanhd43</h1>
        </div>
        <div className=" flex mb-5 gap-6">
          <div className="user__post">
            <strong>0</strong> Post
          </div>
          <div className="user__followers">
            <strong>100</strong> followers
          </div>
          <div className="user__following">
            <strong>1000</strong> following
          </div>
        </div>
        <div className="user__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illum
         
        </div>
      </div>
    </header>
  );
}
