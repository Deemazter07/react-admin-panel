import { topDealUsers } from "../../data";
import "./topBox.scss";

function TopBox() {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((item) => (
          <div className="listItem" key={item.id}>
            <div className="user">
              <img src={item.img} alt="" />
              <div className="userText">
                <span className="username">{item.username}</span>
                <span className="email">{item.email}</span>
              </div>
            </div>
            <div className="amount">${item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
