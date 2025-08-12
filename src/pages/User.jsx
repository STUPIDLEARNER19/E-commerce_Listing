
import React from 'react';

export default function User() {
  return (
    <div className="user-profile">
      <h2>User Account</h2>
      <div className="user-section">
  <img
    src="https://via.placeholder.com/60"
    alt="User Avatar"
    className="user-avatar"
  />
  <div className="user-info">
    <div className="user-name">Leon S Kennedy</div>
    <div className="user-status">Premium Member</div>
    <div className="user-menu">
      <button>Orders</button>
      <button>Wishlist</button>
      <button>Logout</button>
    </div>
  </div>
</div>

    </div>
  );
}