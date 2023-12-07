import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="vite.svg" alt="Logo" />
        <span>Admin Panel</span>
      </div>

      <div className="icons">
        <img src="/search.svg" alt="icon" />
        <img src="/app.svg" alt="icon" />
        <img src="/expand.svg" alt="icon" />

        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>

        <div className="user">
          <img
            src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/5f99b9e404f206aa6aa532836758989327a3e88fbd76c4eb5f6bb60b0599ccc0.jpg"
            alt="User"
          />
          <span>Kim</span>
        </div>

        <img src="/settings.svg" alt="icon" />
      </div>
    </div>
  );
}

export default Navbar;
