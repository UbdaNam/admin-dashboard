import topDealsUsers from "../../mock/top-deals";
import "./top-deals.scss";

const TopDeals = () => {
  return (
    <div className="top-deals">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealsUsers.map((user) => (
          <div className="list-item" key={user.id}>
            <div className="user">
              <img src={user.avatar} alt={user.name} />
              <div className="user-details">
                <span className="username">{user.name}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
